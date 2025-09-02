# RTCRtpSender.getCapabilities_static API 兼容性数据

## 基本信息

- **API名称**: `RTCRtpSender.getCapabilities_static`
- **MDN文档**: [RTCRtpSender.getCapabilities_static](https://developer.mozilla.org/docs/Web/API/RTCRtpSender/getCapabilities_static)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcrtpsender-getcapabilities)
- **标签**: `web-features:webrtc`
- **描述**: `getCapabilities()` static method

## 使用示例

### 基本用法

```javascript
// RTCRtpSender.getCapabilities_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCRtpSender.getCapabilities_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 |  |
| Chrome Android | 同主版本 |  |
| Edge | 13 |  |
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

- **支持版本**: 69

### Edge

- **支持版本**: 13

### Firefox

- **支持版本**: 113

### Safari

- **支持版本**: 12.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCRtpSender.getCapabilities_static是否支持
function isRTCRtpSenderGetCapabilities_staticSupported() {
    return 'getCapabilities_static' in rtcrtpsender && typeof rtcrtpsender.getCapabilities_static === 'function';
}

if (isRTCRtpSenderGetCapabilities_staticSupported()) {
    console.log('RTCRtpSender.getCapabilities_static 支持');
    // 使用RTCRtpSender.getCapabilities_static
} else {
    console.log('RTCRtpSender.getCapabilities_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCRtpSender.getCapabilities_static polyfill
if (!rtcrtpsender.getCapabilities_static) {
    // 在这里添加polyfill实现
    console.log('加载RTCRtpSender.getCapabilities_static polyfill');
}
```

