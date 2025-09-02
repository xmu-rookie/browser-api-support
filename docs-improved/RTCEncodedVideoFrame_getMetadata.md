# RTCEncodedVideoFrame.getMetadata API 兼容性数据

## 基本信息

- **API名称**: `RTCEncodedVideoFrame.getMetadata`
- **MDN文档**: [RTCEncodedVideoFrame.getMetadata](https://developer.mozilla.org/docs/Web/API/RTCEncodedVideoFrame/getMetadata)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-encoded-transform/#dom-rtcencodedvideoframe-getmetadata)
- **标签**: `web-features:webrtc-encoded-transform`

## 使用示例

### 基本用法

```javascript
// RTCEncodedVideoFrame.getMetadata 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCEncodedVideoFrame.getMetadata API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 86 |  |
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

- **支持版本**: 86

### Firefox

- **支持版本**: 117

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCEncodedVideoFrame.getMetadata是否支持
function isRTCEncodedVideoFrameGetMetadataSupported() {
    return 'getMetadata' in rtcencodedvideoframe && typeof rtcencodedvideoframe.getMetadata === 'function';
}

if (isRTCEncodedVideoFrameGetMetadataSupported()) {
    console.log('RTCEncodedVideoFrame.getMetadata 支持');
    // 使用RTCEncodedVideoFrame.getMetadata
} else {
    console.log('RTCEncodedVideoFrame.getMetadata 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCEncodedVideoFrame.getMetadata polyfill
if (!rtcencodedvideoframe.getMetadata) {
    // 在这里添加polyfill实现
    console.log('加载RTCEncodedVideoFrame.getMetadata polyfill');
}
```

