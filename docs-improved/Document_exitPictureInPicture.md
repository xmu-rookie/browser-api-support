# Document.exitPictureInPicture API 兼容性数据

## 基本信息

- **API名称**: `Document.exitPictureInPicture`
- **MDN文档**: [Document.exitPictureInPicture](https://developer.mozilla.org/docs/Web/API/Document/exitPictureInPicture)
- **规范文档**: [查看规范](https://w3c.github.io/picture-in-picture/#dom-document-exitpictureinpicture)
- **标签**: `web-features:picture-in-picture`

## 使用示例

### 基本用法

```javascript
// Document.exitPictureInPicture 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.exitPictureInPicture API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 |  |
| Chrome Android | 105 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 69

### Chrome Android

- **支持版本**: 105

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 13.1

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.exitPictureInPicture是否支持
function isDocumentExitPictureInPictureSupported() {
    return 'exitPictureInPicture' in document && typeof document.exitPictureInPicture === 'function';
}

if (isDocumentExitPictureInPictureSupported()) {
    console.log('Document.exitPictureInPicture 支持');
    // 使用Document.exitPictureInPicture
} else {
    console.log('Document.exitPictureInPicture 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.exitPictureInPicture polyfill
if (!document.exitPictureInPicture) {
    // 在这里添加polyfill实现
    console.log('加载Document.exitPictureInPicture polyfill');
}
```

