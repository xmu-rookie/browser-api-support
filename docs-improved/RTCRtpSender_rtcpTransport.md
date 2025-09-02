# RTCRtpSender.rtcpTransport API 兼容性数据

## 基本信息

- **API名称**: `RTCRtpSender.rtcpTransport`

## 使用示例

### 基本用法

```javascript
// RTCRtpSender.rtcpTransport 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCRtpSender.rtcpTransport API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 75 |  |
| Chrome Android | 同主版本 |  |
| Edge | 13 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 75

### Edge

- **支持版本**: 13

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCRtpSender.rtcpTransport是否支持
function isRTCRtpSenderRtcpTransportSupported() {
    return 'rtcpTransport' in rtcrtpsender && typeof rtcrtpsender.rtcpTransport === 'function';
}

if (isRTCRtpSenderRtcpTransportSupported()) {
    console.log('RTCRtpSender.rtcpTransport 支持');
    // 使用RTCRtpSender.rtcpTransport
} else {
    console.log('RTCRtpSender.rtcpTransport 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCRtpSender.rtcpTransport polyfill
if (!rtcrtpsender.rtcpTransport) {
    // 在这里添加polyfill实现
    console.log('加载RTCRtpSender.rtcpTransport polyfill');
}
```

