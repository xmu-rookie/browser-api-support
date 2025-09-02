# ImageData.ImageData.settings_parameter API 兼容性数据

## 基本信息

- **API名称**: `ImageData.ImageData.settings_parameter`

## 使用示例

### 基本用法

```javascript
// ImageData.ImageData.settings_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('ImageData.ImageData.settings_parameter API');
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
// 检查ImageData.ImageData.settings_parameter是否支持
function isImageDataImageDataSupported() {
    return 'ImageData' in imagedata && typeof imagedata.ImageData === 'function';
}

if (isImageDataImageDataSupported()) {
    console.log('ImageData.ImageData.settings_parameter 支持');
    // 使用ImageData.ImageData.settings_parameter
} else {
    console.log('ImageData.ImageData.settings_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ImageData.ImageData.settings_parameter polyfill
if (!imagedata.ImageData) {
    // 在这里添加polyfill实现
    console.log('加载ImageData.ImageData.settings_parameter polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **colorSpace_option**: 查看详细兼容性
- **pixelFormat_option**: `pixelFormat` option

