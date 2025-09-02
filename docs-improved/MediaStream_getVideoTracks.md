# MediaStream.getVideoTracks API 兼容性数据

## 基本信息

- **API名称**: `MediaStream.getVideoTracks`
- **MDN文档**: [MediaStream.getVideoTracks](https://developer.mozilla.org/docs/Web/API/MediaStream/getVideoTracks)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#dom-mediastream-getvideotracks)
- **标签**: `web-features:media-capture`

## 使用示例

### 基本用法

```javascript
// MediaStream.getVideoTracks 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaStream.getVideoTracks API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 26 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 22 | Before Firefox 64, this method returned an array of `VideoStreamTrack` objects. However, `MediaStrea... |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 37 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 26

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 22
- **注意事项**:
  - Before Firefox 64, this method returned an array of `VideoStreamTrack` objects. However, `MediaStreamTrack` has now subsumed that interface's functionality.

### Safari

- **支持版本**: 11

### WebView Android

- **支持版本**: 37

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaStream.getVideoTracks是否支持
function isMediaStreamGetVideoTracksSupported() {
    return 'getVideoTracks' in mediastream && typeof mediastream.getVideoTracks === 'function';
}

if (isMediaStreamGetVideoTracksSupported()) {
    console.log('MediaStream.getVideoTracks 支持');
    // 使用MediaStream.getVideoTracks
} else {
    console.log('MediaStream.getVideoTracks 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaStream.getVideoTracks polyfill
if (!mediastream.getVideoTracks) {
    // 在这里添加polyfill实现
    console.log('加载MediaStream.getVideoTracks polyfill');
}
```

