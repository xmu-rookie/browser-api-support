# ImageTrackList.ready API 兼容性数据

## 基本信息

- **API名称**: `ImageTrackList.ready`
- **MDN文档**: [ImageTrackList.ready](https://developer.mozilla.org/docs/Web/API/ImageTrackList/ready)
- **规范文档**: [查看规范](https://w3c.github.io/webcodecs/#dom-imagetracklist-ready)
- **标签**: `web-features:webcodecs`

## 使用示例

### 基本用法

```javascript
// ImageTrackList.ready 使用示例
// 请查阅MDN文档了解具体用法
console.log('ImageTrackList.ready API');
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
// 检查ImageTrackList.ready是否支持
function isImageTrackListReadySupported() {
    return 'ready' in imagetracklist && typeof imagetracklist.ready === 'function';
}

if (isImageTrackListReadySupported()) {
    console.log('ImageTrackList.ready 支持');
    // 使用ImageTrackList.ready
} else {
    console.log('ImageTrackList.ready 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ImageTrackList.ready polyfill
if (!imagetracklist.ready) {
    // 在这里添加polyfill实现
    console.log('加载ImageTrackList.ready polyfill');
}
```

