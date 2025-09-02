# RTCRtpTransceiver.setCodecPreferences API 兼容性数据

## 基本信息

- **API名称**: `RTCRtpTransceiver.setCodecPreferences`
- **MDN文档**: [RTCRtpTransceiver.setCodecPreferences](https://developer.mozilla.org/docs/Web/API/RTCRtpTransceiver/setCodecPreferences)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcrtptransceiver-setcodecpreferences)
- **标签**: `web-features:webrtc`
- **描述**: `setCodecPreferences()`

## 使用示例

### 基本用法

```javascript
// RTCRtpTransceiver.setCodecPreferences 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCRtpTransceiver.setCodecPreferences API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 76 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 128 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 76

### Firefox

- **支持版本**: 128

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCRtpTransceiver.setCodecPreferences是否支持
function isRTCRtpTransceiverSetCodecPreferencesSupported() {
    return 'setCodecPreferences' in rtcrtptransceiver && typeof rtcrtptransceiver.setCodecPreferences === 'function';
}

if (isRTCRtpTransceiverSetCodecPreferencesSupported()) {
    console.log('RTCRtpTransceiver.setCodecPreferences 支持');
    // 使用RTCRtpTransceiver.setCodecPreferences
} else {
    console.log('RTCRtpTransceiver.setCodecPreferences 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCRtpTransceiver.setCodecPreferences polyfill
if (!rtcrtptransceiver.setCodecPreferences) {
    // 在这里添加polyfill实现
    console.log('加载RTCRtpTransceiver.setCodecPreferences polyfill');
}
```

