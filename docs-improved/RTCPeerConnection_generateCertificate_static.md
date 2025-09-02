# RTCPeerConnection.generateCertificate_static API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.generateCertificate_static`
- **MDN文档**: [RTCPeerConnection.generateCertificate_static](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/generateCertificate_static)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcpeerconnection-generatecertificate)
- **标签**: `web-features:webrtc`
- **描述**: `generateCertificate()` static method

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.generateCertificate_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.generateCertificate_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 48 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 22 |  |
| Firefox Android | 24 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 12.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 6.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 48

### Firefox

- **支持版本**: 22

### Firefox Android

- **支持版本**: 24

### Safari

- **支持版本**: 12.1

### Samsung Internet

- **支持版本**: 6.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection.generateCertificate_static是否支持
function isRTCPeerConnectionGenerateCertificate_staticSupported() {
    return 'generateCertificate_static' in rtcpeerconnection && typeof rtcpeerconnection.generateCertificate_static === 'function';
}

if (isRTCPeerConnectionGenerateCertificate_staticSupported()) {
    console.log('RTCPeerConnection.generateCertificate_static 支持');
    // 使用RTCPeerConnection.generateCertificate_static
} else {
    console.log('RTCPeerConnection.generateCertificate_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.generateCertificate_static polyfill
if (!rtcpeerconnection.generateCertificate_static) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.generateCertificate_static polyfill');
}
```

