# RTCRtpTransceiver.mid API 兼容性数据

## 基本信息

- **API名称**: `RTCRtpTransceiver.mid`
- **MDN文档**: [RTCRtpTransceiver.mid](https://developer.mozilla.org/docs/Web/API/RTCRtpTransceiver/mid)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtptransceiver-mid)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCRtpTransceiver.mid 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCRtpTransceiver.mid API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 59 |  |
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

- **支持版本**: 59

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCRtpTransceiver.mid是否支持
function isRTCRtpTransceiverMidSupported() {
    return 'mid' in rtcrtptransceiver && typeof rtcrtptransceiver.mid === 'function';
}

if (isRTCRtpTransceiverMidSupported()) {
    console.log('RTCRtpTransceiver.mid 支持');
    // 使用RTCRtpTransceiver.mid
} else {
    console.log('RTCRtpTransceiver.mid 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCRtpTransceiver.mid polyfill
if (!rtcrtptransceiver.mid) {
    // 在这里添加polyfill实现
    console.log('加载RTCRtpTransceiver.mid polyfill');
}
```

