# RTCPeerConnection.RTCPeerConnection API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.RTCPeerConnection`
- **MDN文档**: [RTCPeerConnection.RTCPeerConnection](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/RTCPeerConnection)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-peerconnection)
- **标签**: `web-features:webrtc`
- **描述**: `RTCPeerConnection()` constructor

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "56", // Before Chrome 63, the default value for the `configuration.rtcpMuxPolicy` parameter is `&quot;negoti...,
    chrome_android: "同主版本",
    edge: "15",
    firefox: "44",
    firefox_android: "44",
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "11",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **configuration_bundlePolicy_parameter**: `configuration.bundlePolicy` parameter
- **configuration_certificates_parameter**: `configuration.certificates` parameter
- **configuration_iceCandidatePoolSize_parameter**: `configuration.iceCandidatePoolSize` parameter
- **configuration_iceServers_parameter**: `configuration.iceServers` parameter
- **configuration_iceTransportPolicy_parameter**: `configuration.iceTransportPolicy` parameter
- **configuration_peerIdentity_parameter**: `configuration.peerIdentity` parameter
- **configuration_rtcpMuxPolicy_parameter**: `configuration.rtcpMuxPolicy` parameter

