# RTCPeerConnection.setIdentityProvider API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.setIdentityProvider`
- **MDN文档**: [RTCPeerConnection.setIdentityProvider](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/setIdentityProvider)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-identity/#dom-rtcpeerconnection-setidentityprovider)

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.setIdentityProvider 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.setIdentityProvider API');
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
// 检查RTCPeerConnection.setIdentityProvider是否支持
function isRTCPeerConnectionSetIdentityProviderSupported() {
    return 'setIdentityProvider' in rtcpeerconnection && typeof rtcpeerconnection.setIdentityProvider === 'function';
}

if (isRTCPeerConnectionSetIdentityProviderSupported()) {
    console.log('RTCPeerConnection.setIdentityProvider 支持');
    // 使用RTCPeerConnection.setIdentityProvider
} else {
    console.log('RTCPeerConnection.setIdentityProvider 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.setIdentityProvider polyfill
if (!rtcpeerconnection.setIdentityProvider) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.setIdentityProvider polyfill');
}
```

