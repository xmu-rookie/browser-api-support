# Event.cancelable API 兼容性数据

## 基本信息

- **API名称**: `Event.cancelable`
- **MDN文档**: [Event.cancelable](https://developer.mozilla.org/docs/Web/API/Event/cancelable)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-event-cancelable②)
- **标签**: `web-features:events`

## 使用示例

### 基本用法

```javascript
// Event.cancelable 使用示例
// 请查阅MDN文档了解具体用法
console.log('Event.cancelable API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 1.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Node.js | 14.5.0 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 1

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1.5

### Internet Explorer

- **支持版本**: 9

### Node.js

- **支持版本**: 14.5.0

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Event.cancelable是否支持
function isEventCancelableSupported() {
    return 'cancelable' in event && typeof event.cancelable === 'function';
}

if (isEventCancelableSupported()) {
    console.log('Event.cancelable 支持');
    // 使用Event.cancelable
} else {
    console.log('Event.cancelable 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Event.cancelable polyfill
if (!event.cancelable) {
    // 在这里添加polyfill实现
    console.log('加载Event.cancelable polyfill');
}
```

