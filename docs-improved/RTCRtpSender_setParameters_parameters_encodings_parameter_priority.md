# RTCRtpSender.setParameters.parameters_encodings_parameter.priority API 兼容性数据

## 基本信息

- **API名称**: `RTCRtpSender.setParameters.parameters_encodings_parameter.priority`
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-priority/#dom-rtcrtpencodingparameters-priority)
- **描述**: `parameters.encodings.priority` parameter

## 使用示例

### 基本用法

```javascript
// RTCRtpSender.setParameters.parameters_encodings_parameter.priority 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCRtpSender.setParameters.parameters_encodings_parameter.priority API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 46 | In version 110 and later the default priority is `low`. |
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
- **注意事项**:
  - In version 110 and later the default priority is `low`.

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCRtpSender.setParameters.parameters_encodings_parameter.priority是否支持
function isRTCRtpSenderSetParametersSupported() {
    return 'setParameters' in rtcrtpsender && typeof rtcrtpsender.setParameters === 'function';
}

if (isRTCRtpSenderSetParametersSupported()) {
    console.log('RTCRtpSender.setParameters.parameters_encodings_parameter.priority 支持');
    // 使用RTCRtpSender.setParameters.parameters_encodings_parameter.priority
} else {
    console.log('RTCRtpSender.setParameters.parameters_encodings_parameter.priority 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCRtpSender.setParameters.parameters_encodings_parameter.priority polyfill
if (!rtcrtpsender.setParameters) {
    // 在这里添加polyfill实现
    console.log('加载RTCRtpSender.setParameters.parameters_encodings_parameter.priority polyfill');
}
```

