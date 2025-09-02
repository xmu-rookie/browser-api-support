# Event.timeStamp API 兼容性数据

## 基本信息

- **API名称**: `Event.timeStamp`
- **MDN文档**: [Event.timeStamp](https://developer.mozilla.org/docs/Web/API/Event/timeStamp)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-event-timestamp①)
- **标签**: `web-features:events`

## 使用示例

### 基本用法

```javascript
// Event.timeStamp 使用示例
// 请查阅MDN文档了解具体用法
console.log('Event.timeStamp API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 1 | Starting with Chrome 49, Firefox 54 and Opera 36, this property returns [`DOMHighResTimeStamp`](http... |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 | In Deno this represents the time since UNIX epoch, not since startup. This is considered a bug, see ... |
| Edge | 12 |  |
| Firefox | 1.5 | Starting with Chrome 49, Firefox 54 and Opera 36, this property returns [`DOMHighResTimeStamp`](http... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 | Starting with Chrome 49, Firefox 54 and Opera 36, this property returns [`DOMHighResTimeStamp`](http... |
| Node.js | 14.5.0 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 | Starting with Chrome 49, Firefox 54 and Opera 36, this property returns [`DOMHighResTimeStamp`](http... |
| Opera Android | ≤12.1 | Starting with Chrome 49, Firefox 54 and Opera 36, this property returns [`DOMHighResTimeStamp`](http... |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 1 | Starting with version 49, this property returns [`DOMHighResTimeStamp`](https://developer.mozilla.or... |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 1
- **注意事项**:
  - Starting with Chrome 49, Firefox 54 and Opera 36, this property returns [`DOMHighResTimeStamp`](https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp) instead of [`DOMTimeStamp`](https://developer.mozilla.org/docs/Web/API/DOMTimeStamp).

### Deno

- **支持版本**: 1.0
- **注意事项**:
  - In Deno this represents the time since UNIX epoch, not since startup. This is considered a bug, see [#10835](https://github.com/denoland/deno/issues/10835).

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1.5
- **注意事项**:
  - Starting with Chrome 49, Firefox 54 and Opera 36, this property returns [`DOMHighResTimeStamp`](https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp) instead of [`DOMTimeStamp`](https://developer.mozilla.org/docs/Web/API/DOMTimeStamp).

### Internet Explorer

- **支持版本**: 9
- **注意事项**:
  - Starting with Chrome 49, Firefox 54 and Opera 36, this property returns [`DOMHighResTimeStamp`](https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp) instead of [`DOMTimeStamp`](https://developer.mozilla.org/docs/Web/API/DOMTimeStamp).

### Node.js

- **支持版本**: 14.5.0

### Opera

- **支持版本**: ≤12.1
- **注意事项**:
  - Starting with Chrome 49, Firefox 54 and Opera 36, this property returns [`DOMHighResTimeStamp`](https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp) instead of [`DOMTimeStamp`](https://developer.mozilla.org/docs/Web/API/DOMTimeStamp).

### Opera Android

- **支持版本**: ≤12.1
- **注意事项**:
  - Starting with Chrome 49, Firefox 54 and Opera 36, this property returns [`DOMHighResTimeStamp`](https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp) instead of [`DOMTimeStamp`](https://developer.mozilla.org/docs/Web/API/DOMTimeStamp).

### Safari

- **支持版本**: 1

### WebView Android

- **支持版本**: 1
- **注意事项**:
  - Starting with version 49, this property returns [`DOMHighResTimeStamp`](https://developer.mozilla.org/docs/Web/API/DOMHighResTimeStamp) instead of [`DOMTimeStamp`](https://developer.mozilla.org/docs/Web/API/DOMTimeStamp).

## 兼容性检查代码

### 特性检测

```javascript
// 检查Event.timeStamp是否支持
function isEventTimeStampSupported() {
    return 'timeStamp' in event && typeof event.timeStamp === 'function';
}

if (isEventTimeStampSupported()) {
    console.log('Event.timeStamp 支持');
    // 使用Event.timeStamp
} else {
    console.log('Event.timeStamp 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Event.timeStamp polyfill
if (!event.timeStamp) {
    // 在这里添加polyfill实现
    console.log('加载Event.timeStamp polyfill');
}
```

