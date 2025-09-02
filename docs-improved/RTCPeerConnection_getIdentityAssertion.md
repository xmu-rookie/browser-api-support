# RTCPeerConnection.getIdentityAssertion API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.getIdentityAssertion`
- **MDN文档**: [RTCPeerConnection.getIdentityAssertion](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/getIdentityAssertion)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-identity/#dom-rtcpeerconnection-getidentityassertion)

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.getIdentityAssertion 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.getIdentityAssertion API');
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
// 检查RTCPeerConnection.getIdentityAssertion是否支持
function isRTCPeerConnectionGetIdentityAssertionSupported() {
    return 'getIdentityAssertion' in rtcpeerconnection && typeof rtcpeerconnection.getIdentityAssertion === 'function';
}

if (isRTCPeerConnectionGetIdentityAssertionSupported()) {
    console.log('RTCPeerConnection.getIdentityAssertion 支持');
    // 使用RTCPeerConnection.getIdentityAssertion
} else {
    console.log('RTCPeerConnection.getIdentityAssertion 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.getIdentityAssertion polyfill
if (!rtcpeerconnection.getIdentityAssertion) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.getIdentityAssertion polyfill');
}
```

