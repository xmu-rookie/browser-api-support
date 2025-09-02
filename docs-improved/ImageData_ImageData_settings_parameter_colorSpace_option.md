# ImageData.ImageData.settings_parameter.colorSpace_option API 兼容性数据

## 基本信息

- **API名称**: `ImageData.ImageData.settings_parameter.colorSpace_option`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-predefinedcolorspace-srgb)

## 使用示例

### 基本用法

```javascript
// ImageData.ImageData.settings_parameter.colorSpace_option 使用示例
// 请查阅MDN文档了解具体用法
console.log('ImageData.ImageData.settings_parameter.colorSpace_option API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 92 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 92

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 15.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查ImageData.ImageData.settings_parameter.colorSpace_option是否支持
function isImageDataImageDataSupported() {
    return 'ImageData' in imagedata && typeof imagedata.ImageData === 'function';
}

if (isImageDataImageDataSupported()) {
    console.log('ImageData.ImageData.settings_parameter.colorSpace_option 支持');
    // 使用ImageData.ImageData.settings_parameter.colorSpace_option
} else {
    console.log('ImageData.ImageData.settings_parameter.colorSpace_option 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ImageData.ImageData.settings_parameter.colorSpace_option polyfill
if (!imagedata.ImageData) {
    // 在这里添加polyfill实现
    console.log('加载ImageData.ImageData.settings_parameter.colorSpace_option polyfill');
}
```

