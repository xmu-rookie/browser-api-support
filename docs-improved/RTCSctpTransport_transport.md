# RTCSctpTransport.transport API 兼容性数据

## 基本信息

- **API名称**: `RTCSctpTransport.transport`
- **MDN文档**: [RTCSctpTransport.transport](https://developer.mozilla.org/docs/Web/API/RTCSctpTransport/transport)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcsctptransport-transport)
- **标签**: `web-features:webrtc-sctp`

## 使用示例

### 基本用法

```javascript
// RTCSctpTransport.transport 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCSctpTransport.transport API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 76 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 113 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 76

### Firefox

- **支持版本**: 113

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCSctpTransport.transport是否支持
function isRTCSctpTransportTransportSupported() {
    return 'transport' in rtcsctptransport && typeof rtcsctptransport.transport === 'function';
}

if (isRTCSctpTransportTransportSupported()) {
    console.log('RTCSctpTransport.transport 支持');
    // 使用RTCSctpTransport.transport
} else {
    console.log('RTCSctpTransport.transport 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCSctpTransport.transport polyfill
if (!rtcsctptransport.transport) {
    // 在这里添加polyfill实现
    console.log('加载RTCSctpTransport.transport polyfill');
}
```

