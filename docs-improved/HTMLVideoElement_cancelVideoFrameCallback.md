# HTMLVideoElement.cancelVideoFrameCallback API 兼容性数据

## 基本信息

- **API名称**: `HTMLVideoElement.cancelVideoFrameCallback`
- **MDN文档**: [HTMLVideoElement.cancelVideoFrameCallback](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback)
- **规范文档**: [查看规范](https://wicg.github.io/video-rvfc/#dom-htmlvideoelement-cancelvideoframecallback)
- **标签**: `web-features:request-video-frame-callback`

## 使用示例

### 基本用法

```javascript
// HTMLVideoElement.cancelVideoFrameCallback 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLVideoElement.cancelVideoFrameCallback API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 83 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 132 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 83

### Firefox

- **支持版本**: 132

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLVideoElement.cancelVideoFrameCallback是否支持
function isHTMLVideoElementCancelVideoFrameCallbackSupported() {
    return 'cancelVideoFrameCallback' in htmlvideoelement && typeof htmlvideoelement.cancelVideoFrameCallback === 'function';
}

if (isHTMLVideoElementCancelVideoFrameCallbackSupported()) {
    console.log('HTMLVideoElement.cancelVideoFrameCallback 支持');
    // 使用HTMLVideoElement.cancelVideoFrameCallback
} else {
    console.log('HTMLVideoElement.cancelVideoFrameCallback 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLVideoElement.cancelVideoFrameCallback polyfill
if (!htmlvideoelement.cancelVideoFrameCallback) {
    // 在这里添加polyfill实现
    console.log('加载HTMLVideoElement.cancelVideoFrameCallback polyfill');
}
```

