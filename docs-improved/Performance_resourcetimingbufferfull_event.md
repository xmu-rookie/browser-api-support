# Performance.resourcetimingbufferfull_event API 兼容性数据

## 基本信息

- **API名称**: `Performance.resourcetimingbufferfull_event`
- **MDN文档**: [Performance.resourcetimingbufferfull_event](https://developer.mozilla.org/docs/Web/API/Performance/resourcetimingbufferfull_event)
- **规范文档**: [查看规范](https://w3c.github.io/resource-timing/#dom-performance-onresourcetimingbufferfull)
- **标签**: `web-features:resource-timing`
- **描述**: `resourcetimingbufferfull` event

## 使用示例

### 基本用法

```javascript
// Performance.resourcetimingbufferfull_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Performance.resourcetimingbufferfull_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.1.37 |  |
| Chrome | 46 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 35 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.8.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.1.37

### Chrome

- **支持版本**: 46
- **支持版本**: 22
- **移除版本**: 57
- **前缀**: webkit

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 35

### Node.js

- **支持版本**: 18.8.0

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查Performance.resourcetimingbufferfull_event是否支持
function isPerformanceResourcetimingbufferfull_eventSupported() {
    return 'resourcetimingbufferfull_event' in performance && typeof performance.resourcetimingbufferfull_event === 'function';
}

if (isPerformanceResourcetimingbufferfull_eventSupported()) {
    console.log('Performance.resourcetimingbufferfull_event 支持');
    // 使用Performance.resourcetimingbufferfull_event
} else {
    console.log('Performance.resourcetimingbufferfull_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Performance.resourcetimingbufferfull_event polyfill
if (!performance.resourcetimingbufferfull_event) {
    // 在这里添加polyfill实现
    console.log('加载Performance.resourcetimingbufferfull_event polyfill');
}
```

