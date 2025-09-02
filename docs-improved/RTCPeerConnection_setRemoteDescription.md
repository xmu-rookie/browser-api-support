# RTCPeerConnection.setRemoteDescription API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.setRemoteDescription`
- **MDN文档**: [RTCPeerConnection.setRemoteDescription](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/setRemoteDescription)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-peerconnection-setremotedescription)
- **标签**: `web-features:webrtc`
- **描述**: `setRemoteDescription()`

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.setRemoteDescription 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.setRemoteDescription API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 24 |  |
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

- **支持版本**: 24

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
// 检查RTCPeerConnection.setRemoteDescription是否支持
function isRTCPeerConnectionSetRemoteDescriptionSupported() {
    return 'setRemoteDescription' in rtcpeerconnection && typeof rtcpeerconnection.setRemoteDescription === 'function';
}

if (isRTCPeerConnectionSetRemoteDescriptionSupported()) {
    console.log('RTCPeerConnection.setRemoteDescription 支持');
    // 使用RTCPeerConnection.setRemoteDescription
} else {
    console.log('RTCPeerConnection.setRemoteDescription 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.setRemoteDescription polyfill
if (!rtcpeerconnection.setRemoteDescription) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.setRemoteDescription polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **implicit_rollback**: Implicit rollback
- **returns_promise**: Returns a `Promise`

