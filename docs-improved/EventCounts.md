# EventCounts API 兼容性数据

## 基本信息

- **API名称**: `EventCounts`
- **MDN文档**: [EventCounts](https://developer.mozilla.org/docs/Web/API/EventCounts)
- **规范文档**: [查看规范](https://w3c.github.io/event-timing/#sec-event-counts)
- **标签**: `web-features:event-timing`

## 使用示例

### 基本用法

```javascript
// EventCounts 使用示例
// 请查阅MDN文档了解具体用法
console.log('EventCounts API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 85 |  |
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

- **支持版本**: 85

### Firefox

- **支持版本**: 89

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查EventCounts是否支持
function isEventCountsSupported() {
    return 'EventCounts' in window || typeof EventCounts !== 'undefined';
}

if (isEventCountsSupported()) {
    console.log('EventCounts 支持');
    // 使用EventCounts
} else {
    console.log('EventCounts 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EventCounts polyfill
if (!window.EventCounts) {
    // 在这里添加polyfill实现
    console.log('加载EventCounts polyfill');
}
```

