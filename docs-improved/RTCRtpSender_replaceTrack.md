# RTCRtpSender.replaceTrack API 兼容性数据

## 基本信息

- **API名称**: `RTCRtpSender.replaceTrack`
- **MDN文档**: [RTCRtpSender.replaceTrack](https://developer.mozilla.org/docs/Web/API/RTCRtpSender/replaceTrack)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcrtpsender-replacetrack)
- **标签**: `web-features:webrtc`
- **描述**: `replaceTrack()`

## 使用示例

### 基本用法

```javascript
// RTCRtpSender.replaceTrack 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCRtpSender.replaceTrack API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 65 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 34 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 65

### Firefox

- **支持版本**: 34

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCRtpSender.replaceTrack是否支持
function isRTCRtpSenderReplaceTrackSupported() {
    return 'replaceTrack' in rtcrtpsender && typeof rtcrtpsender.replaceTrack === 'function';
}

if (isRTCRtpSenderReplaceTrackSupported()) {
    console.log('RTCRtpSender.replaceTrack 支持');
    // 使用RTCRtpSender.replaceTrack
} else {
    console.log('RTCRtpSender.replaceTrack 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCRtpSender.replaceTrack polyfill
if (!rtcrtpsender.replaceTrack) {
    // 在这里添加polyfill实现
    console.log('加载RTCRtpSender.replaceTrack polyfill');
}
```

