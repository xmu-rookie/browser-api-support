# RTCPeerConnection.getLocalStreams API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.getLocalStreams`
- **MDN文档**: [RTCPeerConnection.getLocalStreams](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/getSenders)

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.getLocalStreams 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.getLocalStreams API');
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
// 检查RTCPeerConnection.getLocalStreams是否支持
function isRTCPeerConnectionGetLocalStreamsSupported() {
    return 'getLocalStreams' in rtcpeerconnection && typeof rtcpeerconnection.getLocalStreams === 'function';
}

if (isRTCPeerConnectionGetLocalStreamsSupported()) {
    console.log('RTCPeerConnection.getLocalStreams 支持');
    // 使用RTCPeerConnection.getLocalStreams
} else {
    console.log('RTCPeerConnection.getLocalStreams 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.getLocalStreams polyfill
if (!rtcpeerconnection.getLocalStreams) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.getLocalStreams polyfill');
}
```

