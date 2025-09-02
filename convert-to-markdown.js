#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 浏览器显示名称映射
const browserNames = {
    'chrome': 'Chrome',
    'chrome_android': 'Chrome Android',
    'edge': 'Edge',
    'firefox': 'Firefox',
    'firefox_android': 'Firefox Android',
    'ie': 'Internet Explorer',
    'nodejs': 'Node.js',
    'opera': 'Opera',
    'opera_android': 'Opera Android',
    'safari': 'Safari',
    'safari_ios': 'Safari iOS',
    'webview_android': 'WebView Android',
    'samsunginternet_android': 'Samsung Internet'
};

// 转换单个JSON文件为Markdown
function convertJsonToMarkdown(jsonPath, outputDir) {
    try {
        const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        const fileName = path.basename(jsonPath, '.json');
        const apiName = Object.keys(jsonData.api)[0];
        const apiData = jsonData.api[apiName];
        
        if (!apiData.__compat) {
            console.warn(`跳过 ${fileName}: 没有兼容性数据`);
            return;
        }
        
        const compat = apiData.__compat;
        let markdown = generateApiMarkdown(apiName, compat, fileName);
        
        // 创建输出目录
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        
        // 写入Markdown文件
        const outputPath = path.join(outputDir, `${fileName}.md`);
        fs.writeFileSync(outputPath, markdown, 'utf8');
        
        console.log(`✅ 转换完成: ${fileName}.json -> ${fileName}.md`);
        
    } catch (error) {
        console.error(`❌ 转换失败 ${jsonPath}:`, error.message);
    }
}

// 生成API的Markdown内容
function generateApiMarkdown(apiName, compat, fileName) {
    let md = `# ${apiName} API 兼容性数据\n\n`;
    
    // 基本信息
    md += `## 基本信息\n\n`;
    md += `- **API名称**: \`${apiName}\`\n`;
    if (compat.mdn_url) {
        md += `- **MDN文档**: [${apiName}](${compat.mdn_url})\n`;
    }
    if (compat.spec_url) {
        md += `- **规范文档**: [查看规范](${compat.spec_url})\n`;
    }
    if (compat.tags && compat.tags.length > 0) {
        md += `- **标签**: ${compat.tags.map(tag => `\`${tag}\``).join(', ')}\n`;
    }
    md += `\n`;
    
    // 使用示例
    md += generateUsageExamples(apiName);
    
    // 兼容性表格
    md += generateCompatibilityTable(compat.support);
    
    // 详细兼容性信息
    md += generateDetailedCompatibility(compat.support);
    
    // JavaScript代码示例
    md += generateCodeExamples(apiName, compat);
    
    return md;
}

// 生成使用示例
function generateUsageExamples(apiName) {
    let md = `## 使用示例\n\n`;
    
    // 根据API类型生成不同的示例
    if (apiName.includes('setTimeout') || apiName.includes('setInterval')) {
        md += `### 基本用法\n\n`;
        md += `\`\`\`javascript\n`;
        md += `// 设置延时执行\n`;
        md += `const timeoutId = setTimeout(() => {\n`;
        md += `    console.log('延时执行的代码');\n`;
        md += `}, 1000);\n\n`;
        md += `// 清除延时\n`;
        md += `clearTimeout(timeoutId);\n`;
        md += `\`\`\`\n\n`;
        
        md += `### 高级用法\n\n`;
        md += `\`\`\`javascript\n`;
        md += `// 传递参数\n`;
        md += `setTimeout((message, count) => {\n`;
        md += `    console.log(\`\${message} - 第\${count}次\`);\n`;
        md += `}, 2000, 'Hello World', 1);\n\n`;
        md += `// 返回Promise的封装\n`;
        md += `function delay(ms) {\n`;
        md += `    return new Promise(resolve => setTimeout(resolve, ms));\n`;
        md += `}\n\n`;
        md += `// 使用async/await\n`;
        md += `async function example() {\n`;
        md += `    console.log('开始');\n`;
        md += `    await delay(1000);\n`;
        md += `    console.log('1秒后执行');\n`;
        md += `}\n`;
        md += `\`\`\`\n\n`;
    } else if (apiName.includes('fetch')) {
        md += `### GET请求\n\n`;
        md += `\`\`\`javascript\n`;
        md += `fetch('https://api.example.com/data')\n`;
        md += `    .then(response => response.json())\n`;
        md += `    .then(data => console.log(data))\n`;
        md += `    .catch(error => console.error('Error:', error));\n`;
        md += `\`\`\`\n\n`;
        
        md += `### POST请求\n\n`;
        md += `\`\`\`javascript\n`;
        md += `fetch('https://api.example.com/data', {\n`;
        md += `    method: 'POST',\n`;
        md += `    headers: {\n`;
        md += `        'Content-Type': 'application/json',\n`;
        md += `    },\n`;
        md += `    body: JSON.stringify({ key: 'value' })\n`;
        md += `})\n`;
        md += `.then(response => response.json())\n`;
        md += `.then(data => console.log(data));\n`;
        md += `\`\`\`\n\n`;
    } else {
        md += `### 基本用法\n\n`;
        md += `\`\`\`javascript\n`;
        md += `// ${apiName} 使用示例\n`;
        md += `// 请查阅MDN文档了解具体用法\n`;
        md += `console.log('${apiName} API');\n`;
        md += `\`\`\`\n\n`;
    }
    
    return md;
}

