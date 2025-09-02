# VideoPlaybackQuality API 兼容性数据

## 基本信息

- **API名称**: `VideoPlaybackQuality`
- **MDN文档**: [VideoPlaybackQuality](https://developer.mozilla.org/docs/Web/API/VideoPlaybackQuality)
- **规范文档**: [查看规范](https://w3c.github.io/media-playback-quality/#videoplaybackquality-interface)
- **标签**: `web-features:media-playback-quality`

## 使用示例

### 基本用法

```javascript
// VideoPlaybackQuality 使用示例
// 请查阅MDN文档了解具体用法
console.log('VideoPlaybackQuality API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 23 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 42 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 | Only works on Windows 8+. |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 12.2 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 4.4.3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 23

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

### WebView Android

- **支持版本**: 4.4.3

## 兼容性检查代码

### 特性检测

```javascript
// 检查VideoPlaybackQuality是否支持
function isVideoPlaybackQualitySupported() {
    return 'VideoPlaybackQuality' in window || typeof VideoPlaybackQuality !== 'undefined';
}

if (isVideoPlaybackQualitySupported()) {
    console.log('VideoPlaybackQuality 支持');
    // 使用VideoPlaybackQuality
} else {
    console.log('VideoPlaybackQuality 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VideoPlaybackQuality polyfill
if (!window.VideoPlaybackQuality) {
    // 在这里添加polyfill实现
    console.log('加载VideoPlaybackQuality polyfill');
}
```

