# RTCSessionDescription.sdp API 兼容性数据

## 基本信息

- **API名称**: `RTCSessionDescription.sdp`
- **MDN文档**: [RTCSessionDescription.sdp](https://developer.mozilla.org/docs/Web/API/RTCSessionDescription/sdp)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcsessiondescription-sdp)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCSessionDescription.sdp 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCSessionDescription.sdp API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 23 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
| Firefox | 22 |  |
| Firefox Android | 24 |  |
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

- **支持版本**: 23

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 22

### Firefox Android

- **支持版本**: 24

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCSessionDescription.sdp是否支持
function isRTCSessionDescriptionSdpSupported() {
    return 'sdp' in rtcsessiondescription && typeof rtcsessiondescription.sdp === 'function';
}

if (isRTCSessionDescriptionSdpSupported()) {
    console.log('RTCSessionDescription.sdp 支持');
    // 使用RTCSessionDescription.sdp
} else {
    console.log('RTCSessionDescription.sdp 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCSessionDescription.sdp polyfill
if (!rtcsessiondescription.sdp) {
    // 在这里添加polyfill实现
    console.log('加载RTCSessionDescription.sdp polyfill');
}
```

