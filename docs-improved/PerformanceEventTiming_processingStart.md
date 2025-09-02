# PerformanceEventTiming.processingStart API 兼容性数据

## 基本信息

- **API名称**: `PerformanceEventTiming.processingStart`
- **MDN文档**: [PerformanceEventTiming.processingStart](https://developer.mozilla.org/docs/Web/API/PerformanceEventTiming/processingStart)
- **规范文档**: [查看规范](https://w3c.github.io/event-timing/#dom-performanceeventtiming-processingstart)
- **标签**: `web-features:event-timing`

## 使用示例

### 基本用法

```javascript
// PerformanceEventTiming.processingStart 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceEventTiming.processingStart API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 76 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 89 |  |
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

- **支持版本**: 76

### Firefox

- **支持版本**: 89

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceEventTiming.processingStart是否支持
function isPerformanceEventTimingProcessingStartSupported() {
    return 'processingStart' in performanceeventtiming && typeof performanceeventtiming.processingStart === 'function';
}

if (isPerformanceEventTimingProcessingStartSupported()) {
    console.log('PerformanceEventTiming.processingStart 支持');
    // 使用PerformanceEventTiming.processingStart
} else {
    console.log('PerformanceEventTiming.processingStart 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceEventTiming.processingStart polyfill
if (!performanceeventtiming.processingStart) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceEventTiming.processingStart polyfill');
}
```

