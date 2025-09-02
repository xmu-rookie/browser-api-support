# WebSocketError.reason API 兼容性数据

## 基本信息

- **API名称**: `WebSocketError.reason`
- **标签**: `web-features:websockets`

## 使用示例

### 基本用法

```javascript
// WebSocketError.reason 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebSocketError.reason API');
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
// 检查WebSocketError.reason是否支持
function isWebSocketErrorReasonSupported() {
    return 'reason' in websocketerror && typeof websocketerror.reason === 'function';
}

if (isWebSocketErrorReasonSupported()) {
    console.log('WebSocketError.reason 支持');
    // 使用WebSocketError.reason
} else {
    console.log('WebSocketError.reason 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WebSocketError.reason polyfill
if (!websocketerror.reason) {
    // 在这里添加polyfill实现
    console.log('加载WebSocketError.reason polyfill');
}
```

