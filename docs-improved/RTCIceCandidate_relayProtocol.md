# RTCIceCandidate.relayProtocol API 兼容性数据

## 基本信息

- **API名称**: `RTCIceCandidate.relayProtocol`
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcicecandidate-relayprotocol)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCIceCandidate.relayProtocol 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCIceCandidate.relayProtocol API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 124 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 | See [bug 1886013](https://bugzil.la/1886013). |
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

- **支持版本**: 124

### Firefox

- **支持版本**: 不支持
- **注意事项**:
  - See [bug 1886013](https://bugzil.la/1886013).

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCIceCandidate.relayProtocol是否支持
function isRTCIceCandidateRelayProtocolSupported() {
    return 'relayProtocol' in rtcicecandidate && typeof rtcicecandidate.relayProtocol === 'function';
}

if (isRTCIceCandidateRelayProtocolSupported()) {
    console.log('RTCIceCandidate.relayProtocol 支持');
    // 使用RTCIceCandidate.relayProtocol
} else {
    console.log('RTCIceCandidate.relayProtocol 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCIceCandidate.relayProtocol polyfill
if (!rtcicecandidate.relayProtocol) {
    // 在这里添加polyfill实现
    console.log('加载RTCIceCandidate.relayProtocol polyfill');
}
```

