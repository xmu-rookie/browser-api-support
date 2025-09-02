# MediaStreamTrackEvent API 兼容性数据

## 基本信息

- **API名称**: `MediaStreamTrackEvent`
- **MDN文档**: [MediaStreamTrackEvent](https://developer.mozilla.org/docs/Web/API/MediaStreamTrackEvent)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#mediastreamtrackevent)
- **标签**: `web-features:media-capture`

## 使用示例

### 基本用法

```javascript
// MediaStreamTrackEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaStreamTrackEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 26 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 50 |  |
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

- **支持版本**: 50

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaStreamTrackEvent是否支持
function isMediaStreamTrackEventSupported() {
    return 'MediaStreamTrackEvent' in window || typeof MediaStreamTrackEvent !== 'undefined';
}

if (isMediaStreamTrackEventSupported()) {
    console.log('MediaStreamTrackEvent 支持');
    // 使用MediaStreamTrackEvent
} else {
    console.log('MediaStreamTrackEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaStreamTrackEvent polyfill
if (!window.MediaStreamTrackEvent) {
    // 在这里添加polyfill实现
    console.log('加载MediaStreamTrackEvent polyfill');
}
```

