# 使用示例

## 快速开始

### 安装依赖

```bash
npm install
```

### 基础示例

```javascript
// 导入API数据
const fs = require('fs');
const path = require('path');

// 读取setTimeout API数据
const setTimeoutData = JSON.parse(
    fs.readFileSync(path.join(__dirname, '_globals/setTimeout.json'), 'utf8')
);

console.log(setTimeoutData.api.setTimeout.__compat.description);
```

### 高级用法

#### 1. 批量兼容性检查

```javascript
class CompatibilityChecker {
    constructor(dataPath) {
        this.dataPath = dataPath;
        this.cache = new Map();
    }
    
    loadApiData(apiName) {
        if (this.cache.has(apiName)) {
            return this.cache.get(apiName);
        }
        
        try {
            const filePath = path.join(this.dataPath, `${apiName}.json`);
            const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            this.cache.set(apiName, data);
            return data;
        } catch (error) {
            console.warn(`无法加载 ${apiName} 数据:`, error.message);
            return null;
        }
    }
    
    checkSupport(apiName, browser, version) {
        const data = this.loadApiData(apiName);
        if (!data) return false;
        
        const compat = data.api[apiName].__compat;
        const support = compat.support[browser];
        
        if (!support) return false;
        if (support.version_added === true) return true;
        if (support.version_added === false) return false;
        
        return this.compareVersions(version, support.version_added) >= 0;
    }
    
    compareVersions(v1, v2) {
        const parts1 = v1.toString().split('.').map(Number);
        const parts2 = v2.toString().split('.').map(Number);
        const maxLength = Math.max(parts1.length, parts2.length);
        
        for (let i = 0; i < maxLength; i++) {
            const part1 = parts1[i] || 0;
            const part2 = parts2[i] || 0;
            
            if (part1 > part2) return 1;
            if (part1 < part2) return -1;
        }
        
        return 0;
    }
}

// 使用示例
const checker = new CompatibilityChecker('./');
console.log(checker.checkSupport('setTimeout', 'chrome', '90')); // true
```

#### 2. 生成兼容性报告

```javascript
function generateCompatibilityReport(apis, targetBrowsers) {
    const report = {
        summary: {},
        details: {}
    };
    
    apis.forEach(apiName => {
        const apiData = checker.loadApiData(apiName);
        if (!apiData) return;
        
        const compat = apiData.api[apiName].__compat;
        report.details[apiName] = {};
        
        targetBrowsers.forEach(({ browser, version }) => {
            const isSupported = checker.checkSupport(apiName, browser, version);
            report.details[apiName][`${browser}_${version}`] = isSupported;
            
            // 更新摘要
            const key = `${browser}_${version}`;
            if (!report.summary[key]) {
                report.summary[key] = { supported: 0, total: 0 };
            }
            report.summary[key].total++;
            if (isSupported) report.summary[key].supported++;
        });
    });
    
    return report;
}

// 生成报告
const targetBrowsers = [
    { browser: 'chrome', version: '90' },
    { browser: 'firefox', version: '88' },
    { browser: 'safari', version: '14' }
];

const apis = ['setTimeout', 'fetch', 'WebSocket'];
const report = generateCompatibilityReport(apis, targetBrowsers);
console.log(JSON.stringify(report, null, 2));
```

#### 3. Polyfill 建议器

```javascript
class PolyfillSuggester {
    constructor() {
        this.polyfills = {
            'fetch': 'whatwg-fetch',
            'Promise': 'es6-promise',
            'Object.assign': 'object-assign',
            'Array.from': 'array-from'
        };
    }
    
    suggestPolyfills(apis, targetBrowser, targetVersion) {
        const suggestions = [];
        
        apis.forEach(apiName => {
            const isSupported = checker.checkSupport(apiName, targetBrowser, targetVersion);
            
            if (!isSupported && this.polyfills[apiName]) {
                suggestions.push({
                    api: apiName,
                    polyfill: this.polyfills[apiName],
                    reason: `${apiName} 在 ${targetBrowser} ${targetVersion} 中不支持`
                });
            }
        });
        
        return suggestions;
    }
}

const suggester = new PolyfillSuggester();
const suggestions = suggester.suggestPolyfills(['fetch', 'Promise'], 'ie', '11');
console.log('建议的 Polyfills:', suggestions);
```

## 实际应用场景

### Webpack 插件

```javascript
class BrowserCompatibilityPlugin {
    constructor(options = {}) {
        this.targetBrowsers = options.targetBrowsers || [];
        this.failOnIncompatible = options.failOnIncompatible || false;
    }
    
    apply(compiler) {
        compiler.hooks.afterCompile.tapAsync(
            'BrowserCompatibilityPlugin',
            (compilation, callback) => {
                this.checkCompatibility(compilation)
                    .then(() => callback())
                    .catch(callback);
            }
        );
    }
    
    async checkCompatibility(compilation) {
        const usedApis = this.extractAPIsFromCode(compilation);
        const incompatibleApis = [];
        
        for (const api of usedApis) {
            for (const target of this.targetBrowsers) {
                const isSupported = checker.checkSupport(api, target.browser, target.version);
                if (!isSupported) {
                    incompatibleApis.push({ api, target });
                }
            }
        }
        
        if (incompatibleApis.length > 0) {
            const message = `发现不兼容的API: ${incompatibleApis.map(i => i.api).join(', ')}`;
            
            if (this.failOnIncompatible) {
                throw new Error(message);
            } else {
                console.warn(message);
            }
        }
    }
}
```

### ESLint 规则

```javascript
module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description: '检查API浏览器兼容性',
            category: 'Possible Errors'
        }
    },
    
    create(context) {
        const options = context.options[0] || {};
        const targetBrowsers = options.targetBrowsers || [];
        
        return {
            CallExpression(node) {
                if (node.callee.type === 'Identifier') {
                    const apiName = node.callee.name;
                    
                    targetBrowsers.forEach(target => {
                        const isSupported = checker.checkSupport(
                            apiName, 
                            target.browser, 
                            target.version
                        );
                        
                        if (!isSupported) {
                            context.report({
                                node,
                                message: `${apiName} 在 ${target.browser} ${target.version} 中不支持`
                            });
                        }
                    });
                }
            }
        };
    }
};
```

## 测试示例

```javascript
const assert = require('assert');

describe('兼容性检查器', () => {
    it('应该正确检查setTimeout的支持情况', () => {
        const isSupported = checker.checkSupport('setTimeout', 'chrome', '1');
        assert.strictEqual(isSupported, true);
    });
    
    it('应该正确处理不存在的API', () => {
        const isSupported = checker.checkSupport('nonexistentAPI', 'chrome', '90');
        assert.strictEqual(isSupported, false);
    });
    
    it('应该正确比较版本号', () => {
        assert.strictEqual(checker.compareVersions('90', '89'), 1);
        assert.strictEqual(checker.compareVersions('90', '90'), 0);
        assert.strictEqual(checker.compareVersions('89', '90'), -1);
    });
});
```
