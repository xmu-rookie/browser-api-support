# RTCPeerConnection.icecandidateerror_event API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.icecandidateerror_event`
- **MDN文档**: [RTCPeerConnection.icecandidateerror_event](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/icecandidateerror_event)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcpeerconnection-onicecandidateerror)
- **标签**: `web-features:webrtc`
- **描述**: `icecandidateerror` event

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.icecandidateerror_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.icecandidateerror_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 77 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 77

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection.icecandidateerror_event是否支持
function isRTCPeerConnectionIcecandidateerror_eventSupported() {
    return 'icecandidateerror_event' in rtcpeerconnection && typeof rtcpeerconnection.icecandidateerror_event === 'function';
}

if (isRTCPeerConnectionIcecandidateerror_eventSupported()) {
    console.log('RTCPeerConnection.icecandidateerror_event 支持');
    // 使用RTCPeerConnection.icecandidateerror_event
} else {
    console.log('RTCPeerConnection.icecandidateerror_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.icecandidateerror_event polyfill
if (!rtcpeerconnection.icecandidateerror_event) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.icecandidateerror_event polyfill');
}
```

