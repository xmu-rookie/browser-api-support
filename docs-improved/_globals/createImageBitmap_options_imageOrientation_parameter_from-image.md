# createImageBitmap.options_imageOrientation_parameter.from-image API 兼容性数据

## 基本信息

- **API名称**: `createImageBitmap.options_imageOrientation_parameter.from-image`
- **标签**: `web-features:createimagebitmap`
- **描述**: Value `from-image`

## 使用示例

### 基本用法

```javascript
// createImageBitmap.options_imageOrientation_parameter.from-image 使用示例
// 请查阅MDN文档了解具体用法
console.log('createImageBitmap.options_imageOrientation_parameter.from-image API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 112 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.40 |  |
| Edge | 同主版本 |  |
| Firefox | 111 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 112

### Deno

- **支持版本**: 1.40

### Firefox

- **支持版本**: 111

### Safari

- **支持版本**: 16

## 兼容性检查代码

### 特性检测

```javascript
// 检查createImageBitmap.options_imageOrientation_parameter.from-image是否支持
function iscreateImageBitmapOptions_imageOrientation_parameterSupported() {
    return 'options_imageOrientation_parameter' in createimagebitmap && typeof createimagebitmap.options_imageOrientation_parameter === 'function';
}

if (iscreateImageBitmapOptions_imageOrientation_parameterSupported()) {
    console.log('createImageBitmap.options_imageOrientation_parameter.from-image 支持');
    // 使用createImageBitmap.options_imageOrientation_parameter.from-image
} else {
    console.log('createImageBitmap.options_imageOrientation_parameter.from-image 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// createImageBitmap.options_imageOrientation_parameter.from-image polyfill
if (!createimagebitmap.options_imageOrientation_parameter) {
    // 在这里添加polyfill实现
    console.log('加载createImageBitmap.options_imageOrientation_parameter.from-image polyfill');
}
```

