# RTCPeerConnection.createAnswer.returns_promise API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.createAnswer.returns_promise`
- **标签**: `web-features:webrtc`
- **描述**: Returns a `Promise`

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.createAnswer.returns_promise 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.createAnswer.returns_promise API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 51 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 37 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 43 |  |
| Opera Android | 43 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 6.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 51

### Firefox

- **支持版本**: 37

### Opera

- **支持版本**: 43

### Opera Android

- **支持版本**: 43

### Safari

- **支持版本**: 11

### Samsung Internet

- **支持版本**: 6.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection.createAnswer.returns_promise是否支持
function isRTCPeerConnectionCreateAnswerSupported() {
    return 'createAnswer' in rtcpeerconnection && typeof rtcpeerconnection.createAnswer === 'function';
}

if (isRTCPeerConnectionCreateAnswerSupported()) {
    console.log('RTCPeerConnection.createAnswer.returns_promise 支持');
    // 使用RTCPeerConnection.createAnswer.returns_promise
} else {
    console.log('RTCPeerConnection.createAnswer.returns_promise 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.createAnswer.returns_promise polyfill
if (!rtcpeerconnection.createAnswer) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.createAnswer.returns_promise polyfill');
}
```

