# RTCPeerConnection API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection`
- **MDN文档**: [RTCPeerConnection](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#interface-definition)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 未知 |  |
| Chrome Android | 同主版本 |  |
| Edge | 未知 |  |
| Firefox | 未知 |  |
| Firefox Android | 未知 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome


### Edge


### Firefox


### Firefox Android


### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection是否支持
function isRTCPeerConnectionSupported() {
    return 'RTCPeerConnection' in window || typeof RTCPeerConnection !== 'undefined';
}

if (isRTCPeerConnectionSupported()) {
    console.log('RTCPeerConnection 支持');
    // 使用RTCPeerConnection
} else {
    console.log('RTCPeerConnection 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection polyfill
if (!window.RTCPeerConnection) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection polyfill');
}
```

