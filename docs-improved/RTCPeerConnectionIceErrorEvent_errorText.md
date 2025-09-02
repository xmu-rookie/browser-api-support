# RTCPeerConnectionIceErrorEvent.errorText API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnectionIceErrorEvent.errorText`
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcpeerconnectioniceerrorevent-errortext)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCPeerConnectionIceErrorEvent.errorText 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnectionIceErrorEvent.errorText API');
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
// 检查RTCPeerConnectionIceErrorEvent.errorText是否支持
function isRTCPeerConnectionIceErrorEventErrorTextSupported() {
    return 'errorText' in rtcpeerconnectioniceerrorevent && typeof rtcpeerconnectioniceerrorevent.errorText === 'function';
}

if (isRTCPeerConnectionIceErrorEventErrorTextSupported()) {
    console.log('RTCPeerConnectionIceErrorEvent.errorText 支持');
    // 使用RTCPeerConnectionIceErrorEvent.errorText
} else {
    console.log('RTCPeerConnectionIceErrorEvent.errorText 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnectionIceErrorEvent.errorText polyfill
if (!rtcpeerconnectioniceerrorevent.errorText) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnectionIceErrorEvent.errorText polyfill');
}
```

