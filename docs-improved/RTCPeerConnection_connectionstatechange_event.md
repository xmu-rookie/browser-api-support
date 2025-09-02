# RTCPeerConnection.connectionstatechange_event API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.connectionstatechange_event`
- **MDN文档**: [RTCPeerConnection.connectionstatechange_event](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcpeerconnection-onconnectionstatechange)
- **标签**: `web-features:webrtc`
- **描述**: `connectionstatechange` event

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.connectionstatechange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.connectionstatechange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 72 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 113 |  |
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

- **支持版本**: 72

### Firefox

- **支持版本**: 113

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection.connectionstatechange_event是否支持
function isRTCPeerConnectionConnectionstatechange_eventSupported() {
    return 'connectionstatechange_event' in rtcpeerconnection && typeof rtcpeerconnection.connectionstatechange_event === 'function';
}

if (isRTCPeerConnectionConnectionstatechange_eventSupported()) {
    console.log('RTCPeerConnection.connectionstatechange_event 支持');
    // 使用RTCPeerConnection.connectionstatechange_event
} else {
    console.log('RTCPeerConnection.connectionstatechange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.connectionstatechange_event polyfill
if (!rtcpeerconnection.connectionstatechange_event) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.connectionstatechange_event polyfill');
}
```

