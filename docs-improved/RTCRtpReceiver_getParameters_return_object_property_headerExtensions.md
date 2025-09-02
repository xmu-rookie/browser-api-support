# RTCRtpReceiver.getParameters.return_object_property_headerExtensions API 兼容性数据

## 基本信息

- **API名称**: `RTCRtpReceiver.getParameters.return_object_property_headerExtensions`
- **MDN文档**: [RTCRtpReceiver.getParameters.return_object_property_headerExtensions](https://developer.mozilla.org/docs/Web/API/RTCRtpReceiver/getParameters#headerextensions)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcrtpparameters-headerextensions)
- **标签**: `web-features:webrtc`
- **描述**: `headerExtensions` property in returned object

## 使用示例

### 基本用法

```javascript
// RTCRtpReceiver.getParameters.return_object_property_headerExtensions 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCRtpReceiver.getParameters.return_object_property_headerExtensions API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 不支持

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCRtpReceiver.getParameters.return_object_property_headerExtensions是否支持
function isRTCRtpReceiverGetParametersSupported() {
    return 'getParameters' in rtcrtpreceiver && typeof rtcrtpreceiver.getParameters === 'function';
}

if (isRTCRtpReceiverGetParametersSupported()) {
    console.log('RTCRtpReceiver.getParameters.return_object_property_headerExtensions 支持');
    // 使用RTCRtpReceiver.getParameters.return_object_property_headerExtensions
} else {
    console.log('RTCRtpReceiver.getParameters.return_object_property_headerExtensions 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCRtpReceiver.getParameters.return_object_property_headerExtensions polyfill
if (!rtcrtpreceiver.getParameters) {
    // 在这里添加polyfill实现
    console.log('加载RTCRtpReceiver.getParameters.return_object_property_headerExtensions polyfill');
}
```

