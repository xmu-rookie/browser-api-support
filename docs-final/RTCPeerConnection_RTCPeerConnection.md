# RTCPeerConnection.RTCPeerConnection API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.RTCPeerConnection`
- **MDN文档**: [RTCPeerConnection.RTCPeerConnection](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/RTCPeerConnection)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-peerconnection)
- **标签**: `web-features:webrtc`
- **描述**: `RTCPeerConnection()` constructor

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.RTCPeerConnection 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.RTCPeerConnection API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 56 | Before Chrome 63, the default value for the `configuration.rtcpMuxPolicy` parameter is `&quot;negoti... |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
| Firefox | 44 |  |
| Firefox Android | 44 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 56
- **注意事项**:
  - Before Chrome 63, the default value for the `configuration.rtcpMuxPolicy` parameter is `&quot;negotiate&quot;` instead of `&quot;required&quot;`.
- **支持版本**: 23
- **前缀**: webkit

### Edge

- **支持版本**: 15
- **支持版本**: 15
- **前缀**: webkit

### Firefox

- **支持版本**: 44
- **支持版本**: 22
- **前缀**: moz

### Firefox Android

- **支持版本**: 44
- **支持版本**: 24
- **前缀**: moz

### Safari

- **支持版本**: 11

## 相关子API

该API包含以下子功能：

- **configuration_bundlePolicy_parameter**: `configuration.bundlePolicy` parameter
- **configuration_certificates_parameter**: `configuration.certificates` parameter
- **configuration_iceCandidatePoolSize_parameter**: `configuration.iceCandidatePoolSize` parameter
- **configuration_iceServers_parameter**: `configuration.iceServers` parameter
- **configuration_iceTransportPolicy_parameter**: `configuration.iceTransportPolicy` parameter
- **configuration_peerIdentity_parameter**: `configuration.peerIdentity` parameter
- **configuration_rtcpMuxPolicy_parameter**: `configuration.rtcpMuxPolicy` parameter

