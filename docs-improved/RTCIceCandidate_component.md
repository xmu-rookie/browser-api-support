# RTCIceCandidate.component API 兼容性数据

## 基本信息

- **API名称**: `RTCIceCandidate.component`
- **MDN文档**: [RTCIceCandidate.component](https://developer.mozilla.org/docs/Web/API/RTCIceCandidate/component)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcicecandidate-component)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCIceCandidate.component 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCIceCandidate.component API');
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
// 检查RTCIceCandidate.component是否支持
function isRTCIceCandidateComponentSupported() {
    return 'component' in rtcicecandidate && typeof rtcicecandidate.component === 'function';
}

if (isRTCIceCandidateComponentSupported()) {
    console.log('RTCIceCandidate.component 支持');
    // 使用RTCIceCandidate.component
} else {
    console.log('RTCIceCandidate.component 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCIceCandidate.component polyfill
if (!rtcicecandidate.component) {
    // 在这里添加polyfill实现
    console.log('加载RTCIceCandidate.component polyfill');
}
```

