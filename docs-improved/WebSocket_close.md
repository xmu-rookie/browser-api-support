# WebSocket.close API 兼容性数据

## 基本信息

- **API名称**: `WebSocket.close`
- **MDN文档**: [WebSocket.close](https://developer.mozilla.org/docs/Web/API/WebSocket/close)
- **规范文档**: [查看规范](https://websockets.spec.whatwg.org/#dom-websocket-close)
- **标签**: `web-features:websockets`

## 使用示例

### 基本用法

```javascript
// WebSocket.close 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebSocket.close API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 5 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.4 |  |
| Edge | 12 |  |
| Firefox | 7 |  |
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

- **支持版本**: 7

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

## 兼容性检查代码

### 特性检测

```javascript
// 检查WebSocket.close是否支持
function isWebSocketCloseSupported() {
    return 'close' in websocket && typeof websocket.close === 'function';
}

if (isWebSocketCloseSupported()) {
    console.log('WebSocket.close 支持');
    // 使用WebSocket.close
} else {
    console.log('WebSocket.close 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WebSocket.close polyfill
if (!websocket.close) {
    // 在这里添加polyfill实现
    console.log('加载WebSocket.close polyfill');
}
```

