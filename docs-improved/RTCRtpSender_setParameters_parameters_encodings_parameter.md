# RTCRtpSender.setParameters.parameters_encodings_parameter API 兼容性数据

## 基本信息

- **API名称**: `RTCRtpSender.setParameters.parameters_encodings_parameter`
- **MDN文档**: [RTCRtpSender.setParameters.parameters_encodings_parameter](https://developer.mozilla.org/docs/Web/API/RTCRtpSender/setParameters#encodings)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcrtpsendparameters-encodings)
- **标签**: `web-features:webrtc`
- **描述**: `parameters.encodings` parameter

## 使用示例

### 基本用法

```javascript
// RTCRtpSender.setParameters.parameters_encodings_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCRtpSender.setParameters.parameters_encodings_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
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

- **支持版本**: 69

### Firefox

- **支持版本**: 46

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCRtpSender.setParameters.parameters_encodings_parameter是否支持
function isRTCRtpSenderSetParametersSupported() {
    return 'setParameters' in rtcrtpsender && typeof rtcrtpsender.setParameters === 'function';
}

if (isRTCRtpSenderSetParametersSupported()) {
    console.log('RTCRtpSender.setParameters.parameters_encodings_parameter 支持');
    // 使用RTCRtpSender.setParameters.parameters_encodings_parameter
} else {
    console.log('RTCRtpSender.setParameters.parameters_encodings_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCRtpSender.setParameters.parameters_encodings_parameter polyfill
if (!rtcrtpsender.setParameters) {
    // 在这里添加polyfill实现
    console.log('加载RTCRtpSender.setParameters.parameters_encodings_parameter polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **active**: `parameters.encodings.active` parameter
- **codec**: `parameters.encodings.codec` parameter
- **dtx**: `parameters.encodings.dtx` parameter
- **maxBitrate**: `parameters.encodings.maxBitrate` parameter
- **maxFramerate**: `parameters.encodings.maxFramerate` parameter
- **priority**: `parameters.encodings.priority` parameter
- **rid**: `parameters.encodings.rid` parameter
- **scaleResolutionDownBy**: `parameters.encodings.scaleResolutionDownBy` parameter

