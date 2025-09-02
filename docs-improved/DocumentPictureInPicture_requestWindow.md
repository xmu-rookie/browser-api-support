# DocumentPictureInPicture.requestWindow API 兼容性数据

## 基本信息

- **API名称**: `DocumentPictureInPicture.requestWindow`
- **MDN文档**: [DocumentPictureInPicture.requestWindow](https://developer.mozilla.org/docs/Web/API/DocumentPictureInPicture/requestWindow)
- **规范文档**: [查看规范](https://wicg.github.io/document-picture-in-picture/#dom-documentpictureinpicture-requestwindow)
- **标签**: `web-features:document-picture-in-picture`

## 使用示例

### 基本用法

```javascript
// DocumentPictureInPicture.requestWindow 使用示例
// 请查阅MDN文档了解具体用法
console.log('DocumentPictureInPicture.requestWindow API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 116 |  |
| Chrome Android | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 116

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查DocumentPictureInPicture.requestWindow是否支持
function isDocumentPictureInPictureRequestWindowSupported() {
    return 'requestWindow' in documentpictureinpicture && typeof documentpictureinpicture.requestWindow === 'function';
}

if (isDocumentPictureInPictureRequestWindowSupported()) {
    console.log('DocumentPictureInPicture.requestWindow 支持');
    // 使用DocumentPictureInPicture.requestWindow
} else {
    console.log('DocumentPictureInPicture.requestWindow 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DocumentPictureInPicture.requestWindow polyfill
if (!documentpictureinpicture.requestWindow) {
    // 在这里添加polyfill实现
    console.log('加载DocumentPictureInPicture.requestWindow polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **option_disallowReturnToOpener**: `disallowReturnToOpener` option
- **option_preferInitialWindowPlacement**: `preferInitialWindowPlacement` option

