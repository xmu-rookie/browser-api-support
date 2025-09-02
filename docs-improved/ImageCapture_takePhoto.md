# ImageCapture.takePhoto API 兼容性数据

## 基本信息

- **API名称**: `ImageCapture.takePhoto`
- **MDN文档**: [ImageCapture.takePhoto](https://developer.mozilla.org/docs/Web/API/ImageCapture/takePhoto)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-image/#dom-imagecapture-takephoto)

## 使用示例

### 基本用法

```javascript
// ImageCapture.takePhoto 使用示例
// 请查阅MDN文档了解具体用法
console.log('ImageCapture.takePhoto API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
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

- **支持版本**: 60
- **支持版本**: 59
- **移除版本**: 60
- **部分实现**: 是
- **注意事项**:
  - `photoSettings` parameter not supported.

### Firefox

- **支持版本**: 35
- **需要标志**: 
  - dom.imagecapture.enabled: true

### Safari

- **支持版本**: 18.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查ImageCapture.takePhoto是否支持
function isImageCaptureTakePhotoSupported() {
    return 'takePhoto' in imagecapture && typeof imagecapture.takePhoto === 'function';
}

if (isImageCaptureTakePhotoSupported()) {
    console.log('ImageCapture.takePhoto 支持');
    // 使用ImageCapture.takePhoto
} else {
    console.log('ImageCapture.takePhoto 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ImageCapture.takePhoto polyfill
if (!imagecapture.takePhoto) {
    // 在这里添加polyfill实现
    console.log('加载ImageCapture.takePhoto polyfill');
}
```

