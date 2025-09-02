# RTCPeerConnection.getReceivers API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.getReceivers`
- **MDN文档**: [RTCPeerConnection.getReceivers](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/getReceivers)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-peerconnection-getreceivers)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.getReceivers 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.getReceivers API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 59 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 34 |  |
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

- **支持版本**: 59

### Firefox

- **支持版本**: 34

### Safari

- **支持版本**: 11

### Samsung Internet

- **支持版本**: 6.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection.getReceivers是否支持
function isRTCPeerConnectionGetReceiversSupported() {
    return 'getReceivers' in rtcpeerconnection && typeof rtcpeerconnection.getReceivers === 'function';
}

if (isRTCPeerConnectionGetReceiversSupported()) {
    console.log('RTCPeerConnection.getReceivers 支持');
    // 使用RTCPeerConnection.getReceivers
} else {
    console.log('RTCPeerConnection.getReceivers 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.getReceivers polyfill
if (!rtcpeerconnection.getReceivers) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.getReceivers polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **stopped_transceivers_removed**: Receivers for stopped transceivers not returned

