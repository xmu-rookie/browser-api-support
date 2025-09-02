# WebSocketStream.url API 兼容性数据

## 基本信息

- **API名称**: `WebSocketStream.url`
- **MDN文档**: [WebSocketStream.url](https://developer.mozilla.org/docs/Web/API/WebSocketStream/url)

## 使用示例

### 基本用法

```javascript
// WebSocketStream.url 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebSocketStream.url API');
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
// 检查WebSocketStream.url是否支持
function isWebSocketStreamUrlSupported() {
    return 'url' in websocketstream && typeof websocketstream.url === 'function';
}

if (isWebSocketStreamUrlSupported()) {
    console.log('WebSocketStream.url 支持');
    // 使用WebSocketStream.url
} else {
    console.log('WebSocketStream.url 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WebSocketStream.url polyfill
if (!websocketstream.url) {
    // 在这里添加polyfill实现
    console.log('加载WebSocketStream.url polyfill');
}
```

