# RTCRtpSender.setParameters.parameters_encodings_parameter.scaleResolutionDownBy API 兼容性数据

## 基本信息

- **API名称**: `RTCRtpSender.setParameters.parameters_encodings_parameter.scaleResolutionDownBy`
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcrtpencodingparameters-scaleresolutiondownby)
- **标签**: `web-features:webrtc`
- **描述**: `parameters.encodings.scaleResolutionDownBy` parameter

## 使用示例

### 基本用法

```javascript
// RTCRtpSender.setParameters.parameters_encodings_parameter.scaleResolutionDownBy 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCRtpSender.setParameters.parameters_encodings_parameter.scaleResolutionDownBy API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 74 |  |
| Chrome Android | 同主版本 |  |
| Edge | 不支持 |  |
| Firefox | 46 |  |
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

- **支持版本**: 74

### Edge

- **支持版本**: 不支持

### Firefox

- **支持版本**: 46

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCRtpSender.setParameters.parameters_encodings_parameter.scaleResolutionDownBy是否支持
function isRTCRtpSenderSetParametersSupported() {
    return 'setParameters' in rtcrtpsender && typeof rtcrtpsender.setParameters === 'function';
}

if (isRTCRtpSenderSetParametersSupported()) {
    console.log('RTCRtpSender.setParameters.parameters_encodings_parameter.scaleResolutionDownBy 支持');
    // 使用RTCRtpSender.setParameters.parameters_encodings_parameter.scaleResolutionDownBy
} else {
    console.log('RTCRtpSender.setParameters.parameters_encodings_parameter.scaleResolutionDownBy 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCRtpSender.setParameters.parameters_encodings_parameter.scaleResolutionDownBy polyfill
if (!rtcrtpsender.setParameters) {
    // 在这里添加polyfill实现
    console.log('加载RTCRtpSender.setParameters.parameters_encodings_parameter.scaleResolutionDownBy polyfill');
}
```

