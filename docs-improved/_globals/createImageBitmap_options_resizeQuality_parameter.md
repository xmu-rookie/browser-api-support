# createImageBitmap.options_resizeQuality_parameter API 兼容性数据

## 基本信息

- **API名称**: `createImageBitmap.options_resizeQuality_parameter`
- **标签**: `web-features:createimagebitmap`
- **描述**: `options.resizeQuality` parameter

## 使用示例

### 基本用法

```javascript
// createImageBitmap.options_resizeQuality_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('createImageBitmap.options_resizeQuality_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 54 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.40 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 54

### Deno

- **支持版本**: 1.40

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 15

## 兼容性检查代码

### 特性检测

```javascript
// 检查createImageBitmap.options_resizeQuality_parameter是否支持
function iscreateImageBitmapOptions_resizeQuality_parameterSupported() {
    return 'options_resizeQuality_parameter' in createimagebitmap && typeof createimagebitmap.options_resizeQuality_parameter === 'function';
}

if (iscreateImageBitmapOptions_resizeQuality_parameterSupported()) {
    console.log('createImageBitmap.options_resizeQuality_parameter 支持');
    // 使用createImageBitmap.options_resizeQuality_parameter
} else {
    console.log('createImageBitmap.options_resizeQuality_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// createImageBitmap.options_resizeQuality_parameter polyfill
if (!createimagebitmap.options_resizeQuality_parameter) {
    // 在这里添加polyfill实现
    console.log('加载createImageBitmap.options_resizeQuality_parameter polyfill');
}
```

