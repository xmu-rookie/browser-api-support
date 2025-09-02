# MediaStreamTrack.unmute_event API 兼容性数据

## 基本信息

- **API名称**: `MediaStreamTrack.unmute_event`
- **MDN文档**: [MediaStreamTrack.unmute_event](https://developer.mozilla.org/docs/Web/API/MediaStreamTrack/unmute_event)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#event-mediastreamtrack-unmute)
- **标签**: `web-features:media-capture`
- **描述**: `unmute` event

## 使用示例

### 基本用法

```javascript
// MediaStreamTrack.unmute_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaStreamTrack.unmute_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 26 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 59 |  |
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

- **支持版本**: 26

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 59

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaStreamTrack.unmute_event是否支持
function isMediaStreamTrackUnmute_eventSupported() {
    return 'unmute_event' in mediastreamtrack && typeof mediastreamtrack.unmute_event === 'function';
}

if (isMediaStreamTrackUnmute_eventSupported()) {
    console.log('MediaStreamTrack.unmute_event 支持');
    // 使用MediaStreamTrack.unmute_event
} else {
    console.log('MediaStreamTrack.unmute_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaStreamTrack.unmute_event polyfill
if (!mediastreamtrack.unmute_event) {
    // 在这里添加polyfill实现
    console.log('加载MediaStreamTrack.unmute_event polyfill');
}
```

