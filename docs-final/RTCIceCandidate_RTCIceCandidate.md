# RTCIceCandidate.RTCIceCandidate API 兼容性数据

## 基本信息

- **API名称**: `RTCIceCandidate.RTCIceCandidate`
- **MDN文档**: [RTCIceCandidate.RTCIceCandidate](https://developer.mozilla.org/docs/Web/API/RTCIceCandidate/RTCIceCandidate)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcicecandidate-constructor)
- **标签**: `web-features:webrtc`
- **描述**: `RTCIceCandidate()` constructor

## 使用示例

### 基本用法

```javascript
// RTCIceCandidate.RTCIceCandidate 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCIceCandidate.RTCIceCandidate API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 23 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
| Firefox | 44 | Before Firefox 68, the constructor's `candidateInfo` parameter is required and the `candidateInfo` o... |
| Firefox Android | 44 | Before Firefox 68, the constructor's `candidateInfo` parameter is required and the `candidateInfo` o... |
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

- **支持版本**: 23

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 44
- **注意事项**:
  - Before Firefox 68, the constructor's `candidateInfo` parameter is required and the `candidateInfo` object must have a `candidate` property.
- **支持版本**: 22
- **前缀**: moz
- **注意事项**:
  - Before Firefox 68, the constructor's `candidateInfo` parameter is required and the `candidateInfo` object must have a `candidate` property.

### Firefox Android

- **支持版本**: 44
- **注意事项**:
  - Before Firefox 68, the constructor's `candidateInfo` parameter is required and the `candidateInfo` object must have a `candidate` property.
- **支持版本**: 24
- **前缀**: moz
- **注意事项**:
  - Before Firefox 68, the constructor's `candidateInfo` parameter is required and the `candidateInfo` object must have a `candidate` property.

### Safari

- **支持版本**: 11

