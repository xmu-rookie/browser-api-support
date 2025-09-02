# ImageCapture.getPhotoSettings API 兼容性数据

## 基本信息

- **API名称**: `ImageCapture.getPhotoSettings`
- **MDN文档**: [ImageCapture.getPhotoSettings](https://developer.mozilla.org/docs/Web/API/ImageCapture/getPhotoSettings)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-image/#dom-imagecapture-getphotosettings)

## 使用示例

### 基本用法

```javascript
// ImageCapture.getPhotoSettings 使用示例
// 请查阅MDN文档了解具体用法
console.log('ImageCapture.getPhotoSettings API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 46 |  |
| Opera Android | 43 |  |
| Safari | 18.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61

### Firefox

- **支持版本**: 不支持

### Opera

- **支持版本**: 46

### Opera Android

- **支持版本**: 43

### Safari

- **支持版本**: 18.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查ImageCapture.getPhotoSettings是否支持
function isImageCaptureGetPhotoSettingsSupported() {
    return 'getPhotoSettings' in imagecapture && typeof imagecapture.getPhotoSettings === 'function';
}

if (isImageCaptureGetPhotoSettingsSupported()) {
    console.log('ImageCapture.getPhotoSettings 支持');
    // 使用ImageCapture.getPhotoSettings
} else {
    console.log('ImageCapture.getPhotoSettings 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ImageCapture.getPhotoSettings polyfill
if (!imagecapture.getPhotoSettings) {
    // 在这里添加polyfill实现
    console.log('加载ImageCapture.getPhotoSettings polyfill');
}
```

