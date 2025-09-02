# RTCIceCandidate.toJSON API 兼容性数据

## 基本信息

- **API名称**: `RTCIceCandidate.toJSON`
- **MDN文档**: [RTCIceCandidate.toJSON](https://developer.mozilla.org/docs/Web/API/RTCIceCandidate/toJSON)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcicecandidate-tojson)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCIceCandidate.toJSON 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCIceCandidate.toJSON API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 43 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
| Firefox | 27 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 43

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 27

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCIceCandidate.toJSON是否支持
function isRTCIceCandidateToJSONSupported() {
    return 'toJSON' in rtcicecandidate && typeof rtcicecandidate.toJSON === 'function';
}

if (isRTCIceCandidateToJSONSupported()) {
    console.log('RTCIceCandidate.toJSON 支持');
    // 使用RTCIceCandidate.toJSON
} else {
    console.log('RTCIceCandidate.toJSON 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCIceCandidate.toJSON polyfill
if (!rtcicecandidate.toJSON) {
    // 在这里添加polyfill实现
    console.log('加载RTCIceCandidate.toJSON polyfill');
}
```

