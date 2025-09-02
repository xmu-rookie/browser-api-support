# PerformanceServerTiming.duration API 兼容性数据

## 基本信息

- **API名称**: `PerformanceServerTiming.duration`
- **MDN文档**: [PerformanceServerTiming.duration](https://developer.mozilla.org/docs/Web/API/PerformanceServerTiming/duration)
- **规范文档**: [查看规范](https://w3c.github.io/server-timing/#dom-performanceservertiming-duration)
- **标签**: `web-features:server-timing`

## 使用示例

### 基本用法

```javascript
// PerformanceServerTiming.duration 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceServerTiming.duration API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.1.37 |  |
| Chrome | 65 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 61 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.1.37

### Chrome

- **支持版本**: 65

### Firefox

- **支持版本**: 61

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceServerTiming.duration是否支持
function isPerformanceServerTimingDurationSupported() {
    return 'duration' in performanceservertiming && typeof performanceservertiming.duration === 'function';
}

if (isPerformanceServerTimingDurationSupported()) {
    console.log('PerformanceServerTiming.duration 支持');
    // 使用PerformanceServerTiming.duration
} else {
    console.log('PerformanceServerTiming.duration 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceServerTiming.duration polyfill
if (!performanceservertiming.duration) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceServerTiming.duration polyfill');
}
```

