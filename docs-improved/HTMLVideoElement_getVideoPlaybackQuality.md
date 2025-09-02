# HTMLVideoElement.getVideoPlaybackQuality API 兼容性数据

## 基本信息

- **API名称**: `HTMLVideoElement.getVideoPlaybackQuality`
- **MDN文档**: [HTMLVideoElement.getVideoPlaybackQuality](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality)
- **规范文档**: [查看规范](https://w3c.github.io/media-playback-quality/#dom-htmlvideoelement-getvideoplaybackquality)
- **标签**: `web-features:media-playback-quality`

## 使用示例

### 基本用法

```javascript
// HTMLVideoElement.getVideoPlaybackQuality 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLVideoElement.getVideoPlaybackQuality API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 80 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 42 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 | Only works on Windows 8+. |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 12.2 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 80

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 42

### Internet Explorer

- **支持版本**: 11
- **注意事项**:
  - Only works on Windows 8+.

### Safari

- **支持版本**: 8

### Safari iOS

- **支持版本**: 12.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLVideoElement.getVideoPlaybackQuality是否支持
function isHTMLVideoElementGetVideoPlaybackQualitySupported() {
    return 'getVideoPlaybackQuality' in htmlvideoelement && typeof htmlvideoelement.getVideoPlaybackQuality === 'function';
}

if (isHTMLVideoElementGetVideoPlaybackQualitySupported()) {
    console.log('HTMLVideoElement.getVideoPlaybackQuality 支持');
    // 使用HTMLVideoElement.getVideoPlaybackQuality
} else {
    console.log('HTMLVideoElement.getVideoPlaybackQuality 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLVideoElement.getVideoPlaybackQuality polyfill
if (!htmlvideoelement.getVideoPlaybackQuality) {
    // 在这里添加polyfill实现
    console.log('加载HTMLVideoElement.getVideoPlaybackQuality polyfill');
}
```

