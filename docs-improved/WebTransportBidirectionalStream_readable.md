# WebTransportBidirectionalStream.readable API 兼容性数据

## 基本信息

- **API名称**: `WebTransportBidirectionalStream.readable`
- **MDN文档**: [WebTransportBidirectionalStream.readable](https://developer.mozilla.org/docs/Web/API/WebTransportBidirectionalStream/readable)
- **规范文档**: [查看规范](https://w3c.github.io/webtransport/#dom-webtransportbidirectionalstream-readable)
- **标签**: `web-features:webtransport`

## 使用示例

### 基本用法

```javascript
// WebTransportBidirectionalStream.readable 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebTransportBidirectionalStream.readable API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 97 |  |
| Chrome Android | 同主版本 |  |
| Deno | 2.2 |  |
| Edge | 同主版本 |  |
| Firefox | 114 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 97

### Deno

- **支持版本**: 2.2
- **需要标志**: 
  - --unstable-net: true

### Firefox

- **支持版本**: 114

### Safari

- **支持版本**: 18.4
- **需要标志**: 
  - WebTransport: true

## 兼容性检查代码

### 特性检测

```javascript
// 检查WebTransportBidirectionalStream.readable是否支持
function isWebTransportBidirectionalStreamReadableSupported() {
    return 'readable' in webtransportbidirectionalstream && typeof webtransportbidirectionalstream.readable === 'function';
}

if (isWebTransportBidirectionalStreamReadableSupported()) {
    console.log('WebTransportBidirectionalStream.readable 支持');
    // 使用WebTransportBidirectionalStream.readable
} else {
    console.log('WebTransportBidirectionalStream.readable 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WebTransportBidirectionalStream.readable polyfill
if (!webtransportbidirectionalstream.readable) {
    // 在这里添加polyfill实现
    console.log('加载WebTransportBidirectionalStream.readable polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **returns_WebTransportReceiveStream**: Returns `WebTransportReceiveStream` (earlier spec returned `WritableStream`)

