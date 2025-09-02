# RTCPeerConnection.datachannel_event API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.datachannel_event`
- **MDN文档**: [RTCPeerConnection.datachannel_event](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/datachannel_event)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcpeerconnection-ondatachannel)
- **标签**: `web-features:webrtc`
- **描述**: `datachannel` event

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.datachannel_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.datachannel_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 25 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 22 |  |
| Firefox Android | 24 |  |
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

- **支持版本**: 25

### Firefox

- **支持版本**: 22

### Firefox Android

- **支持版本**: 24

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection.datachannel_event是否支持
function isRTCPeerConnectionDatachannel_eventSupported() {
    return 'datachannel_event' in rtcpeerconnection && typeof rtcpeerconnection.datachannel_event === 'function';
}

if (isRTCPeerConnectionDatachannel_eventSupported()) {
    console.log('RTCPeerConnection.datachannel_event 支持');
    // 使用RTCPeerConnection.datachannel_event
} else {
    console.log('RTCPeerConnection.datachannel_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.datachannel_event polyfill
if (!rtcpeerconnection.datachannel_event) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.datachannel_event polyfill');
}
```

