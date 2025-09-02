# RTCDtlsTransport.getRemoteCertificates API 兼容性数据

## 基本信息

- **API名称**: `RTCDtlsTransport.getRemoteCertificates`
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcdtlstransport-getremotecertificates)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCDtlsTransport.getRemoteCertificates 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCDtlsTransport.getRemoteCertificates API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 72 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 50 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 72

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 不支持

### Opera Android

- **支持版本**: 50

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCDtlsTransport.getRemoteCertificates是否支持
function isRTCDtlsTransportGetRemoteCertificatesSupported() {
    return 'getRemoteCertificates' in rtcdtlstransport && typeof rtcdtlstransport.getRemoteCertificates === 'function';
}

if (isRTCDtlsTransportGetRemoteCertificatesSupported()) {
    console.log('RTCDtlsTransport.getRemoteCertificates 支持');
    // 使用RTCDtlsTransport.getRemoteCertificates
} else {
    console.log('RTCDtlsTransport.getRemoteCertificates 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCDtlsTransport.getRemoteCertificates polyfill
if (!rtcdtlstransport.getRemoteCertificates) {
    // 在这里添加polyfill实现
    console.log('加载RTCDtlsTransport.getRemoteCertificates polyfill');
}
```

