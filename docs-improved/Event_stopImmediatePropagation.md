# Event.stopImmediatePropagation API 兼容性数据

## 基本信息

- **API名称**: `Event.stopImmediatePropagation`
- **MDN文档**: [Event.stopImmediatePropagation](https://developer.mozilla.org/docs/Web/API/Event/stopImmediatePropagation)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-event-stopimmediatepropagation①)
- **标签**: `web-features:events`

## 使用示例

### 基本用法

```javascript
// Event.stopImmediatePropagation 使用示例
// 请查阅MDN文档了解具体用法
console.log('Event.stopImmediatePropagation API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 5 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 10 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Node.js | 14.5.0 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 5 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 5

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 10

### Internet Explorer

- **支持版本**: 9

### Node.js

- **支持版本**: 14.5.0

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查Event.stopImmediatePropagation是否支持
function isEventStopImmediatePropagationSupported() {
    return 'stopImmediatePropagation' in event && typeof event.stopImmediatePropagation === 'function';
}

if (isEventStopImmediatePropagationSupported()) {
    console.log('Event.stopImmediatePropagation 支持');
    // 使用Event.stopImmediatePropagation
} else {
    console.log('Event.stopImmediatePropagation 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Event.stopImmediatePropagation polyfill
if (!event.stopImmediatePropagation) {
    // 在这里添加polyfill实现
    console.log('加载Event.stopImmediatePropagation polyfill');
}
```

