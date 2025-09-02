# MediaStreamTrack.muted API 兼容性数据

## 基本信息

- **API名称**: `MediaStreamTrack.muted`
- **MDN文档**: [MediaStreamTrack.muted](https://developer.mozilla.org/docs/Web/API/MediaStreamTrack/muted)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#dom-mediastreamtrack-muted)
- **标签**: `web-features:media-capture`

## 使用示例

### 基本用法

```javascript
// MediaStreamTrack.muted 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaStreamTrack.muted API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 38 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 59 | Does not currently track the microphone's muted state from the operating system, see [bug 1739163](h... |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 38

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 59
- **部分实现**: 是
- **注意事项**:
  - Does not currently track the microphone's muted state from the operating system, see [bug 1739163](https://bugzil.la/1739163).

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaStreamTrack.muted是否支持
function isMediaStreamTrackMutedSupported() {
    return 'muted' in mediastreamtrack && typeof mediastreamtrack.muted === 'function';
}

if (isMediaStreamTrackMutedSupported()) {
    console.log('MediaStreamTrack.muted 支持');
    // 使用MediaStreamTrack.muted
} else {
    console.log('MediaStreamTrack.muted 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaStreamTrack.muted polyfill
if (!mediastreamtrack.muted) {
    // 在这里添加polyfill实现
    console.log('加载MediaStreamTrack.muted polyfill');
}
```

