# PerformanceScriptTiming.pauseDuration API 兼容性数据

## 基本信息

- **API名称**: `PerformanceScriptTiming.pauseDuration`
- **MDN文档**: [PerformanceScriptTiming.pauseDuration](https://developer.mozilla.org/docs/Web/API/PerformanceScriptTiming/pauseDuration)
- **规范文档**: [查看规范](https://w3c.github.io/long-animation-frames/#dom-performancescripttiming-pauseduration)
- **标签**: `web-features:long-animation-frames`

## 使用示例

### 基本用法

```javascript
// PerformanceScriptTiming.pauseDuration 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceScriptTiming.pauseDuration API');
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
// 检查PerformanceScriptTiming.pauseDuration是否支持
function isPerformanceScriptTimingPauseDurationSupported() {
    return 'pauseDuration' in performancescripttiming && typeof performancescripttiming.pauseDuration === 'function';
}

if (isPerformanceScriptTimingPauseDurationSupported()) {
    console.log('PerformanceScriptTiming.pauseDuration 支持');
    // 使用PerformanceScriptTiming.pauseDuration
} else {
    console.log('PerformanceScriptTiming.pauseDuration 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceScriptTiming.pauseDuration polyfill
if (!performancescripttiming.pauseDuration) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceScriptTiming.pauseDuration polyfill');
}
```

