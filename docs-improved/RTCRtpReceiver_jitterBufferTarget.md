# RTCRtpReceiver.jitterBufferTarget API 兼容性数据

## 基本信息

- **API名称**: `RTCRtpReceiver.jitterBufferTarget`
- **MDN文档**: [RTCRtpReceiver.jitterBufferTarget](https://developer.mozilla.org/docs/Web/API/RTCRtpReceiver/jitterBufferTarget)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcrtpreceiver-jitterbuffertarget)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCRtpReceiver.jitterBufferTarget 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCRtpReceiver.jitterBufferTarget API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 124 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 115 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 124

### Firefox

- **支持版本**: 115

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCRtpReceiver.jitterBufferTarget是否支持
function isRTCRtpReceiverJitterBufferTargetSupported() {
    return 'jitterBufferTarget' in rtcrtpreceiver && typeof rtcrtpreceiver.jitterBufferTarget === 'function';
}

if (isRTCRtpReceiverJitterBufferTargetSupported()) {
    console.log('RTCRtpReceiver.jitterBufferTarget 支持');
    // 使用RTCRtpReceiver.jitterBufferTarget
} else {
    console.log('RTCRtpReceiver.jitterBufferTarget 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCRtpReceiver.jitterBufferTarget polyfill
if (!rtcrtpreceiver.jitterBufferTarget) {
    // 在这里添加polyfill实现
    console.log('加载RTCRtpReceiver.jitterBufferTarget polyfill');
}
```

