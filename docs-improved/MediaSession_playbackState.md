# MediaSession.playbackState API 兼容性数据

## 基本信息

- **API名称**: `MediaSession.playbackState`
- **MDN文档**: [MediaSession.playbackState](https://developer.mozilla.org/docs/Web/API/MediaSession/playbackState)
- **规范文档**: [查看规范](https://w3c.github.io/mediasession/#dom-mediasession-playbackstate)
- **标签**: `web-features:media-session`

## 使用示例

### 基本用法

```javascript
// MediaSession.playbackState 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaSession.playbackState API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 73 |  |
| Chrome Android | 57 |  |
| Edge | 同主版本 |  |
| Firefox | 82 |  |
| Firefox Android | 82 | Firefox exposes the API, but does not provide a corresponding user-facing media control interface. |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 73

### Chrome Android

- **支持版本**: 57

### Firefox

- **支持版本**: 82

### Firefox Android

- **支持版本**: 82
- **部分实现**: 是
- **注意事项**:
  - Firefox exposes the API, but does not provide a corresponding user-facing media control interface.

### Safari

- **支持版本**: 15

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaSession.playbackState是否支持
function isMediaSessionPlaybackStateSupported() {
    return 'playbackState' in mediasession && typeof mediasession.playbackState === 'function';
}

if (isMediaSessionPlaybackStateSupported()) {
    console.log('MediaSession.playbackState 支持');
    // 使用MediaSession.playbackState
} else {
    console.log('MediaSession.playbackState 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaSession.playbackState polyfill
if (!mediasession.playbackState) {
    // 在这里添加polyfill实现
    console.log('加载MediaSession.playbackState polyfill');
}
```

