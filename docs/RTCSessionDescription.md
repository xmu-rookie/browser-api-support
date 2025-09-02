# RTCSessionDescription API 兼容性数据

## 基本信息

- **API名称**: `RTCSessionDescription`
- **MDN文档**: [RTCSessionDescription](https://developer.mozilla.org/docs/Web/API/RTCSessionDescription)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#rtcsessiondescription-class)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCSessionDescription 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCSessionDescription API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 23 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
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

- **支持版本**: 23

### Edge

- **支持版本**: 15

### Firefox


### Firefox Android


### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCSessionDescription是否支持
function isRTCSessionDescriptionSupported() {
    return 'RTCSessionDescription' in window || typeof RTCSessionDescription !== 'undefined';
}

if (isRTCSessionDescriptionSupported()) {
    console.log('RTCSessionDescription 支持');
    // 使用RTCSessionDescription
} else {
    console.log('RTCSessionDescription 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCSessionDescription polyfill
if (!window.RTCSessionDescription) {
    // 在这里添加polyfill实现
    console.log('加载RTCSessionDescription polyfill');
}
```

