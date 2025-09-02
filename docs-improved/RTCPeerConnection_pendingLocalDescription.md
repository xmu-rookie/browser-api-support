# RTCPeerConnection.pendingLocalDescription API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.pendingLocalDescription`
- **MDN文档**: [RTCPeerConnection.pendingLocalDescription](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/pendingLocalDescription)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-peerconnection-pendinglocaldesc)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.pendingLocalDescription 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.pendingLocalDescription API');
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
// 检查RTCPeerConnection.pendingLocalDescription是否支持
function isRTCPeerConnectionPendingLocalDescriptionSupported() {
    return 'pendingLocalDescription' in rtcpeerconnection && typeof rtcpeerconnection.pendingLocalDescription === 'function';
}

if (isRTCPeerConnectionPendingLocalDescriptionSupported()) {
    console.log('RTCPeerConnection.pendingLocalDescription 支持');
    // 使用RTCPeerConnection.pendingLocalDescription
} else {
    console.log('RTCPeerConnection.pendingLocalDescription 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.pendingLocalDescription polyfill
if (!rtcpeerconnection.pendingLocalDescription) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.pendingLocalDescription polyfill');
}
```

