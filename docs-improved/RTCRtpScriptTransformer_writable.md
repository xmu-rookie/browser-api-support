# RTCRtpScriptTransformer.writable API 兼容性数据

## 基本信息

- **API名称**: `RTCRtpScriptTransformer.writable`
- **MDN文档**: [RTCRtpScriptTransformer.writable](https://developer.mozilla.org/docs/Web/API/RTCRtpScriptTransformer/writable)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-encoded-transform/#dom-rtcrtpscripttransformer-writable)
- **标签**: `web-features:webrtc-encoded-transform`

## 使用示例

### 基本用法

```javascript
// RTCRtpScriptTransformer.writable 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCRtpScriptTransformer.writable API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 117 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 117

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCRtpScriptTransformer.writable是否支持
function isRTCRtpScriptTransformerWritableSupported() {
    return 'writable' in rtcrtpscripttransformer && typeof rtcrtpscripttransformer.writable === 'function';
}

if (isRTCRtpScriptTransformerWritableSupported()) {
    console.log('RTCRtpScriptTransformer.writable 支持');
    // 使用RTCRtpScriptTransformer.writable
} else {
    console.log('RTCRtpScriptTransformer.writable 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCRtpScriptTransformer.writable polyfill
if (!rtcrtpscripttransformer.writable) {
    // 在这里添加polyfill实现
    console.log('加载RTCRtpScriptTransformer.writable polyfill');
}
```

