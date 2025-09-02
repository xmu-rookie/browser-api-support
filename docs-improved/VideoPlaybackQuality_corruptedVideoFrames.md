# VideoPlaybackQuality.corruptedVideoFrames API 兼容性数据

## 基本信息

- **API名称**: `VideoPlaybackQuality.corruptedVideoFrames`
- **MDN文档**: [VideoPlaybackQuality.corruptedVideoFrames](https://developer.mozilla.org/docs/Web/API/VideoPlaybackQuality/corruptedVideoFrames)
- **规范文档**: [查看规范](https://w3c.github.io/media-playback-quality/#dom-videoplaybackquality-corruptedvideoframes)

## 使用示例

### 基本用法

```javascript
// VideoPlaybackQuality.corruptedVideoFrames 使用示例
// 请查阅MDN文档了解具体用法
console.log('VideoPlaybackQuality.corruptedVideoFrames API');
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
- **移除版本**: 73

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
// 检查VideoPlaybackQuality.corruptedVideoFrames是否支持
function isVideoPlaybackQualityCorruptedVideoFramesSupported() {
    return 'corruptedVideoFrames' in videoplaybackquality && typeof videoplaybackquality.corruptedVideoFrames === 'function';
}

if (isVideoPlaybackQualityCorruptedVideoFramesSupported()) {
    console.log('VideoPlaybackQuality.corruptedVideoFrames 支持');
    // 使用VideoPlaybackQuality.corruptedVideoFrames
} else {
    console.log('VideoPlaybackQuality.corruptedVideoFrames 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VideoPlaybackQuality.corruptedVideoFrames polyfill
if (!videoplaybackquality.corruptedVideoFrames) {
    // 在这里添加polyfill实现
    console.log('加载VideoPlaybackQuality.corruptedVideoFrames polyfill');
}
```

