# RTCRtpSender.setParameters API 兼容性数据

## 基本信息

- **API名称**: `RTCRtpSender.setParameters`
- **MDN文档**: [RTCRtpSender.setParameters](https://developer.mozilla.org/docs/Web/API/RTCRtpSender/setParameters)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcrtpsender-setparameters)
- **标签**: `web-features:webrtc`
- **描述**: `setParameters()`

## 使用示例

### 基本用法

```javascript
// RTCRtpSender.setParameters 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCRtpSender.setParameters API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 68 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 64 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 68

### Firefox

- **支持版本**: 64
- **支持版本**: 46
- **移除版本**: 64
- **部分实现**: 是
- **注意事项**:
  - Before Firefox 64, changes to parameters that should update live would not do so.

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCRtpSender.setParameters是否支持
function isRTCRtpSenderSetParametersSupported() {
    return 'setParameters' in rtcrtpsender && typeof rtcrtpsender.setParameters === 'function';
}

if (isRTCRtpSenderSetParametersSupported()) {
    console.log('RTCRtpSender.setParameters 支持');
    // 使用RTCRtpSender.setParameters
} else {
    console.log('RTCRtpSender.setParameters 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCRtpSender.setParameters polyfill
if (!rtcrtpsender.setParameters) {
    // 在这里添加polyfill实现
    console.log('加载RTCRtpSender.setParameters polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **parameters_codecs_parameter**: `parameters.codecs` parameter
- **parameters_degradationPreference_parameter**: `parameters.degradationPreference` parameter
- **parameters_encodings_parameter**: `parameters.encodings` parameter
- **parameters_headerExtensions_parameter**: `parameters.headerExtensions` parameter
- **parameters_rtcp_parameter**: `parameters.rtcp` parameter
- **parameters_transactionId_parameter**: `parameters.transactionId` parameter

