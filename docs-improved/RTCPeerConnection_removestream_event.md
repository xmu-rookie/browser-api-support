# RTCPeerConnection.removestream_event API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.removestream_event`
- **MDN文档**: [RTCPeerConnection.removestream_event](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/removestream_event)
- **描述**: `removestream` event

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.removestream_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.removestream_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 24 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
| Firefox | 22 |  |
| Firefox Android | 24 |  |
| Oculus | 同主版本 |  |
| Opera | 15 |  |
| Opera Android | 14 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 1.5 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 24

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 22
- **移除版本**: 60

### Firefox Android

- **支持版本**: 24
- **移除版本**: 60

### Opera

- **支持版本**: 15

### Opera Android

- **支持版本**: 14

### Safari

- **支持版本**: 不支持

### Samsung Internet

- **支持版本**: 1.5

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection.removestream_event是否支持
function isRTCPeerConnectionRemovestream_eventSupported() {
    return 'removestream_event' in rtcpeerconnection && typeof rtcpeerconnection.removestream_event === 'function';
}

if (isRTCPeerConnectionRemovestream_eventSupported()) {
    console.log('RTCPeerConnection.removestream_event 支持');
    // 使用RTCPeerConnection.removestream_event
} else {
    console.log('RTCPeerConnection.removestream_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.removestream_event polyfill
if (!rtcpeerconnection.removestream_event) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.removestream_event polyfill');
}
```

