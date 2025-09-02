# Browser API Compatibility Data

这个仓库包含了全面的浏览器API兼容性数据，涵盖了各种Web API在不同浏览器和版本中的支持情况。

## 📊 数据概览

- **API数量**: 1000+ 个Web API
- **数据格式**: JSON
- **覆盖范围**: 主流浏览器的兼容性信息

## 🚀 使用方法

### 基本用法

```javascript
// 获取特定API的兼容性数据
const apiData = require('./setTimeout.json');
console.log(apiData.api.setTimeout.__compat);
```

### 检查浏览器支持

```javascript
// 检查setTimeout在Chrome中的支持情况
const timeoutData = require('./_globals/setTimeout.json');
const chromeSupport = timeoutData.api.setTimeout.__compat.support.chrome;

if (chromeSupport.version_added) {
    console.log(`Chrome从版本 ${chromeSupport.version_added} 开始支持setTimeout`);
}
```

### 批量处理API数据

```javascript
const fs = require('fs');
const path = require('path');

// 读取所有API文件
function loadAllApis() {
    const apiFiles = fs.readdirSync('./').filter(file => file.endsWith('.json'));
    const apis = {};
    
    apiFiles.forEach(file => {
        const apiName = path.basename(file, '.json');
        apis[apiName] = require(`./${file}`);
    });
    
    return apis;
}

const allApis = loadAllApis();
console.log(`加载了 ${Object.keys(allApis).length} 个API`);
```

### 兼容性检查工具

```javascript
// 检查API在指定浏览器版本中的支持情况
function checkCompatibility(apiName, browser, version) {
    try {
        const apiData = require(`./${apiName}.json`);
        const browserSupport = apiData.api[apiName].__compat.support[browser];
        
        if (!browserSupport) return false;
        
        const supportedVersion = browserSupport.version_added;
        if (supportedVersion === true) return true;
        if (supportedVersion === false) return false;
        
        return parseFloat(version) >= parseFloat(supportedVersion);
    } catch (error) {
        console.error(`无法检查 ${apiName} 的兼容性:`, error.message);
        return false;
    }
}

// 使用示例
console.log(checkCompatibility('setTimeout', 'chrome', '90')); // true
console.log(checkCompatibility('setTimeout', 'ie', '8')); // false
```

## 📁 文件结构

```
api/
├── _globals/           # 全局API
│   ├── setTimeout.json
│   ├── setInterval.json
│   ├── fetch.json
│   └── ...
├── AbortController.json
├── AudioContext.json
├── Canvas*.json
└── ...
```

## 🔍 数据格式说明

每个JSON文件都遵循以下结构：

```json
{
  "api": {
    "APIName": {
      "__compat": {
        "description": "API描述",
        "support": {
          "chrome": {
            "version_added": "1"
          },
          "firefox": {
            "version_added": "1"
          },
          "safari": {
            "version_added": "3"
          }
        }
      }
    }
  }
}
```

## 🌐 支持的浏览器

- Chrome/Chromium
- Firefox
- Safari
- Edge
- Internet Explorer
- Opera
- Samsung Internet
- WebView (Android)

## 📈 使用场景

### 1. 构建工具集成

```javascript
// webpack插件示例
class BrowserCompatPlugin {
    apply(compiler) {
        compiler.hooks.compile.tap('BrowserCompatPlugin', () => {
            // 检查使用的API的兼容性
            this.checkApiCompatibility();
        });
    }
    
    checkApiCompatibility() {
        const usedApis = this.extractUsedApis();
        const targetBrowsers = ['chrome >= 70', 'firefox >= 65'];
        
        usedApis.forEach(api => {
            // 使用兼容性数据进行检查
            console.log(`检查 ${api} 的兼容性...`);
        });
    }
}
```

### 2. 运行时特性检测

```javascript
// 动态检查API支持
function createCompatibilityChecker(apiData) {
    return {
        isSupported: (apiName, userAgent) => {
            const browser = this.detectBrowser(userAgent);
            return checkCompatibility(apiName, browser.name, browser.version);
        },
        
        getAlternatives: (apiName) => {
            // 返回替代方案
            return apiData.alternatives || [];
        }
    };
}
```

### 3. 文档生成

```javascript
// 生成兼容性表格
function generateCompatibilityTable(apiName) {
    const data = require(`./${apiName}.json`);
    const support = data.api[apiName].__compat.support;
    
    let table = '| 浏览器 | 支持版本 |\n|--------|----------|\n';
    
    Object.entries(support).forEach(([browser, info]) => {
        const version = info.version_added === true ? '✅' : 
                       info.version_added === false ? '❌' : 
                       info.version_added;
        table += `| ${browser} | ${version} |\n`;
    });
    
    return table;
}
```

## 🤝 贡献指南

如果您想为这个项目贡献代码或数据：

1. Fork 这个仓库
2. 创建特性分支: `git checkout -b feature/new-api`
3. 提交更改: `git commit -am 'Add new API data'`
4. 推送到分支: `git push origin feature/new-api`
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🔗 相关资源

- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/)
- [Browser Compatibility Data](https://github.com/mdn/browser-compat-data)

---

**注意**: 这些数据仅供参考，实际使用时请以最新的浏览器测试结果为准。
