# RTCRtpReceiver.transport API 兼容性数据

## 基本信息

- **API名称**: `RTCRtpReceiver.transport`
- **MDN文档**: [RTCRtpReceiver.transport](https://developer.mozilla.org/docs/Web/API/RTCRtpReceiver/transport)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcrtpreceiver-transport)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCRtpReceiver.transport 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCRtpReceiver.transport API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 59 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
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

- **支持版本**: 59

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 82

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCRtpReceiver.transport是否支持
function isRTCRtpReceiverTransportSupported() {
    return 'transport' in rtcrtpreceiver && typeof rtcrtpreceiver.transport === 'function';
}

if (isRTCRtpReceiverTransportSupported()) {
    console.log('RTCRtpReceiver.transport 支持');
    // 使用RTCRtpReceiver.transport
} else {
    console.log('RTCRtpReceiver.transport 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCRtpReceiver.transport polyfill
if (!rtcrtpreceiver.transport) {
    // 在这里添加polyfill实现
    console.log('加载RTCRtpReceiver.transport polyfill');
}
```

