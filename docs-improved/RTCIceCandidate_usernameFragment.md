# RTCIceCandidate.usernameFragment API 兼容性数据

## 基本信息

- **API名称**: `RTCIceCandidate.usernameFragment`
- **MDN文档**: [RTCIceCandidate.usernameFragment](https://developer.mozilla.org/docs/Web/API/RTCIceCandidate/usernameFragment)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcicecandidate-usernamefragment)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCIceCandidate.usernameFragment 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCIceCandidate.usernameFragment API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 74 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 67 | Before Firefox 126, the property was not read-only. |
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

- **支持版本**: 67
- **注意事项**:
  - Before Firefox 126, the property was not read-only.

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCIceCandidate.usernameFragment是否支持
function isRTCIceCandidateUsernameFragmentSupported() {
    return 'usernameFragment' in rtcicecandidate && typeof rtcicecandidate.usernameFragment === 'function';
}

if (isRTCIceCandidateUsernameFragmentSupported()) {
    console.log('RTCIceCandidate.usernameFragment 支持');
    // 使用RTCIceCandidate.usernameFragment
} else {
    console.log('RTCIceCandidate.usernameFragment 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCIceCandidate.usernameFragment polyfill
if (!rtcicecandidate.usernameFragment) {
    // 在这里添加polyfill实现
    console.log('加载RTCIceCandidate.usernameFragment polyfill');
}
```

