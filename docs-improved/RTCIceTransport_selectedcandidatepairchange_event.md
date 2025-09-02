# RTCIceTransport.selectedcandidatepairchange_event API 兼容性数据

## 基本信息

- **API名称**: `RTCIceTransport.selectedcandidatepairchange_event`
- **MDN文档**: [RTCIceTransport.selectedcandidatepairchange_event](https://developer.mozilla.org/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#event-icetransport-selectedcandidatepairchange,https://w3c.github.io/webrtc-pc/#dom-rtcicetransport-onselectedcandidatepairchange)
- **标签**: `web-features:webrtc`
- **描述**: `selectedcandidatepairchange` event

## 使用示例

### 基本用法

```javascript
// RTCIceTransport.selectedcandidatepairchange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCIceTransport.selectedcandidatepairchange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 75 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 75

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCIceTransport.selectedcandidatepairchange_event是否支持
function isRTCIceTransportSelectedcandidatepairchange_eventSupported() {
    return 'selectedcandidatepairchange_event' in rtcicetransport && typeof rtcicetransport.selectedcandidatepairchange_event === 'function';
}

if (isRTCIceTransportSelectedcandidatepairchange_eventSupported()) {
    console.log('RTCIceTransport.selectedcandidatepairchange_event 支持');
    // 使用RTCIceTransport.selectedcandidatepairchange_event
} else {
    console.log('RTCIceTransport.selectedcandidatepairchange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCIceTransport.selectedcandidatepairchange_event polyfill
if (!rtcicetransport.selectedcandidatepairchange_event) {
    // 在这里添加polyfill实现
    console.log('加载RTCIceTransport.selectedcandidatepairchange_event polyfill');
}
```

