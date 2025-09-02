# RTCPeerConnection.setConfiguration API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.setConfiguration`
- **MDN文档**: [RTCPeerConnection.setConfiguration](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/setConfiguration)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcpeerconnection-setconfiguration)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.setConfiguration 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.setConfiguration API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 48 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 99 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 6.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 48

### Firefox

- **支持版本**: 99

### Safari

- **支持版本**: 11

### Samsung Internet

- **支持版本**: 6.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection.setConfiguration是否支持
function isRTCPeerConnectionSetConfigurationSupported() {
    return 'setConfiguration' in rtcpeerconnection && typeof rtcpeerconnection.setConfiguration === 'function';
}

if (isRTCPeerConnectionSetConfigurationSupported()) {
    console.log('RTCPeerConnection.setConfiguration 支持');
    // 使用RTCPeerConnection.setConfiguration
} else {
    console.log('RTCPeerConnection.setConfiguration 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.setConfiguration polyfill
if (!rtcpeerconnection.setConfiguration) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.setConfiguration polyfill');
}
```

