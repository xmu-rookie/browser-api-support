# RTCPeerConnection.peerIdentity API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.peerIdentity`
- **MDN文档**: [RTCPeerConnection.peerIdentity](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/peerIdentity)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-identity/#dom-rtcpeerconnection-peeridentity)

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.peerIdentity 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.peerIdentity API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | ≤18 |  |
| Firefox | 40 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Edge

- **支持版本**: ≤18
- **移除版本**: 79

### Firefox

- **支持版本**: 40

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection.peerIdentity是否支持
function isRTCPeerConnectionPeerIdentitySupported() {
    return 'peerIdentity' in rtcpeerconnection && typeof rtcpeerconnection.peerIdentity === 'function';
}

if (isRTCPeerConnectionPeerIdentitySupported()) {
    console.log('RTCPeerConnection.peerIdentity 支持');
    // 使用RTCPeerConnection.peerIdentity
} else {
    console.log('RTCPeerConnection.peerIdentity 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.peerIdentity polyfill
if (!rtcpeerconnection.peerIdentity) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.peerIdentity polyfill');
}
```

