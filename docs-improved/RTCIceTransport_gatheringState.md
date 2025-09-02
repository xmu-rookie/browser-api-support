# RTCIceTransport.gatheringState API 兼容性数据

## 基本信息

- **API名称**: `RTCIceTransport.gatheringState`
- **MDN文档**: [RTCIceTransport.gatheringState](https://developer.mozilla.org/docs/Web/API/RTCIceTransport/gatheringState)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-icetransport-gatheringstate)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCIceTransport.gatheringState 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCIceTransport.gatheringState API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 75 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 125 |  |
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

- **支持版本**: 75

### Firefox

- **支持版本**: 125

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCIceTransport.gatheringState是否支持
function isRTCIceTransportGatheringStateSupported() {
    return 'gatheringState' in rtcicetransport && typeof rtcicetransport.gatheringState === 'function';
}

if (isRTCIceTransportGatheringStateSupported()) {
    console.log('RTCIceTransport.gatheringState 支持');
    // 使用RTCIceTransport.gatheringState
} else {
    console.log('RTCIceTransport.gatheringState 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCIceTransport.gatheringState polyfill
if (!rtcicetransport.gatheringState) {
    // 在这里添加polyfill实现
    console.log('加载RTCIceTransport.gatheringState polyfill');
}
```

