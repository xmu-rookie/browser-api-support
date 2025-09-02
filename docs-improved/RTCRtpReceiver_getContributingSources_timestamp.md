# RTCRtpReceiver.getContributingSources.timestamp API 兼容性数据

## 基本信息

- **API名称**: `RTCRtpReceiver.getContributingSources.timestamp`
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcrtpcontributingsource-timestamp)
- **标签**: `web-features:webrtc`
- **描述**: `timestamp` property in returned object

## 使用示例

### 基本用法

```javascript
// RTCRtpReceiver.getContributingSources.timestamp 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCRtpReceiver.getContributingSources.timestamp API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 59 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 59 | Starting in version 60, the `timestamp` is correctly computed based on the window's `Performance` ti... |
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

- **支持版本**: 59

### Firefox

- **支持版本**: 59
- **注意事项**:
  - Starting in version 60, the `timestamp` is correctly computed based on the window's `Performance` time, rather than `Date.getTime()`.

### Safari

- **支持版本**: 12.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCRtpReceiver.getContributingSources.timestamp是否支持
function isRTCRtpReceiverGetContributingSourcesSupported() {
    return 'getContributingSources' in rtcrtpreceiver && typeof rtcrtpreceiver.getContributingSources === 'function';
}

if (isRTCRtpReceiverGetContributingSourcesSupported()) {
    console.log('RTCRtpReceiver.getContributingSources.timestamp 支持');
    // 使用RTCRtpReceiver.getContributingSources.timestamp
} else {
    console.log('RTCRtpReceiver.getContributingSources.timestamp 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCRtpReceiver.getContributingSources.timestamp polyfill
if (!rtcrtpreceiver.getContributingSources) {
    // 在这里添加polyfill实现
    console.log('加载RTCRtpReceiver.getContributingSources.timestamp polyfill');
}
```

