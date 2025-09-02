# MediaStreamTrack.contentHint API 兼容性数据

## 基本信息

- **API名称**: `MediaStreamTrack.contentHint`
- **MDN文档**: [MediaStreamTrack.contentHint](https://developer.mozilla.org/docs/Web/API/MediaStreamTrack/contentHint)
- **规范文档**: [查看规范](https://w3c.github.io/mst-content-hint/#dom-mediastreamtrack-contenthint)

## 使用示例

### 基本用法

```javascript
// MediaStreamTrack.contentHint 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaStreamTrack.contentHint API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 70 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 12.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 70

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 12.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaStreamTrack.contentHint是否支持
function isMediaStreamTrackContentHintSupported() {
    return 'contentHint' in mediastreamtrack && typeof mediastreamtrack.contentHint === 'function';
}

if (isMediaStreamTrackContentHintSupported()) {
    console.log('MediaStreamTrack.contentHint 支持');
    // 使用MediaStreamTrack.contentHint
} else {
    console.log('MediaStreamTrack.contentHint 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaStreamTrack.contentHint polyfill
if (!mediastreamtrack.contentHint) {
    // 在这里添加polyfill实现
    console.log('加载MediaStreamTrack.contentHint polyfill');
}
```

