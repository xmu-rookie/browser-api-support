# RTCRtpReceiver.getContributingSources.audioLevel API 兼容性数据

## 基本信息

- **API名称**: `RTCRtpReceiver.getContributingSources.audioLevel`
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcrtpcontributingsource-audiolevel)
- **标签**: `web-features:webrtc`
- **描述**: `audioLevel` property in returned object

## 使用示例

### 基本用法

```javascript
// RTCRtpReceiver.getContributingSources.audioLevel 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCRtpReceiver.getContributingSources.audioLevel API');
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
// 检查RTCRtpReceiver.getContributingSources.audioLevel是否支持
function isRTCRtpReceiverGetContributingSourcesSupported() {
    return 'getContributingSources' in rtcrtpreceiver && typeof rtcrtpreceiver.getContributingSources === 'function';
}

if (isRTCRtpReceiverGetContributingSourcesSupported()) {
    console.log('RTCRtpReceiver.getContributingSources.audioLevel 支持');
    // 使用RTCRtpReceiver.getContributingSources.audioLevel
} else {
    console.log('RTCRtpReceiver.getContributingSources.audioLevel 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCRtpReceiver.getContributingSources.audioLevel polyfill
if (!rtcrtpreceiver.getContributingSources) {
    // 在这里添加polyfill实现
    console.log('加载RTCRtpReceiver.getContributingSources.audioLevel polyfill');
}
```

