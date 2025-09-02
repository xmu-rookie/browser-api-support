# RTCPeerConnection.getTransceivers API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.getTransceivers`
- **MDN文档**: [RTCPeerConnection.getTransceivers](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/getTransceivers)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-peerconnection-gettranseceivers)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.getTransceivers 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.getTransceivers API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 59 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 79 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 69

### Firefox

- **支持版本**: 59

### Safari

- **支持版本**: 11

### WebView Android

- **支持版本**: 79

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection.getTransceivers是否支持
function isRTCPeerConnectionGetTransceiversSupported() {
    return 'getTransceivers' in rtcpeerconnection && typeof rtcpeerconnection.getTransceivers === 'function';
}

if (isRTCPeerConnectionGetTransceiversSupported()) {
    console.log('RTCPeerConnection.getTransceivers 支持');
    // 使用RTCPeerConnection.getTransceivers
} else {
    console.log('RTCPeerConnection.getTransceivers 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.getTransceivers polyfill
if (!rtcpeerconnection.getTransceivers) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.getTransceivers polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **stopped_transceivers_removed**: Stopped transcievers not returned

