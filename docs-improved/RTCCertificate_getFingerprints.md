# RTCCertificate.getFingerprints API 兼容性数据

## 基本信息

- **API名称**: `RTCCertificate.getFingerprints`
- **MDN文档**: [RTCCertificate.getFingerprints](https://developer.mozilla.org/docs/Web/API/RTCCertificate/getFingerprints)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtccertificate-getfingerprints)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCCertificate.getFingerprints 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCCertificate.getFingerprints API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 138 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 12.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61

### Firefox

- **支持版本**: 138

### Safari

- **支持版本**: 12.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCCertificate.getFingerprints是否支持
function isRTCCertificateGetFingerprintsSupported() {
    return 'getFingerprints' in rtccertificate && typeof rtccertificate.getFingerprints === 'function';
}

if (isRTCCertificateGetFingerprintsSupported()) {
    console.log('RTCCertificate.getFingerprints 支持');
    // 使用RTCCertificate.getFingerprints
} else {
    console.log('RTCCertificate.getFingerprints 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCCertificate.getFingerprints polyfill
if (!rtccertificate.getFingerprints) {
    // 在这里添加polyfill实现
    console.log('加载RTCCertificate.getFingerprints polyfill');
}
```

