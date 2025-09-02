# Summarizer.expectedContextLanguages API 兼容性数据

## 基本信息

- **API名称**: `Summarizer.expectedContextLanguages`
- **MDN文档**: [Summarizer.expectedContextLanguages](https://developer.mozilla.org/docs/Web/API/Summarizer/expectedContextLanguages)
- **规范文档**: [查看规范](https://webmachinelearning.github.io/writing-assistance-apis/#dom-summarizer-expectedcontextlanguages)
- **标签**: `web-features:summarizer`
- **描述**: `expectedContextLanguages` property

## 使用示例

### 基本用法

```javascript
// Summarizer.expectedContextLanguages 使用示例
// 请查阅MDN文档了解具体用法
console.log('Summarizer.expectedContextLanguages API');
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
// 检查Summarizer.expectedContextLanguages是否支持
function isSummarizerExpectedContextLanguagesSupported() {
    return 'expectedContextLanguages' in summarizer && typeof summarizer.expectedContextLanguages === 'function';
}

if (isSummarizerExpectedContextLanguagesSupported()) {
    console.log('Summarizer.expectedContextLanguages 支持');
    // 使用Summarizer.expectedContextLanguages
} else {
    console.log('Summarizer.expectedContextLanguages 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Summarizer.expectedContextLanguages polyfill
if (!summarizer.expectedContextLanguages) {
    // 在这里添加polyfill实现
    console.log('加载Summarizer.expectedContextLanguages polyfill');
}
```

