# MediaMetadata.title API 兼容性数据

## 基本信息

- **API名称**: `MediaMetadata.title`
- **MDN文档**: [MediaMetadata.title](https://developer.mozilla.org/docs/Web/API/MediaMetadata/title)
- **规范文档**: [查看规范](https://w3c.github.io/mediasession/#dom-mediametadata-title)
- **标签**: `web-features:media-session`

## 使用示例

### 基本用法

```javascript
// MediaMetadata.title 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaMetadata.title API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 57 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 82 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 57

### Firefox

- **支持版本**: 82

### Safari

- **支持版本**: 14

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaMetadata.title是否支持
function isMediaMetadataTitleSupported() {
    return 'title' in mediametadata && typeof mediametadata.title === 'function';
}

if (isMediaMetadataTitleSupported()) {
    console.log('MediaMetadata.title 支持');
    // 使用MediaMetadata.title
} else {
    console.log('MediaMetadata.title 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaMetadata.title polyfill
if (!mediametadata.title) {
    // 在这里添加polyfill实现
    console.log('加载MediaMetadata.title polyfill');
}
```

