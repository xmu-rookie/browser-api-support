# PerformanceElementTiming.loadTime API 兼容性数据

## 基本信息

- **API名称**: `PerformanceElementTiming.loadTime`
- **MDN文档**: [PerformanceElementTiming.loadTime](https://developer.mozilla.org/docs/Web/API/PerformanceElementTiming/loadTime)
- **规范文档**: [查看规范](https://w3c.github.io/element-timing/#dom-performanceelementtiming-loadtime)
- **标签**: `web-features:element-timing`

## 使用示例

### 基本用法

```javascript
// PerformanceElementTiming.loadTime 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceElementTiming.loadTime API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 77 |  |
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

- **支持版本**: 77

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceElementTiming.loadTime是否支持
function isPerformanceElementTimingLoadTimeSupported() {
    return 'loadTime' in performanceelementtiming && typeof performanceelementtiming.loadTime === 'function';
}

if (isPerformanceElementTimingLoadTimeSupported()) {
    console.log('PerformanceElementTiming.loadTime 支持');
    // 使用PerformanceElementTiming.loadTime
} else {
    console.log('PerformanceElementTiming.loadTime 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceElementTiming.loadTime polyfill
if (!performanceelementtiming.loadTime) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceElementTiming.loadTime polyfill');
}
```

