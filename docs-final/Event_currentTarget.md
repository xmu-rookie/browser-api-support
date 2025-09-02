# Event.currentTarget API 兼容性数据

## 基本信息

- **API名称**: `Event.currentTarget`
- **MDN文档**: [Event.currentTarget](https://developer.mozilla.org/docs/Web/API/Event/currentTarget)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-event-currenttarget②)
- **标签**: `web-features:events`

## 使用示例

### 基本用法

```javascript
// Event.currentTarget 使用示例
// 请查阅MDN文档了解具体用法
console.log('Event.currentTarget API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Node.js | 14.5.0 |  |
| Oculus | 同主版本 |  |
| Opera | 7 |  |
| Opera Android | 10.1 |  |
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

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 9
- **支持版本**: 6
- **移除版本**: 9
- **部分实现**: 是
- **注意事项**:
  - On Internet Explorer 6 through 8, the event model is different. Event listeners are attached with the non-standard [`EventTarget.attachEvent`](https://developer.mozilla.org/docs/Web/API/EventTarget/attachEvent) method. In this model, there is no equivalent to `event.currentTarget` and `this` is the global object. One solution to emulate the `event.currentTarget` feature is to wrap your handler in a function calling the handler using `Function.prototype.call` with the element as a first argument. This way, `this` will be the expected value.

### Node.js

- **支持版本**: 14.5.0

### Opera

- **支持版本**: 7

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

