# RTCPeerConnection.sctp API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.sctp`
- **MDN文档**: [RTCPeerConnection.sctp](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/sctp)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcpeerconnection-sctp)
- **标签**: `web-features:webrtc-sctp`

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.sctp 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.sctp API');
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
// 检查RTCPeerConnection.sctp是否支持
function isRTCPeerConnectionSctpSupported() {
    return 'sctp' in rtcpeerconnection && typeof rtcpeerconnection.sctp === 'function';
}

if (isRTCPeerConnectionSctpSupported()) {
    console.log('RTCPeerConnection.sctp 支持');
    // 使用RTCPeerConnection.sctp
} else {
    console.log('RTCPeerConnection.sctp 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.sctp polyfill
if (!rtcpeerconnection.sctp) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.sctp polyfill');
}
```

