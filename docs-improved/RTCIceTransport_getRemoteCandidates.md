# RTCIceTransport.getRemoteCandidates API 兼容性数据

## 基本信息

- **API名称**: `RTCIceTransport.getRemoteCandidates`
- **MDN文档**: [RTCIceTransport.getRemoteCandidates](https://developer.mozilla.org/docs/Web/API/RTCIceTransport/getRemoteCandidates)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcicetransport-getremotecandidates)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCIceTransport.getRemoteCandidates 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCIceTransport.getRemoteCandidates API');
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
// 检查RTCIceTransport.getRemoteCandidates是否支持
function isRTCIceTransportGetRemoteCandidatesSupported() {
    return 'getRemoteCandidates' in rtcicetransport && typeof rtcicetransport.getRemoteCandidates === 'function';
}

if (isRTCIceTransportGetRemoteCandidatesSupported()) {
    console.log('RTCIceTransport.getRemoteCandidates 支持');
    // 使用RTCIceTransport.getRemoteCandidates
} else {
    console.log('RTCIceTransport.getRemoteCandidates 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCIceTransport.getRemoteCandidates polyfill
if (!rtcicetransport.getRemoteCandidates) {
    // 在这里添加polyfill实现
    console.log('加载RTCIceTransport.getRemoteCandidates polyfill');
}
```

