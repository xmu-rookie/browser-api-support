# VideoPlaybackQuality.totalFrameDelay API 兼容性数据

## 基本信息

- **API名称**: `VideoPlaybackQuality.totalFrameDelay`
- **MDN文档**: [VideoPlaybackQuality.totalFrameDelay](https://developer.mozilla.org/docs/Web/API/VideoPlaybackQuality/totalFrameDelay)

## 使用示例

### 基本用法

```javascript
// VideoPlaybackQuality.totalFrameDelay 使用示例
// 请查阅MDN文档了解具体用法
console.log('VideoPlaybackQuality.totalFrameDelay API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 不支持

### Edge

- **支持版本**: 12
- **移除版本**: 79

### Firefox

- **支持版本**: 不支持

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
// 检查VideoPlaybackQuality.totalFrameDelay是否支持
function isVideoPlaybackQualityTotalFrameDelaySupported() {
    return 'totalFrameDelay' in videoplaybackquality && typeof videoplaybackquality.totalFrameDelay === 'function';
}

if (isVideoPlaybackQualityTotalFrameDelaySupported()) {
    console.log('VideoPlaybackQuality.totalFrameDelay 支持');
    // 使用VideoPlaybackQuality.totalFrameDelay
} else {
    console.log('VideoPlaybackQuality.totalFrameDelay 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VideoPlaybackQuality.totalFrameDelay polyfill
if (!videoplaybackquality.totalFrameDelay) {
    // 在这里添加polyfill实现
    console.log('加载VideoPlaybackQuality.totalFrameDelay polyfill');
}
```

