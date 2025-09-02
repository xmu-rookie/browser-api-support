# PerformanceScriptTiming.sourceFunctionName API 兼容性数据

## 基本信息

- **API名称**: `PerformanceScriptTiming.sourceFunctionName`
- **MDN文档**: [PerformanceScriptTiming.sourceFunctionName](https://developer.mozilla.org/docs/Web/API/PerformanceScriptTiming/sourceFunctionName)
- **规范文档**: [查看规范](https://w3c.github.io/long-animation-frames/#dom-performancescripttiming-sourcefunctionname)
- **标签**: `web-features:long-animation-frames`

## 使用示例

### 基本用法

```javascript
// PerformanceScriptTiming.sourceFunctionName 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceScriptTiming.sourceFunctionName API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 123 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 123

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceScriptTiming.sourceFunctionName是否支持
function isPerformanceScriptTimingSourceFunctionNameSupported() {
    return 'sourceFunctionName' in performancescripttiming && typeof performancescripttiming.sourceFunctionName === 'function';
}

if (isPerformanceScriptTimingSourceFunctionNameSupported()) {
    console.log('PerformanceScriptTiming.sourceFunctionName 支持');
    // 使用PerformanceScriptTiming.sourceFunctionName
} else {
    console.log('PerformanceScriptTiming.sourceFunctionName 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceScriptTiming.sourceFunctionName polyfill
if (!performancescripttiming.sourceFunctionName) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceScriptTiming.sourceFunctionName polyfill');
}
```

