# RTCEncodedVideoFrame.type API 兼容性数据

## 基本信息

- **API名称**: `RTCEncodedVideoFrame.type`
- **MDN文档**: [RTCEncodedVideoFrame.type](https://developer.mozilla.org/docs/Web/API/RTCEncodedVideoFrame/type)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-encoded-transform/#dom-rtcencodedvideoframe-type)
- **标签**: `web-features:webrtc-encoded-transform`

## 使用示例

### 基本用法

```javascript
// RTCEncodedVideoFrame.type 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCEncodedVideoFrame.type API');
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
// 检查RTCEncodedVideoFrame.type是否支持
function isRTCEncodedVideoFrameTypeSupported() {
    return 'type' in rtcencodedvideoframe && typeof rtcencodedvideoframe.type === 'function';
}

if (isRTCEncodedVideoFrameTypeSupported()) {
    console.log('RTCEncodedVideoFrame.type 支持');
    // 使用RTCEncodedVideoFrame.type
} else {
    console.log('RTCEncodedVideoFrame.type 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCEncodedVideoFrame.type polyfill
if (!rtcencodedvideoframe.type) {
    // 在这里添加polyfill实现
    console.log('加载RTCEncodedVideoFrame.type polyfill');
}
```

