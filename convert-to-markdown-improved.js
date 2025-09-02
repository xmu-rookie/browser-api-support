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
    'samsunginternet_android': 'Samsung Internet',
    'bun': 'Bun',
    'deno': 'Deno',
    'oculus': 'Oculus'
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
        
        // 处理主API
        const compat = apiData.__compat;
        let markdown = generateApiMarkdown(apiName, compat, fileName);
        
        // 创建输出目录结构
        const relativePath = path.relative('./', jsonPath);
        const outputPath = path.join(outputDir, relativePath.replace('.json', '.md'));
        const outputDirPath = path.dirname(outputPath);
        
        if (!fs.existsSync(outputDirPath)) {
            fs.mkdirSync(outputDirPath, { recursive: true });
        }
        
        fs.writeFileSync(outputPath, markdown);
        console.log(`✅ 转换完成: ${fileName}.json -> ${path.basename(outputPath)}`);
        
        // 处理子API（如Navigator的方法）
        processSubApis(apiData, apiName, outputDirPath, fileName);
        
    } catch (error) {
        console.error(`❌ 转换失败 ${jsonPath}:`, error.message);
    }
}

// 处理子API（如Navigator的方法和属性）
function processSubApis(apiData, parentApiName, outputDirPath, fileName) {
    Object.keys(apiData).forEach(key => {
        if (key !== '__compat' && typeof apiData[key] === 'object' && apiData[key].__compat) {
            const subApiData = apiData[key];
            const subApiName = `${parentApiName}.${key}`;
            
            // 生成子API的Markdown
            const subMarkdown = generateApiMarkdown(subApiName, subApiData.__compat, `${fileName}_${key}`, subApiData);
            
            // 保存到单独的文件
            const subOutputPath = path.join(outputDirPath, `${fileName}_${key}.md`);
            fs.writeFileSync(subOutputPath, subMarkdown);
            console.log(`✅ 子API转换完成: ${fileName}_${key}.md`);
            
            // 递归处理更深层的嵌套（如Navigator.canShare.data_files_parameter）
            processSubApis(subApiData, subApiName, outputDirPath, `${fileName}_${key}`);
        }
    });
}

// 生成API的Markdown内容
function generateApiMarkdown(apiName, compat, fileName, fullApiData = null) {
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
    if (compat.description) {
        md += `- **描述**: ${compat.description}\n`;
    }
    
    md += `\n`;
    
    // 使用示例
    md += `## 使用示例\n\n`;
    md += `### 基本用法\n\n`;
    md += `\`\`\`javascript\n`;
    
    // 根据API名称生成特定的使用示例
    if (apiName.includes('vibrate')) {
        md += `// 使用振动API\n// 振动200毫秒\nnavigator.vibrate(200);\n\n// 振动模式：振动-停止-振动\nnavigator.vibrate([200, 100, 200]);\n`;
    } else if (apiName.includes('geolocation')) {
        md += `// 获取地理位置\nnavigator.geolocation.getCurrentPosition(\n    function(position) {\n        console.log('纬度:', position.coords.latitude);\n        console.log('经度:', position.coords.longitude);\n    },\n    function(error) {\n        console.error('获取位置失败:', error);\n    }\n);\n`;
    } else if (apiName.includes('share')) {
        md += `// 使用Web Share API\nnavigator.share({\n    title: '分享标题',\n    text: '分享内容',\n    url: 'https://example.com'\n}).then(() => {\n    console.log('分享成功');\n}).catch(err => {\n    console.error('分享失败:', err);\n});\n`;
    } else if (apiName.includes('clipboard')) {
        md += `// 使用剪贴板API\n// 写入剪贴板\nnavigator.clipboard.writeText('复制的文本').then(() => {\n    console.log('文本已复制到剪贴板');\n});\n\n// 读取剪贴板\nnavigator.clipboard.readText().then(text => {\n    console.log('剪贴板内容:', text);\n});\n`;
    } else if (apiName.includes('serviceWorker')) {
        md += `// 注册Service Worker\nnavigator.serviceWorker.register('/sw.js')\n    .then(registration => {\n        console.log('SW 注册成功:', registration);\n    })\n    .catch(error => {\n        console.log('SW 注册失败:', error);\n    });\n`;
    } else {
        md += `// ${apiName} 使用示例\n// 请查阅MDN文档了解具体用法\nconsole.log('${apiName} API');\n`;
    }
    
    md += `\`\`\`\n\n`;
    
    // 浏览器兼容性
    if (compat.support) {
        md += generateCompatibilityTable(compat.support);
        md += generateDetailedCompatibility(compat.support);
    }
    
    // 特性检测和Polyfill功能已移除，保持代码简洁
    
    // 如果有子API，列出它们
    if (fullApiData) {
        const subApis = Object.keys(fullApiData).filter(key => 
            key !== '__compat' && 
            typeof fullApiData[key] === 'object' && 
            fullApiData[key].__compat
        );
        
        if (subApis.length > 0) {
            md += `## 相关子API\n\n`;
            md += `该API包含以下子功能：\n\n`;
            subApis.forEach(subApi => {
                md += `- **${subApi}**: ${fullApiData[subApi].__compat.description || '查看详细兼容性'}\n`;
            });
            md += `\n`;
        }
    }
    
    return md;
}

