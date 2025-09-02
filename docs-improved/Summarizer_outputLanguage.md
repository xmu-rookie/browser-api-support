# Summarizer.outputLanguage API 兼容性数据

## 基本信息

- **API名称**: `Summarizer.outputLanguage`
- **MDN文档**: [Summarizer.outputLanguage](https://developer.mozilla.org/docs/Web/API/Summarizer/outputLanguage)
- **规范文档**: [查看规范](https://webmachinelearning.github.io/writing-assistance-apis/#dom-summarizer-outputlanguage)
- **标签**: `web-features:summarizer`
- **描述**: `outputLanguage` property

## 使用示例

### 基本用法

```javascript
// Summarizer.outputLanguage 使用示例
// 请查阅MDN文档了解具体用法
console.log('Summarizer.outputLanguage API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 138 | Availability may be subject to geographical restrictions. |
| Chrome Android | 不支持 |  |
| Deno | 不支持 |  |
| Edge | 138 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 138
- **注意事项**:
  - Availability may be subject to geographical restrictions.

### Chrome Android

- **支持版本**: 不支持

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 138
- **需要标志**: 
  - #edge-llm-summarization-api-for-phi-mini: Enabled

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Summarizer.outputLanguage是否支持
function isSummarizerOutputLanguageSupported() {
    return 'outputLanguage' in summarizer && typeof summarizer.outputLanguage === 'function';
}

if (isSummarizerOutputLanguageSupported()) {
    console.log('Summarizer.outputLanguage 支持');
    // 使用Summarizer.outputLanguage
} else {
    console.log('Summarizer.outputLanguage 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Summarizer.outputLanguage polyfill
if (!summarizer.outputLanguage) {
    // 在这里添加polyfill实现
    console.log('加载Summarizer.outputLanguage polyfill');
}
```

