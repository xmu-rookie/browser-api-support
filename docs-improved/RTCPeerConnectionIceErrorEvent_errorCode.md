# RTCPeerConnectionIceErrorEvent.errorCode API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnectionIceErrorEvent.errorCode`
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcpeerconnectioniceerrorevent-errorcode)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCPeerConnectionIceErrorEvent.errorCode 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnectionIceErrorEvent.errorCode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 77 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 77

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnectionIceErrorEvent.errorCode是否支持
function isRTCPeerConnectionIceErrorEventErrorCodeSupported() {
    return 'errorCode' in rtcpeerconnectioniceerrorevent && typeof rtcpeerconnectioniceerrorevent.errorCode === 'function';
}

if (isRTCPeerConnectionIceErrorEventErrorCodeSupported()) {
    console.log('RTCPeerConnectionIceErrorEvent.errorCode 支持');
    // 使用RTCPeerConnectionIceErrorEvent.errorCode
} else {
    console.log('RTCPeerConnectionIceErrorEvent.errorCode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnectionIceErrorEvent.errorCode polyfill
if (!rtcpeerconnectioniceerrorevent.errorCode) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnectionIceErrorEvent.errorCode polyfill');
}
```

