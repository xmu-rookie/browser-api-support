# RTCPeerConnection.negotiationneeded_event API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.negotiationneeded_event`
- **MDN文档**: [RTCPeerConnection.negotiationneeded_event](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcpeerconnection-onnegotiationneeded)
- **标签**: `web-features:webrtc`
- **描述**: `negotiationneeded` event

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.negotiationneeded_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.negotiationneeded_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 24 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
| Firefox | 38 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 24

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 38
- **支持版本**: 24
- **移除版本**: 38
- **部分实现**: 是
- **注意事项**:
  - Although the `onnegotiationneeded` property is supported, the `negotiationneeded` event is never fired.

### Safari

- **支持版本**: 11

