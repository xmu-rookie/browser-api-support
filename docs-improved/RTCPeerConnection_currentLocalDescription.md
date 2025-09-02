# RTCPeerConnection.currentLocalDescription API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.currentLocalDescription`
- **MDN文档**: [RTCPeerConnection.currentLocalDescription](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/currentLocalDescription)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-peerconnection-currentlocaldesc)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.currentLocalDescription 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.currentLocalDescription API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 70 |  |
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

- **支持版本**: 70

### Firefox

- **支持版本**: 22

### Firefox Android

- **支持版本**: 24

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection.currentLocalDescription是否支持
function isRTCPeerConnectionCurrentLocalDescriptionSupported() {
    return 'currentLocalDescription' in rtcpeerconnection && typeof rtcpeerconnection.currentLocalDescription === 'function';
}

if (isRTCPeerConnectionCurrentLocalDescriptionSupported()) {
    console.log('RTCPeerConnection.currentLocalDescription 支持');
    // 使用RTCPeerConnection.currentLocalDescription
} else {
    console.log('RTCPeerConnection.currentLocalDescription 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.currentLocalDescription polyfill
if (!rtcpeerconnection.currentLocalDescription) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.currentLocalDescription polyfill');
}
```

