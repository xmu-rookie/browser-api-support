# RTCPeerConnection.localDescription API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.localDescription`
- **MDN文档**: [RTCPeerConnection.localDescription](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/localDescription)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-peerconnection-localdescription)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.localDescription 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.localDescription API');
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
// 检查RTCPeerConnection.localDescription是否支持
function isRTCPeerConnectionLocalDescriptionSupported() {
    return 'localDescription' in rtcpeerconnection && typeof rtcpeerconnection.localDescription === 'function';
}

if (isRTCPeerConnectionLocalDescriptionSupported()) {
    console.log('RTCPeerConnection.localDescription 支持');
    // 使用RTCPeerConnection.localDescription
} else {
    console.log('RTCPeerConnection.localDescription 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.localDescription polyfill
if (!rtcpeerconnection.localDescription) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.localDescription polyfill');
}
```

