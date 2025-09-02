# RTCPeerConnection.setRemoteDescription.implicit_rollback API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.setRemoteDescription.implicit_rollback`
- **标签**: `web-features:webrtc`
- **描述**: Implicit rollback

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.setRemoteDescription.implicit_rollback 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.setRemoteDescription.implicit_rollback API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 80 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 70 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 66 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 80

### Firefox

- **支持版本**: 70

### Opera Android

- **支持版本**: 66

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection.setRemoteDescription.implicit_rollback是否支持
function isRTCPeerConnectionSetRemoteDescriptionSupported() {
    return 'setRemoteDescription' in rtcpeerconnection && typeof rtcpeerconnection.setRemoteDescription === 'function';
}

if (isRTCPeerConnectionSetRemoteDescriptionSupported()) {
    console.log('RTCPeerConnection.setRemoteDescription.implicit_rollback 支持');
    // 使用RTCPeerConnection.setRemoteDescription.implicit_rollback
} else {
    console.log('RTCPeerConnection.setRemoteDescription.implicit_rollback 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.setRemoteDescription.implicit_rollback polyfill
if (!rtcpeerconnection.setRemoteDescription) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.setRemoteDescription.implicit_rollback polyfill');
}
```

