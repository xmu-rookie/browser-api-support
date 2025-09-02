# RTCPeerConnection.getRemoteStreams API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.getRemoteStreams`
- **MDN文档**: [RTCPeerConnection.getRemoteStreams](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/getReceivers)

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.getRemoteStreams 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.getRemoteStreams API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 27 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
| Firefox | 24 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 15 |  |
| Opera Android | 15 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 1.5 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 27

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 24

### Opera

- **支持版本**: 15

### Opera Android

- **支持版本**: 15

### Safari

- **支持版本**: 11
- **移除版本**: 12

### Samsung Internet

- **支持版本**: 1.5

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection.getRemoteStreams是否支持
function isRTCPeerConnectionGetRemoteStreamsSupported() {
    return 'getRemoteStreams' in rtcpeerconnection && typeof rtcpeerconnection.getRemoteStreams === 'function';
}

if (isRTCPeerConnectionGetRemoteStreamsSupported()) {
    console.log('RTCPeerConnection.getRemoteStreams 支持');
    // 使用RTCPeerConnection.getRemoteStreams
} else {
    console.log('RTCPeerConnection.getRemoteStreams 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.getRemoteStreams polyfill
if (!rtcpeerconnection.getRemoteStreams) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.getRemoteStreams polyfill');
}
```

