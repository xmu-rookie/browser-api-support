# BrowserCaptureMediaStreamTrack.cropTo API 兼容性数据

## 基本信息

- **API名称**: `BrowserCaptureMediaStreamTrack.cropTo`
- **MDN文档**: [BrowserCaptureMediaStreamTrack.cropTo](https://developer.mozilla.org/docs/Web/API/BrowserCaptureMediaStreamTrack/cropTo)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-region/#dom-browsercapturemediastreamtrack-cropto)
- **标签**: `web-features:region-capture`

## 使用示例

### 基本用法

```javascript
// BrowserCaptureMediaStreamTrack.cropTo 使用示例
// 请查阅MDN文档了解具体用法
console.log('BrowserCaptureMediaStreamTrack.cropTo API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 104 |  |
| Chrome Android | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 104

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查BrowserCaptureMediaStreamTrack.cropTo是否支持
function isBrowserCaptureMediaStreamTrackCropToSupported() {
    return 'cropTo' in browsercapturemediastreamtrack && typeof browsercapturemediastreamtrack.cropTo === 'function';
}

if (isBrowserCaptureMediaStreamTrackCropToSupported()) {
    console.log('BrowserCaptureMediaStreamTrack.cropTo 支持');
    // 使用BrowserCaptureMediaStreamTrack.cropTo
} else {
    console.log('BrowserCaptureMediaStreamTrack.cropTo 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BrowserCaptureMediaStreamTrack.cropTo polyfill
if (!browsercapturemediastreamtrack.cropTo) {
    // 在这里添加polyfill实现
    console.log('加载BrowserCaptureMediaStreamTrack.cropTo polyfill');
}
```

