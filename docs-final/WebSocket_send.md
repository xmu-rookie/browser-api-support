# WebSocket.send API 兼容性数据

## 基本信息

- **API名称**: `WebSocket.send`
- **MDN文档**: [WebSocket.send](https://developer.mozilla.org/docs/Web/API/WebSocket/send)
- **规范文档**: [查看规范](https://websockets.spec.whatwg.org/#ref-for-dom-websocket-send①)
- **标签**: `web-features:websockets`

## 使用示例

### 基本用法

```javascript
// WebSocket.send 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebSocket.send API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 5 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.4 |  |
| Edge | 12 |  |
| Firefox | 18 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 22.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 12.1 |  |
| Opera Android | 12.1 |  |
| Safari | 5 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 5

### Deno

- **支持版本**: 1.4

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 18
- **支持版本**: 11
- **移除版本**: 18
- **注意事项**:
  - Only parameter of type `ArrayBuffer` and `String` supported.
- **支持版本**: 8
- **移除版本**: 11
- **注意事项**:
  - Only parameter of type `String` supported.
- **支持版本**: 7
- **移除版本**: 8
- **注意事项**:
  - Only parameter of type `String` supported. Returns `boolean`.

### Internet Explorer

- **支持版本**: 10

### Node.js

- **支持版本**: 22.0.0

### Opera

- **支持版本**: 12.1

### Opera Android

- **支持版本**: 12.1

### Safari

- **支持版本**: 5

