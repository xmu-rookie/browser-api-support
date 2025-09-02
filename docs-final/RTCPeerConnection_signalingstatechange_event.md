# RTCPeerConnection.signalingstatechange_event API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.signalingstatechange_event`
- **MDN文档**: [RTCPeerConnection.signalingstatechange_event](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#event-signalingstatechange)
- **标签**: `web-features:webrtc`
- **描述**: `signalingstatechange` event

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.signalingstatechange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.signalingstatechange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 28 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
| Firefox | 36 |  |
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

- **支持版本**: 28

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 36
- **支持版本**: 24
- **移除版本**: 36
- **部分实现**: 是
- **注意事项**:
  - Although the `onsignalingstatechange` property is supported, the `signalingstatechange` event is not fired as an `Event` object. See [bug 1075133](https://bugzil.la/1075133).

### Safari

- **支持版本**: 11