// 生成兼容性表格
function generateCompatibilityTable(support) {
    let md = `## 浏览器兼容性\n\n`;
    md += `| 浏览器 | 支持版本 | 说明 |\n`;
    md += `|--------|----------|------|\n`;
    
    Object.keys(support).forEach(browser => {
        const browserInfo = support[browser];
        const displayName = browserNames[browser] || browser;
        let version = '';
        let notes = '';
        
        if (typeof browserInfo === 'string' && browserInfo === 'mirror') {
            version = '同主版本';
        } else if (typeof browserInfo === 'object' && browserInfo !== null) {
            if (Array.isArray(browserInfo)) {
                // 处理数组形式的兼容性信息
                const latestInfo = browserInfo[0];
                if (latestInfo.version_added === false) {
                    version = '不支持';
                } else if (latestInfo.version_added === true) {
                    version = '支持';
                } else {
                    version = latestInfo.version_added || '未知';
                }
                if (latestInfo.notes) {
                    if (Array.isArray(latestInfo.notes)) {
                        notes = latestInfo.notes.join('; ');
                    } else if (typeof latestInfo.notes === 'string') {
                        notes = latestInfo.notes;
                    }
                }
            } else {
                if (browserInfo.version_added === false) {
                    version = '不支持';
                } else if (browserInfo.version_added === true) {
                    version = '支持';
                } else {
                    version = browserInfo.version_added || '未知';
                }
                if (browserInfo.notes) {
                    if (Array.isArray(browserInfo.notes)) {
                        notes = browserInfo.notes.join('; ');
                    } else if (typeof browserInfo.notes === 'string') {
                        notes = browserInfo.notes;
                    }
                }
            }
        } else {
            version = browserInfo || '未知';
        }
        
        // 限制注释长度
        if (notes.length > 100) {
            notes = notes.substring(0, 100) + '...';
        }
        
        md += `| ${displayName} | ${version} | ${notes} |\n`;
    });
    
    md += `\n`;
    return md;
}

// 生成详细兼容性信息
function generateDetailedCompatibility(support) {
    let md = `## 详细兼容性信息\n\n`;
    
    Object.keys(support).forEach(browser => {
        const browserInfo = support[browser];
        const displayName = browserNames[browser] || browser;
        
        if (typeof browserInfo === 'object' && browserInfo !== null && browserInfo !== 'mirror') {
            md += `### ${displayName}\n\n`;
            
            if (Array.isArray(browserInfo)) {
                browserInfo.forEach((info, index) => {
                    md += generateSingleBrowserInfo(info, index);
                });
            } else {
                md += generateSingleBrowserInfo(browserInfo);
            }
            
            md += `\n`;
        }
    });
    
    return md;
}

// 生成单个浏览器的详细信息
function generateSingleBrowserInfo(info) {
    let md = '';
    
    if (info.version_added !== undefined) {
        if (info.version_added === false) {
            md += `- **支持版本**: 不支持\n`;
        } else if (info.version_added === true) {
            md += `- **支持版本**: 支持\n`;
        } else {
            md += `- **支持版本**: ${info.version_added}\n`;
        }
    }
    
    if (info.version_removed) {
        md += `- **移除版本**: ${info.version_removed}\n`;
    }
    
    if (info.prefix) {
        md += `- **前缀**: ${info.prefix}\n`;
    }
    
    if (info.flags && info.flags.length > 0) {
        md += `- **需要标志**: \n`;
        info.flags.forEach(flag => {
            md += `  - ${flag.name}: ${flag.value_to_set || 'true'}\n`;
        });
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
    
    return md;
}

// 特性检测函数已移除，保持代码简洁

// 主函数
function main() {
    const args = process.argv.slice(2);
    if (args.length < 2) {
        console.log('用法: node convert-to-markdown-improved.js <输入目录> <输出目录>');
        process.exit(1);
    }
    
    const inputDir = args[0];
    const outputDir = args[1];
    
    console.log(`🚀 开始转换JSON文件到Markdown...`);
    console.log(`📁 输入目录: ${inputDir}`);
    console.log(`📁 输出目录: ${outputDir}`);
    
    if (!fs.existsSync(inputDir)) {
        console.error(`❌ 输入路径不存在: ${inputDir}`);
        process.exit(1);
    }
    
    let jsonFiles = [];
    
    // 检查输入是文件还是目录
    const stat = fs.statSync(inputDir);
    if (stat.isFile() && inputDir.endsWith('.json')) {
        // 单个文件
        jsonFiles = [inputDir];
    } else if (stat.isDirectory()) {
        // 递归查找所有JSON文件
        function findJsonFiles(dir) {
            const files = [];
            const items = fs.readdirSync(dir);
            
            items.forEach(item => {
                const fullPath = path.join(dir, item);
                const stat = fs.statSync(fullPath);
                
                if (stat.isDirectory()) {
                    files.push(...findJsonFiles(fullPath));
                } else if (item.endsWith('.json')) {
                    files.push(fullPath);
                }
            });
            
            return files;
        }
        
        jsonFiles = findJsonFiles(inputDir);
    } else {
        console.error(`❌ 输入必须是JSON文件或包含JSON文件的目录`);
        process.exit(1);
    }
    console.log(`📊 找到 ${jsonFiles.length} 个JSON文件`);
    
    let successCount = 0;
    let failureCount = 0;
    
    jsonFiles.forEach(jsonFile => {
        try {
            convertJsonToMarkdown(jsonFile, outputDir);
            successCount++;
        } catch (error) {
            console.error(`❌ 处理失败: ${jsonFile}`, error.message);
            failureCount++;
        }
    });
    
    console.log(`\n🎉 转换完成！`);
    console.log(`✅ 成功: ${successCount} 个文件`);
    console.log(`❌ 失败: ${failureCount} 个文件`);
    console.log(`📖 Markdown文档已生成到: ${outputDir}`);
}

// 运行脚本
if (import.meta.url === `file://${process.argv[1]}`) {
    main();
}

export { convertJsonToMarkdown, generateApiMarkdown };
