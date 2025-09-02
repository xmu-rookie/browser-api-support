# MediaStream.getAudioTracks API 兼容性数据

## 基本信息

- **API名称**: `MediaStream.getAudioTracks`
- **MDN文档**: [MediaStream.getAudioTracks](https://developer.mozilla.org/docs/Web/API/MediaStream/getAudioTracks)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#dom-mediastream-getaudiotracks)
- **标签**: `web-features:media-capture`

## 使用示例

### 基本用法

```javascript
// MediaStream.getAudioTracks 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaStream.getAudioTracks API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 26 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 22 | Before Firefox 64, this method returned an array of `AudioStreamTrack` objects. However, `MediaStrea... |
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
  - Before Firefox 64, this method returned an array of `AudioStreamTrack` objects. However, `MediaStreamTrack` has now subsumed that interface's functionality.

### Safari

- **支持版本**: 11

### WebView Android

- **支持版本**: 37

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaStream.getAudioTracks是否支持
function isMediaStreamGetAudioTracksSupported() {
    return 'getAudioTracks' in mediastream && typeof mediastream.getAudioTracks === 'function';
}

if (isMediaStreamGetAudioTracksSupported()) {
    console.log('MediaStream.getAudioTracks 支持');
    // 使用MediaStream.getAudioTracks
} else {
    console.log('MediaStream.getAudioTracks 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaStream.getAudioTracks polyfill
if (!mediastream.getAudioTracks) {
    // 在这里添加polyfill实现
    console.log('加载MediaStream.getAudioTracks polyfill');
}
```

