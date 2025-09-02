# WebSocket.worker_support API 兼容性数据

## 基本信息

- **API名称**: `WebSocket.worker_support`
- **标签**: `web-features:websockets`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// WebSocket.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebSocket.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 5 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.4 |  |
| Edge | 12 |  |
| Firefox | 37 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 22.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 12.1 |  |
| Opera Android | 12.1 |  |
| Safari | 5 |  |
| Safari iOS | 5 |  |
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

- **支持版本**: 37

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

### Safari iOS

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查WebSocket.worker_support是否支持
function isWebSocketWorker_supportSupported() {
    return 'worker_support' in websocket && typeof websocket.worker_support === 'function';
}

if (isWebSocketWorker_supportSupported()) {
    console.log('WebSocket.worker_support 支持');
    // 使用WebSocket.worker_support
} else {
    console.log('WebSocket.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WebSocket.worker_support polyfill
if (!websocket.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载WebSocket.worker_support polyfill');
}
```

