# ImageTrack.frameCount API 兼容性数据

## 基本信息

- **API名称**: `ImageTrack.frameCount`
- **MDN文档**: [ImageTrack.frameCount](https://developer.mozilla.org/docs/Web/API/ImageTrack/frameCount)
- **规范文档**: [查看规范](https://w3c.github.io/webcodecs/#dom-imagetrack-framecount)
- **标签**: `web-features:webcodecs`

## 使用示例

### 基本用法

```javascript
// ImageTrack.frameCount 使用示例
// 请查阅MDN文档了解具体用法
console.log('ImageTrack.frameCount API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 94 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 133 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 94

### Firefox

- **支持版本**: 133

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ImageTrack.frameCount是否支持
function isImageTrackFrameCountSupported() {
    return 'frameCount' in imagetrack && typeof imagetrack.frameCount === 'function';
}

if (isImageTrackFrameCountSupported()) {
    console.log('ImageTrack.frameCount 支持');
    // 使用ImageTrack.frameCount
} else {
    console.log('ImageTrack.frameCount 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ImageTrack.frameCount polyfill
if (!imagetrack.frameCount) {
    // 在这里添加polyfill实现
    console.log('加载ImageTrack.frameCount polyfill');
}
```

