# RTCPeerConnection.canTrickleIceCandidates API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.canTrickleIceCandidates`
- **MDN文档**: [RTCPeerConnection.canTrickleIceCandidates](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcpeerconnection-cantrickleicecandidates)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.canTrickleIceCandidates 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.canTrickleIceCandidates API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 83 |  |
| Chrome Android | 同主版本 |  |
| Edge | 83 |  |
| Firefox | 47 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 83

### Edge

- **支持版本**: 83
- **支持版本**: 15
- **移除版本**: 79

### Firefox

- **支持版本**: 47

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection.canTrickleIceCandidates是否支持
function isRTCPeerConnectionCanTrickleIceCandidatesSupported() {
    return 'canTrickleIceCandidates' in rtcpeerconnection && typeof rtcpeerconnection.canTrickleIceCandidates === 'function';
}

if (isRTCPeerConnectionCanTrickleIceCandidatesSupported()) {
    console.log('RTCPeerConnection.canTrickleIceCandidates 支持');
    // 使用RTCPeerConnection.canTrickleIceCandidates
} else {
    console.log('RTCPeerConnection.canTrickleIceCandidates 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.canTrickleIceCandidates polyfill
if (!rtcpeerconnection.canTrickleIceCandidates) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.canTrickleIceCandidates polyfill');
}
```

