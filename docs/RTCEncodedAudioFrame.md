# RTCEncodedAudioFrame API 兼容性数据

## 基本信息

- **API名称**: `RTCEncodedAudioFrame`
- **MDN文档**: [RTCEncodedAudioFrame](https://developer.mozilla.org/docs/Web/API/RTCEncodedAudioFrame)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-encoded-transform/#rtcencodedaudioframe)
- **标签**: `web-features:webrtc-encoded-transform`

## 使用示例

### 基本用法

```javascript
// RTCEncodedAudioFrame 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCEncodedAudioFrame API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 86 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 117 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
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
// 检查RTCEncodedAudioFrame是否支持
function isRTCEncodedAudioFrameSupported() {
    return 'RTCEncodedAudioFrame' in window || typeof RTCEncodedAudioFrame !== 'undefined';
}

if (isRTCEncodedAudioFrameSupported()) {
    console.log('RTCEncodedAudioFrame 支持');
    // 使用RTCEncodedAudioFrame
} else {
    console.log('RTCEncodedAudioFrame 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCEncodedAudioFrame polyfill
if (!window.RTCEncodedAudioFrame) {
    // 在这里添加polyfill实现
    console.log('加载RTCEncodedAudioFrame polyfill');
}
```

