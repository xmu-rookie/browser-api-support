# RTCIceCandidate API 兼容性数据

## 基本信息

- **API名称**: `RTCIceCandidate`
- **MDN文档**: [RTCIceCandidate](https://developer.mozilla.org/docs/Web/API/RTCIceCandidate)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCIceCandidate 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCIceCandidate API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 23 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
| Firefox | 未知 |  |
| Firefox Android | 未知 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 23

### Edge

- **支持版本**: 15

### Firefox


### Firefox Android


### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCIceCandidate是否支持
function isRTCIceCandidateSupported() {
    return 'RTCIceCandidate' in window || typeof RTCIceCandidate !== 'undefined';
}

if (isRTCIceCandidateSupported()) {
    console.log('RTCIceCandidate 支持');
    // 使用RTCIceCandidate
} else {
    console.log('RTCIceCandidate 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCIceCandidate polyfill
if (!window.RTCIceCandidate) {
    // 在这里添加polyfill实现
    console.log('加载RTCIceCandidate polyfill');
}
```

