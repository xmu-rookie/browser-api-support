# MediaStreamTrack.stop API 兼容性数据

## 基本信息

- **API名称**: `MediaStreamTrack.stop`
- **MDN文档**: [MediaStreamTrack.stop](https://developer.mozilla.org/docs/Web/API/MediaStreamTrack/stop)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#dom-mediastreamtrack-stop)
- **标签**: `web-features:media-capture`

## 使用示例

### 基本用法

```javascript
// MediaStreamTrack.stop 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaStreamTrack.stop API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 32 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 34 |  |
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

- **支持版本**: 32

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 34

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaStreamTrack.stop是否支持
function isMediaStreamTrackStopSupported() {
    return 'stop' in mediastreamtrack && typeof mediastreamtrack.stop === 'function';
}

if (isMediaStreamTrackStopSupported()) {
    console.log('MediaStreamTrack.stop 支持');
    // 使用MediaStreamTrack.stop
} else {
    console.log('MediaStreamTrack.stop 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaStreamTrack.stop polyfill
if (!mediastreamtrack.stop) {
    // 在这里添加polyfill实现
    console.log('加载MediaStreamTrack.stop polyfill');
}
```

