# RTCPeerConnection.RTCPeerConnection.configuration_iceServers_parameter.username_parameter API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.RTCPeerConnection.configuration_iceServers_parameter.username_parameter`
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtciceserver-username)
- **标签**: `web-features:webrtc`
- **描述**: `configuration.iceServers.username` parameter

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.RTCPeerConnection.configuration_iceServers_parameter.username_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.RTCPeerConnection.configuration_iceServers_parameter.username_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 45 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 23 |  |
| Firefox Android | 24 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 45

### Firefox

- **支持版本**: 23

### Firefox Android

- **支持版本**: 24

### Safari

- **支持版本**: 11

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection.RTCPeerConnection.configuration_iceServers_parameter.username_parameter是否支持
function isRTCPeerConnectionRTCPeerConnectionSupported() {
    return 'RTCPeerConnection' in rtcpeerconnection && typeof rtcpeerconnection.RTCPeerConnection === 'function';
}

if (isRTCPeerConnectionRTCPeerConnectionSupported()) {
    console.log('RTCPeerConnection.RTCPeerConnection.configuration_iceServers_parameter.username_parameter 支持');
    // 使用RTCPeerConnection.RTCPeerConnection.configuration_iceServers_parameter.username_parameter
} else {
    console.log('RTCPeerConnection.RTCPeerConnection.configuration_iceServers_parameter.username_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.RTCPeerConnection.configuration_iceServers_parameter.username_parameter polyfill
if (!rtcpeerconnection.RTCPeerConnection) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.RTCPeerConnection.configuration_iceServers_parameter.username_parameter polyfill');
}
```

