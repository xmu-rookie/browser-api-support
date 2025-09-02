# MediaDevices.getUserMedia API 兼容性数据

## 基本信息

- **API名称**: `MediaDevices.getUserMedia`
- **MDN文档**: [MediaDevices.getUserMedia](https://developer.mozilla.org/docs/Web/API/MediaDevices/getUserMedia)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#dom-mediadevices-getusermedia)
- **标签**: `web-features:media-capture`

## 使用示例

### 基本用法

```javascript
// MediaDevices.getUserMedia 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaDevices.getUserMedia API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 53 | If you need this capability before version 53, refer to `navigator.webkitGetUserMedia`, a prefixed f... |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 36 | If you need this capability before version 36, refer to `navigator.mozGetUserMedia`, a prefixed form... |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 6.0 |  |
| WebView Android | 53 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 53
- **注意事项**:
  - If you need this capability before version 53, refer to `navigator.webkitGetUserMedia`, a prefixed form of the deprecated [`navigator.getUserMedia`](https://developer.mozilla.org/docs/Web/API/Navigator/getUserMedia) API.

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 36
- **注意事项**:
  - If you need this capability before version 36, refer to `navigator.mozGetUserMedia`, a prefixed form of the deprecated [`navigator.getUserMedia`](https://developer.mozilla.org/docs/Web/API/Navigator/getUserMedia) API.
  - Before Firefox 55, `getUserMedia()` incorrectly returns `NotSupportedError` when the list of constraints specified is empty, or has all constraints set to `false`. Starting in Firefox 55, this situation now correctly calls the failure handler with a `TypeError`.
  - When using the Firefox-specific `video` constraint called `mediaSource` to request display capture, Firefox 66 and later consider values of `screen` and `window` to both cause a list of screens _and_ windows to be shown.
  - Starting in Firefox 66, `getUserMedia()` can no longer be used in sandboxed `<iframe>`s or `data` URLs entered in the address bar by the user.

### Safari

- **支持版本**: 11

### Samsung Internet

- **支持版本**: 6.0

### WebView Android

- **支持版本**: 53

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaDevices.getUserMedia是否支持
function isMediaDevicesGetUserMediaSupported() {
    return 'getUserMedia' in mediadevices && typeof mediadevices.getUserMedia === 'function';
}

if (isMediaDevicesGetUserMediaSupported()) {
    console.log('MediaDevices.getUserMedia 支持');
    // 使用MediaDevices.getUserMedia
} else {
    console.log('MediaDevices.getUserMedia 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaDevices.getUserMedia polyfill
if (!mediadevices.getUserMedia) {
    // 在这里添加polyfill实现
    console.log('加载MediaDevices.getUserMedia polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **secure_context_required**: Secure context required

