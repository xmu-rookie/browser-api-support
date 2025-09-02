# RTCPeerConnection.getTransceivers.stopped_transceivers_removed API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.getTransceivers.stopped_transceivers_removed`
- **标签**: `web-features:webrtc`
- **描述**: Stopped transcievers not returned

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.getTransceivers.stopped_transceivers_removed 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.getTransceivers.stopped_transceivers_removed API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 88 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 118 |  |
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

- **支持版本**: 88

### Firefox

- **支持版本**: 118

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection.getTransceivers.stopped_transceivers_removed是否支持
function isRTCPeerConnectionGetTransceiversSupported() {
    return 'getTransceivers' in rtcpeerconnection && typeof rtcpeerconnection.getTransceivers === 'function';
}

if (isRTCPeerConnectionGetTransceiversSupported()) {
    console.log('RTCPeerConnection.getTransceivers.stopped_transceivers_removed 支持');
    // 使用RTCPeerConnection.getTransceivers.stopped_transceivers_removed
} else {
    console.log('RTCPeerConnection.getTransceivers.stopped_transceivers_removed 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.getTransceivers.stopped_transceivers_removed polyfill
if (!rtcpeerconnection.getTransceivers) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.getTransceivers.stopped_transceivers_removed polyfill');
}
```