// 生成兼容性表格
function generateCompatibilityTable(support) {
    let md = `## 浏览器兼容性\n\n`;
    md += `| 浏览器 | 支持版本 | 说明 |\n`;
    md += `|--------|----------|------|\n`;
    
    Object.entries(support).forEach(([browser, info]) => {
        const browserName = browserNames[browser] || browser;
        let version = '';
        let notes = '';
        
        if (typeof info === 'string' && info === 'mirror') {
            version = '同主版本';
        } else if (typeof info === 'object') {
            if (info.version_added === true) {
                version = '✅ 支持';
            } else if (info.version_added === false) {
                version = '❌ 不支持';
            } else {
                version = info.version_added || '未知';
            }
            
            if (info.partial_implementation) {
                version += ' (部分支持)';
            }
            
            if (info.notes) {
                if (Array.isArray(info.notes)) {
                    notes = info.notes.join('; ');
                } else if (typeof info.notes === 'string') {
                    notes = info.notes;
                }
            }
        }
        
        md += `| ${browserName} | ${version} | ${notes} |\n`;
    });
    
    md += `\n`;
    return md;
}

// 生成详细兼容性信息
function generateDetailedCompatibility(support) {
    let md = `## 详细兼容性信息\n\n`;
    
    Object.entries(support).forEach(([browser, info]) => {
        if (typeof info === 'object' && info !== null && info !== 'mirror') {
            const browserName = browserNames[browser] || browser;
            md += `### ${browserName}\n\n`;
            
            if (info.version_added !== undefined) {
                md += `- **支持版本**: ${info.version_added === true ? '全部版本' : 
                                                info.version_added === false ? '不支持' : 
                                                info.version_added}\n`;
            }
            
            if (info.version_removed) {
                md += `- **移除版本**: ${info.version_removed}\n`;
            }
            
            if (info.partial_implementation) {
                md += `- **部分实现**: 是\n`;
            }
            
            if (info.notes) {
                md += `- **注意事项**:\n`;
                if (Array.isArray(info.notes)) {
                    info.notes.forEach(note => {
                        md += `  - ${note}\n`;
                    });
                } else if (typeof info.notes === 'string') {
                    md += `  - ${info.notes}\n`;
                }
            }
            
            md += `\n`;
        }
    });
    
    return md;
}

// 生成代码示例
function generateCodeExamples(apiName, compat) {
    let md = `## 兼容性检查代码\n\n`;
    
    md += `### 特性检测\n\n`;
    md += `\`\`\`javascript\n`;
    md += `// 检查${apiName}是否支持\n`;
    md += `function is${apiName}Supported() {\n`;
    
    if (apiName === 'setTimeout' || apiName === 'setInterval') {
        md += `    return typeof ${apiName} === 'function';\n`;
    } else if (apiName.startsWith('HTML') || apiName.startsWith('SVG')) {
        md += `    return typeof ${apiName} !== 'undefined';\n`;
    } else {
        md += `    return '${apiName}' in window || typeof ${apiName} !== 'undefined';\n`;
    }
    
    md += `}\n\n`;
    md += `if (is${apiName}Supported()) {\n`;
    md += `    console.log('${apiName} 支持');\n`;
    md += `    // 使用${apiName}\n`;
    md += `} else {\n`;
    md += `    console.log('${apiName} 不支持，需要polyfill');\n`;
    md += `    // 加载polyfill或使用替代方案\n`;
    md += `}\n`;
    md += `\`\`\`\n\n`;
    
    // Polyfill示例
    md += `### Polyfill示例\n\n`;
    md += `\`\`\`javascript\n`;
    if (apiName === 'setTimeout') {
        md += `// setTimeout polyfill (适用于非常老的浏览器)\n`;
        md += `if (!window.setTimeout) {\n`;
        md += `    window.setTimeout = function(callback, delay) {\n`;
        md += `        // 简单的polyfill实现\n`;
        md += `        return window.setInterval(function() {\n`;
        md += `            callback();\n`;
        md += `            clearInterval(this);\n`;
        md += `        }, delay);\n`;
        md += `    };\n`;
        md += `}\n`;
    } else {
        md += `// ${apiName} polyfill\n`;
        md += `if (!window.${apiName}) {\n`;
        md += `    // 在这里添加polyfill实现\n`;
        md += `    console.log('加载${apiName} polyfill');\n`;
        md += `}\n`;
    }
    md += `\`\`\`\n\n`;
    
    return md;
}

// 主函数
function main() {
    const inputDir = process.argv[2] || './';
    const outputDir = process.argv[3] || './docs';
    
    console.log(`🚀 开始转换JSON文件到Markdown...`);
    console.log(`📁 输入目录: ${inputDir}`);
    console.log(`📁 输出目录: ${outputDir}`);
    console.log('');
    
    // 读取所有JSON文件
    const files = fs.readdirSync(inputDir, { withFileTypes: true });
    let convertedCount = 0;
    
    files.forEach(file => {
        if (file.isFile() && file.name.endsWith('.json')) {
            const jsonPath = path.join(inputDir, file.name);
            convertJsonToMarkdown(jsonPath, outputDir);
            convertedCount++;
        } else if (file.isDirectory() && file.name === '_globals') {
            // 处理_globals目录
            const globalsDir = path.join(inputDir, '_globals');
            const globalsOutputDir = path.join(outputDir, '_globals');
            
            const globalFiles = fs.readdirSync(globalsDir);
            globalFiles.forEach(globalFile => {
                if (globalFile.endsWith('.json')) {
                    const jsonPath = path.join(globalsDir, globalFile);
                    convertJsonToMarkdown(jsonPath, globalsOutputDir);
                    convertedCount++;
                }
            });
        }
    });
    
    console.log('');
    console.log(`🎉 转换完成！共转换了 ${convertedCount} 个文件`);
    console.log(`📖 Markdown文档已生成到: ${outputDir}`);
}

// 运行脚本
if (import.meta.url === `file://${process.argv[1]}`) {
    main();
}

export { convertJsonToMarkdown, generateApiMarkdown };
