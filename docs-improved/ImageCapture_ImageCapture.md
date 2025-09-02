# ImageCapture.ImageCapture API 兼容性数据

## 基本信息

- **API名称**: `ImageCapture.ImageCapture`
- **MDN文档**: [ImageCapture.ImageCapture](https://developer.mozilla.org/docs/Web/API/ImageCapture/ImageCapture)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-image/#dom-imagecapture-imagecapture)
- **描述**: `ImageCapture()` constructor

## 使用示例

### 基本用法

```javascript
// ImageCapture.ImageCapture 使用示例
// 请查阅MDN文档了解具体用法
console.log('ImageCapture.ImageCapture API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 59 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 35 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 59

### Firefox

- **支持版本**: 35
- **需要标志**: 
  - dom.imagecapture.enabled: true

### Safari

- **支持版本**: 18.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查ImageCapture.ImageCapture是否支持
function isImageCaptureImageCaptureSupported() {
    return 'ImageCapture' in imagecapture && typeof imagecapture.ImageCapture === 'function';
}

if (isImageCaptureImageCaptureSupported()) {
    console.log('ImageCapture.ImageCapture 支持');
    // 使用ImageCapture.ImageCapture
} else {
    console.log('ImageCapture.ImageCapture 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ImageCapture.ImageCapture polyfill
if (!imagecapture.ImageCapture) {
    // 在这里添加polyfill实现
    console.log('加载ImageCapture.ImageCapture polyfill');
}
```

