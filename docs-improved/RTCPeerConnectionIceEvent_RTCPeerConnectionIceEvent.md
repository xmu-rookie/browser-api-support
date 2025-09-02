# RTCPeerConnectionIceEvent.RTCPeerConnectionIceEvent API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnectionIceEvent.RTCPeerConnectionIceEvent`
- **MDN文档**: [RTCPeerConnectionIceEvent.RTCPeerConnectionIceEvent](https://developer.mozilla.org/docs/Web/API/RTCPeerConnectionIceEvent/RTCPeerConnectionIceEvent)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcpeerconnectioniceevent-constructor)
- **标签**: `web-features:webrtc`
- **描述**: `RTCPeerConnectionIceEvent()` constructor

## 使用示例

### 基本用法

```javascript
// RTCPeerConnectionIceEvent.RTCPeerConnectionIceEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnectionIceEvent.RTCPeerConnectionIceEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 56 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
| Firefox | 24 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 12 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 56

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 24

### Safari

- **支持版本**: 12

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnectionIceEvent.RTCPeerConnectionIceEvent是否支持
function isRTCPeerConnectionIceEventRTCPeerConnectionIceEventSupported() {
    return 'RTCPeerConnectionIceEvent' in rtcpeerconnectioniceevent && typeof rtcpeerconnectioniceevent.RTCPeerConnectionIceEvent === 'function';
}

if (isRTCPeerConnectionIceEventRTCPeerConnectionIceEventSupported()) {
    console.log('RTCPeerConnectionIceEvent.RTCPeerConnectionIceEvent 支持');
    // 使用RTCPeerConnectionIceEvent.RTCPeerConnectionIceEvent
} else {
    console.log('RTCPeerConnectionIceEvent.RTCPeerConnectionIceEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnectionIceEvent.RTCPeerConnectionIceEvent polyfill
if (!rtcpeerconnectioniceevent.RTCPeerConnectionIceEvent) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnectionIceEvent.RTCPeerConnectionIceEvent polyfill');
}
```

