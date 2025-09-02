# ImageCapture API 兼容性数据

## 基本信息

- **API名称**: `ImageCapture`
- **MDN文档**: [ImageCapture](https://developer.mozilla.org/docs/Web/API/ImageCapture)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-image/#imagecaptureapi)

## 使用示例

### 基本用法

```javascript
// ImageCapture 使用示例
// 请查阅MDN文档了解具体用法
console.log('ImageCapture API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 59 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 35 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
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

### Safari

- **支持版本**: 18.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查ImageCapture是否支持
function isImageCaptureSupported() {
    return 'ImageCapture' in window || typeof ImageCapture !== 'undefined';
}

if (isImageCaptureSupported()) {
    console.log('ImageCapture 支持');
    // 使用ImageCapture
} else {
    console.log('ImageCapture 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ImageCapture polyfill
if (!window.ImageCapture) {
    // 在这里添加polyfill实现
    console.log('加载ImageCapture polyfill');
}
```

