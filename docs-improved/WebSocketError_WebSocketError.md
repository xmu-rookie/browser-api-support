# WebSocketError.WebSocketError API 兼容性数据

## 基本信息

- **API名称**: `WebSocketError.WebSocketError`
- **标签**: `web-features:websockets`
- **描述**: `WebSocketError()` constructor

## 使用示例

### 基本用法

```javascript
// WebSocketError.WebSocketError 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebSocketError.WebSocketError API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 124 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 124

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查WebSocketError.WebSocketError是否支持
function isWebSocketErrorWebSocketErrorSupported() {
    return 'WebSocketError' in websocketerror && typeof websocketerror.WebSocketError === 'function';
}

if (isWebSocketErrorWebSocketErrorSupported()) {
    console.log('WebSocketError.WebSocketError 支持');
    // 使用WebSocketError.WebSocketError
} else {
    console.log('WebSocketError.WebSocketError 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WebSocketError.WebSocketError polyfill
if (!websocketerror.WebSocketError) {
    // 在这里添加polyfill实现
    console.log('加载WebSocketError.WebSocketError polyfill');
}
```

