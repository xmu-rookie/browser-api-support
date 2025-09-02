# RTCIceTransport.gatheringstatechange_event API 兼容性数据

## 基本信息

- **API名称**: `RTCIceTransport.gatheringstatechange_event`
- **MDN文档**: [RTCIceTransport.gatheringstatechange_event](https://developer.mozilla.org/docs/Web/API/RTCIceTransport/gatheringstatechange_event)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#event-icetransport-gatheringstatechange,https://w3c.github.io/webrtc-pc/#dom-rtcicetransport-ongatheringstatechange)
- **标签**: `web-features:webrtc`
- **描述**: `gatheringstatechange` event

## 使用示例

### 基本用法

```javascript
// RTCIceTransport.gatheringstatechange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCIceTransport.gatheringstatechange_event API');
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
| Safari | 15.4 |  |
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

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCIceTransport.gatheringstatechange_event是否支持
function isRTCIceTransportGatheringstatechange_eventSupported() {
    return 'gatheringstatechange_event' in rtcicetransport && typeof rtcicetransport.gatheringstatechange_event === 'function';
}

if (isRTCIceTransportGatheringstatechange_eventSupported()) {
    console.log('RTCIceTransport.gatheringstatechange_event 支持');
    // 使用RTCIceTransport.gatheringstatechange_event
} else {
    console.log('RTCIceTransport.gatheringstatechange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCIceTransport.gatheringstatechange_event polyfill
if (!rtcicetransport.gatheringstatechange_event) {
    // 在这里添加polyfill实现
    console.log('加载RTCIceTransport.gatheringstatechange_event polyfill');
}
```

