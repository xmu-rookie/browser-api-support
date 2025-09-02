# RTCEncodedVideoFrame.RTCEncodedVideoFrame API 兼容性数据

## 基本信息

- **API名称**: `RTCEncodedVideoFrame.RTCEncodedVideoFrame`
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-encoded-transform/#dom-rtcencodedvideoframe-constructor)
- **标签**: `web-features:webrtc-encoded-transform`
- **描述**: `RTCEncodedVideoFrame()` constructor

## 使用示例

### 基本用法

```javascript
// RTCEncodedVideoFrame.RTCEncodedVideoFrame 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCEncodedVideoFrame.RTCEncodedVideoFrame API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 127 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 127

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCEncodedVideoFrame.RTCEncodedVideoFrame是否支持
function isRTCEncodedVideoFrameRTCEncodedVideoFrameSupported() {
    return 'RTCEncodedVideoFrame' in rtcencodedvideoframe && typeof rtcencodedvideoframe.RTCEncodedVideoFrame === 'function';
}

if (isRTCEncodedVideoFrameRTCEncodedVideoFrameSupported()) {
    console.log('RTCEncodedVideoFrame.RTCEncodedVideoFrame 支持');
    // 使用RTCEncodedVideoFrame.RTCEncodedVideoFrame
} else {
    console.log('RTCEncodedVideoFrame.RTCEncodedVideoFrame 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCEncodedVideoFrame.RTCEncodedVideoFrame polyfill
if (!rtcencodedvideoframe.RTCEncodedVideoFrame) {
    // 在这里添加polyfill实现
    console.log('加载RTCEncodedVideoFrame.RTCEncodedVideoFrame polyfill');
}
```

