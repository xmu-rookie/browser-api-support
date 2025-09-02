# WebSocketError.closeCode API 兼容性数据

## 基本信息

- **API名称**: `WebSocketError.closeCode`
- **标签**: `web-features:websockets`

## 使用示例

### 基本用法

```javascript
// WebSocketError.closeCode 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebSocketError.closeCode API');
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
// 检查WebSocketError.closeCode是否支持
function isWebSocketErrorCloseCodeSupported() {
    return 'closeCode' in websocketerror && typeof websocketerror.closeCode === 'function';
}

if (isWebSocketErrorCloseCodeSupported()) {
    console.log('WebSocketError.closeCode 支持');
    // 使用WebSocketError.closeCode
} else {
    console.log('WebSocketError.closeCode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WebSocketError.closeCode polyfill
if (!websocketerror.closeCode) {
    // 在这里添加polyfill实现
    console.log('加载WebSocketError.closeCode polyfill');
}
```

