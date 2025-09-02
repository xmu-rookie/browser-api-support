# RTCPeerConnection.track_event API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.track_event`
- **MDN文档**: [RTCPeerConnection.track_event](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/track_event)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#event-track)
- **标签**: `web-features:webrtc`
- **描述**: `track` event

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.track_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.track_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 64 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 22 |  |
| Firefox Android | 24 |  |
| Oculus | 同主版本 |  |
| Opera | 43 |  |
| Opera Android | 43 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 6.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 64

### Firefox

- **支持版本**: 22

### Firefox Android

- **支持版本**: 24

### Opera

- **支持版本**: 43

### Opera Android

- **支持版本**: 43

### Safari

- **支持版本**: 11

### Samsung Internet

- **支持版本**: 6.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection.track_event是否支持
function isRTCPeerConnectionTrack_eventSupported() {
    return 'track_event' in rtcpeerconnection && typeof rtcpeerconnection.track_event === 'function';
}

if (isRTCPeerConnectionTrack_eventSupported()) {
    console.log('RTCPeerConnection.track_event 支持');
    // 使用RTCPeerConnection.track_event
} else {
    console.log('RTCPeerConnection.track_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.track_event polyfill
if (!rtcpeerconnection.track_event) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.track_event polyfill');
}
```

