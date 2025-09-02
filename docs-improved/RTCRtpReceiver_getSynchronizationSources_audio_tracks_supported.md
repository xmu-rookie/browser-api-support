# RTCRtpReceiver.getSynchronizationSources.audio_tracks_supported API 兼容性数据

## 基本信息

- **API名称**: `RTCRtpReceiver.getSynchronizationSources.audio_tracks_supported`
- **标签**: `web-features:webrtc`
- **描述**: Audio tracks supported

## 使用示例

### 基本用法

```javascript
// RTCRtpReceiver.getSynchronizationSources.audio_tracks_supported 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCRtpReceiver.getSynchronizationSources.audio_tracks_supported API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 73 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 59 |  |
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

- **支持版本**: 73

### Firefox

- **支持版本**: 59

### Safari

- **支持版本**: 12.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCRtpReceiver.getSynchronizationSources.audio_tracks_supported是否支持
function isRTCRtpReceiverGetSynchronizationSourcesSupported() {
    return 'getSynchronizationSources' in rtcrtpreceiver && typeof rtcrtpreceiver.getSynchronizationSources === 'function';
}

if (isRTCRtpReceiverGetSynchronizationSourcesSupported()) {
    console.log('RTCRtpReceiver.getSynchronizationSources.audio_tracks_supported 支持');
    // 使用RTCRtpReceiver.getSynchronizationSources.audio_tracks_supported
} else {
    console.log('RTCRtpReceiver.getSynchronizationSources.audio_tracks_supported 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCRtpReceiver.getSynchronizationSources.audio_tracks_supported polyfill
if (!rtcrtpreceiver.getSynchronizationSources) {
    // 在这里添加polyfill实现
    console.log('加载RTCRtpReceiver.getSynchronizationSources.audio_tracks_supported polyfill');
}
```

