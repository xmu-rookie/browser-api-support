# RTCRtpReceiver.getStats API 兼容性数据

## 基本信息

- **API名称**: `RTCRtpReceiver.getStats`
- **MDN文档**: [RTCRtpReceiver.getStats](https://developer.mozilla.org/docs/Web/API/RTCRtpReceiver/getStats)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#widl-RTCRtpReceiver-getStats-Promise-RTCStatsReport)
- **标签**: `web-features:webrtc-stats`

## 使用示例

### 基本用法

```javascript
// RTCRtpReceiver.getStats 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCRtpReceiver.getStats API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 67 |  |
| Chrome Android | 同主版本 |  |
| Edge | 13 |  |
| Firefox | 55 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 12.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 7.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 67

### Edge

- **支持版本**: 13

### Firefox

- **支持版本**: 55

### Safari

- **支持版本**: 12.1

### Samsung Internet

- **支持版本**: 7.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCRtpReceiver.getStats是否支持
function isRTCRtpReceiverGetStatsSupported() {
    return 'getStats' in rtcrtpreceiver && typeof rtcrtpreceiver.getStats === 'function';
}

if (isRTCRtpReceiverGetStatsSupported()) {
    console.log('RTCRtpReceiver.getStats 支持');
    // 使用RTCRtpReceiver.getStats
} else {
    console.log('RTCRtpReceiver.getStats 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCRtpReceiver.getStats polyfill
if (!rtcrtpreceiver.getStats) {
    // 在这里添加polyfill实现
    console.log('加载RTCRtpReceiver.getStats polyfill');
}
```

