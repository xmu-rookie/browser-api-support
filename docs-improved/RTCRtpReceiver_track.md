# RTCRtpReceiver.track API 兼容性数据

## 基本信息

- **API名称**: `RTCRtpReceiver.track`
- **MDN文档**: [RTCRtpReceiver.track](https://developer.mozilla.org/docs/Web/API/RTCRtpReceiver/track)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtpreceiver-track)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCRtpReceiver.track 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCRtpReceiver.track API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 59 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
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

- **支持版本**: 59

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 34

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCRtpReceiver.track是否支持
function isRTCRtpReceiverTrackSupported() {
    return 'track' in rtcrtpreceiver && typeof rtcrtpreceiver.track === 'function';
}

if (isRTCRtpReceiverTrackSupported()) {
    console.log('RTCRtpReceiver.track 支持');
    // 使用RTCRtpReceiver.track
} else {
    console.log('RTCRtpReceiver.track 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCRtpReceiver.track polyfill
if (!rtcrtpreceiver.track) {
    // 在这里添加polyfill实现
    console.log('加载RTCRtpReceiver.track polyfill');
}
```

