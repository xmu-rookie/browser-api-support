# MediaStreamTrack.kind API 兼容性数据

## 基本信息

- **API名称**: `MediaStreamTrack.kind`
- **MDN文档**: [MediaStreamTrack.kind](https://developer.mozilla.org/docs/Web/API/MediaStreamTrack/kind)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#dom-mediastreamtrack-kind)
- **标签**: `web-features:media-capture`

## 使用示例

### 基本用法

```javascript
// MediaStreamTrack.kind 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaStreamTrack.kind API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 26 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 22 |  |
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

- **支持版本**: 22

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaStreamTrack.kind是否支持
function isMediaStreamTrackKindSupported() {
    return 'kind' in mediastreamtrack && typeof mediastreamtrack.kind === 'function';
}

if (isMediaStreamTrackKindSupported()) {
    console.log('MediaStreamTrack.kind 支持');
    // 使用MediaStreamTrack.kind
} else {
    console.log('MediaStreamTrack.kind 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaStreamTrack.kind polyfill
if (!mediastreamtrack.kind) {
    // 在这里添加polyfill实现
    console.log('加载MediaStreamTrack.kind polyfill');
}
```

