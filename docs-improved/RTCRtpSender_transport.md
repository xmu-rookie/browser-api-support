# RTCRtpSender.transport API 兼容性数据

## 基本信息

- **API名称**: `RTCRtpSender.transport`
- **MDN文档**: [RTCRtpSender.transport](https://developer.mozilla.org/docs/Web/API/RTCRtpSender/transport)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcrtpsender-transport)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCRtpSender.transport 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCRtpSender.transport API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 75 |  |
| Chrome Android | 同主版本 |  |
| Edge | 13 |  |
| Firefox | 82 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 75

### Edge

- **支持版本**: 13

### Firefox

- **支持版本**: 82

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCRtpSender.transport是否支持
function isRTCRtpSenderTransportSupported() {
    return 'transport' in rtcrtpsender && typeof rtcrtpsender.transport === 'function';
}

if (isRTCRtpSenderTransportSupported()) {
    console.log('RTCRtpSender.transport 支持');
    // 使用RTCRtpSender.transport
} else {
    console.log('RTCRtpSender.transport 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCRtpSender.transport polyfill
if (!rtcrtpsender.transport) {
    // 在这里添加polyfill实现
    console.log('加载RTCRtpSender.transport polyfill');
}
```

