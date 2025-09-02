# RTCPeerConnection.getSenders API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.getSenders`
- **MDN文档**: [RTCPeerConnection.getSenders](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/getSenders)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-peerconnection-getsenders)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.getSenders 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.getSenders API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 64 |  |
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

- **支持版本**: 64

### Firefox

- **支持版本**: 34

### Safari

- **支持版本**: 11

### Samsung Internet

- **支持版本**: 6.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection.getSenders是否支持
function isRTCPeerConnectionGetSendersSupported() {
    return 'getSenders' in rtcpeerconnection && typeof rtcpeerconnection.getSenders === 'function';
}

if (isRTCPeerConnectionGetSendersSupported()) {
    console.log('RTCPeerConnection.getSenders 支持');
    // 使用RTCPeerConnection.getSenders
} else {
    console.log('RTCPeerConnection.getSenders 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.getSenders polyfill
if (!rtcpeerconnection.getSenders) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.getSenders polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **stopped_transceivers_removed**: Senders for stopped transceivers not returned

