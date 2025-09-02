# DocumentPictureInPicture.requestWindow.option_disallowReturnToOpener API 兼容性数据

## 基本信息

- **API名称**: `DocumentPictureInPicture.requestWindow.option_disallowReturnToOpener`
- **规范文档**: [查看规范](https://wicg.github.io/document-picture-in-picture/#dom-documentpictureinpictureoptions-disallowreturntoopener)
- **标签**: `web-features:document-picture-in-picture`
- **描述**: `disallowReturnToOpener` option

## 使用示例

### 基本用法

```javascript
// DocumentPictureInPicture.requestWindow.option_disallowReturnToOpener 使用示例
// 请查阅MDN文档了解具体用法
console.log('DocumentPictureInPicture.requestWindow.option_disallowReturnToOpener API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 124 |  |
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

- **支持版本**: 124

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查DocumentPictureInPicture.requestWindow.option_disallowReturnToOpener是否支持
function isDocumentPictureInPictureRequestWindowSupported() {
    return 'requestWindow' in documentpictureinpicture && typeof documentpictureinpicture.requestWindow === 'function';
}

if (isDocumentPictureInPictureRequestWindowSupported()) {
    console.log('DocumentPictureInPicture.requestWindow.option_disallowReturnToOpener 支持');
    // 使用DocumentPictureInPicture.requestWindow.option_disallowReturnToOpener
} else {
    console.log('DocumentPictureInPicture.requestWindow.option_disallowReturnToOpener 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DocumentPictureInPicture.requestWindow.option_disallowReturnToOpener polyfill
if (!documentpictureinpicture.requestWindow) {
    // 在这里添加polyfill实现
    console.log('加载DocumentPictureInPicture.requestWindow.option_disallowReturnToOpener polyfill');
}
```

