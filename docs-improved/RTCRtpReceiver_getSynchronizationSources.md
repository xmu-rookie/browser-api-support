# RTCRtpReceiver.getSynchronizationSources API 兼容性数据

## 基本信息

- **API名称**: `RTCRtpReceiver.getSynchronizationSources`
- **MDN文档**: [RTCRtpReceiver.getSynchronizationSources](https://developer.mozilla.org/docs/Web/API/RTCRtpReceiver/getSynchronizationSources)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcrtpreceiver-getsynchronizationsources)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCRtpReceiver.getSynchronizationSources 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCRtpReceiver.getSynchronizationSources API');
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
// 检查RTCRtpReceiver.getSynchronizationSources是否支持
function isRTCRtpReceiverGetSynchronizationSourcesSupported() {
    return 'getSynchronizationSources' in rtcrtpreceiver && typeof rtcrtpreceiver.getSynchronizationSources === 'function';
}

if (isRTCRtpReceiverGetSynchronizationSourcesSupported()) {
    console.log('RTCRtpReceiver.getSynchronizationSources 支持');
    // 使用RTCRtpReceiver.getSynchronizationSources
} else {
    console.log('RTCRtpReceiver.getSynchronizationSources 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCRtpReceiver.getSynchronizationSources polyfill
if (!rtcrtpreceiver.getSynchronizationSources) {
    // 在这里添加polyfill实现
    console.log('加载RTCRtpReceiver.getSynchronizationSources polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **audio_tracks_supported**: Audio tracks supported
- **video_tracks_supported**: Video tracks supported

