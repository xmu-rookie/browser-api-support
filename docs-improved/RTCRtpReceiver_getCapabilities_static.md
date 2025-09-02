# RTCRtpReceiver.getCapabilities_static API 兼容性数据

## 基本信息

- **API名称**: `RTCRtpReceiver.getCapabilities_static`
- **MDN文档**: [RTCRtpReceiver.getCapabilities_static](https://developer.mozilla.org/docs/Web/API/RTCRtpReceiver/getCapabilities_static)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcrtpreceiver-getcapabilities)
- **标签**: `web-features:webrtc`
- **描述**: `getCapabilities()` static method

## 使用示例

### 基本用法

```javascript
// RTCRtpReceiver.getCapabilities_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCRtpReceiver.getCapabilities_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 59 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 113 |  |
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

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 113

### Safari

- **支持版本**: 12.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCRtpReceiver.getCapabilities_static是否支持
function isRTCRtpReceiverGetCapabilities_staticSupported() {
    return 'getCapabilities_static' in rtcrtpreceiver && typeof rtcrtpreceiver.getCapabilities_static === 'function';
}

if (isRTCRtpReceiverGetCapabilities_staticSupported()) {
    console.log('RTCRtpReceiver.getCapabilities_static 支持');
    // 使用RTCRtpReceiver.getCapabilities_static
} else {
    console.log('RTCRtpReceiver.getCapabilities_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCRtpReceiver.getCapabilities_static polyfill
if (!rtcrtpreceiver.getCapabilities_static) {
    // 在这里添加polyfill实现
    console.log('加载RTCRtpReceiver.getCapabilities_static polyfill');
}
```

