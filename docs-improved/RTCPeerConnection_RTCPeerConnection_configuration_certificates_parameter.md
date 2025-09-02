# RTCPeerConnection.RTCPeerConnection.configuration_certificates_parameter API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.RTCPeerConnection.configuration_certificates_parameter`
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcconfiguration-certificates)
- **标签**: `web-features:webrtc`
- **描述**: `configuration.certificates` parameter

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.RTCPeerConnection.configuration_certificates_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.RTCPeerConnection.configuration_certificates_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 42 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 12.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 7.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 49

### Firefox

- **支持版本**: 42

### Safari

- **支持版本**: 12.1

### Samsung Internet

- **支持版本**: 7.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection.RTCPeerConnection.configuration_certificates_parameter是否支持
function isRTCPeerConnectionRTCPeerConnectionSupported() {
    return 'RTCPeerConnection' in rtcpeerconnection && typeof rtcpeerconnection.RTCPeerConnection === 'function';
}

if (isRTCPeerConnectionRTCPeerConnectionSupported()) {
    console.log('RTCPeerConnection.RTCPeerConnection.configuration_certificates_parameter 支持');
    // 使用RTCPeerConnection.RTCPeerConnection.configuration_certificates_parameter
} else {
    console.log('RTCPeerConnection.RTCPeerConnection.configuration_certificates_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.RTCPeerConnection.configuration_certificates_parameter polyfill
if (!rtcpeerconnection.RTCPeerConnection) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.RTCPeerConnection.configuration_certificates_parameter polyfill');
}
```

