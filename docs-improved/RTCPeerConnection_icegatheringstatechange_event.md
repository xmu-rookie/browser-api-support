# RTCPeerConnection.icegatheringstatechange_event API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.icegatheringstatechange_event`
- **MDN文档**: [RTCPeerConnection.icegatheringstatechange_event](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcpeerconnection-onicegatheringstatechange)
- **标签**: `web-features:webrtc`
- **描述**: `icegatheringstatechange` event

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.icegatheringstatechange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.icegatheringstatechange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 59 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
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

- **支持版本**: 59

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 22

### Firefox Android

- **支持版本**: 24

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection.icegatheringstatechange_event是否支持
function isRTCPeerConnectionIcegatheringstatechange_eventSupported() {
    return 'icegatheringstatechange_event' in rtcpeerconnection && typeof rtcpeerconnection.icegatheringstatechange_event === 'function';
}

if (isRTCPeerConnectionIcegatheringstatechange_eventSupported()) {
    console.log('RTCPeerConnection.icegatheringstatechange_event 支持');
    // 使用RTCPeerConnection.icegatheringstatechange_event
} else {
    console.log('RTCPeerConnection.icegatheringstatechange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.icegatheringstatechange_event polyfill
if (!rtcpeerconnection.icegatheringstatechange_event) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.icegatheringstatechange_event polyfill');
}
```

