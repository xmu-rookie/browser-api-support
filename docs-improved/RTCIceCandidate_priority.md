# RTCIceCandidate.priority API 兼容性数据

## 基本信息

- **API名称**: `RTCIceCandidate.priority`
- **MDN文档**: [RTCIceCandidate.priority](https://developer.mozilla.org/docs/Web/API/RTCIceCandidate/priority)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcicecandidate-priority)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCIceCandidate.priority 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCIceCandidate.priority API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 74 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 126 |  |
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

- **支持版本**: 74

### Firefox

- **支持版本**: 126

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCIceCandidate.priority是否支持
function isRTCIceCandidatePrioritySupported() {
    return 'priority' in rtcicecandidate && typeof rtcicecandidate.priority === 'function';
}

if (isRTCIceCandidatePrioritySupported()) {
    console.log('RTCIceCandidate.priority 支持');
    // 使用RTCIceCandidate.priority
} else {
    console.log('RTCIceCandidate.priority 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCIceCandidate.priority polyfill
if (!rtcicecandidate.priority) {
    // 在这里添加polyfill实现
    console.log('加载RTCIceCandidate.priority polyfill');
}
```

