# createImageBitmap.options_premultiplyAlpha_parameter API 兼容性数据

## 基本信息

- **API名称**: `createImageBitmap.options_premultiplyAlpha_parameter`
- **标签**: `web-features:createimagebitmap`
- **描述**: `options.premultiplyAlpha` parameter

## 使用示例

### 基本用法

```javascript
// createImageBitmap.options_premultiplyAlpha_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('createImageBitmap.options_premultiplyAlpha_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 52 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.40 |  |
| Edge | 同主版本 |  |
| Firefox | 93 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 52

### Deno

- **支持版本**: 1.40

### Firefox

- **支持版本**: 93

### Safari

- **支持版本**: 17
- **支持版本**: 15
- **移除版本**: 17
- **部分实现**: 是
- **注意事项**:
  - If the source image is an `ImageData` object, then the `premultiplyAlpha` option does nothing. See [bug 237082](https://webkit.org/b/237082).

## 兼容性检查代码

### 特性检测

```javascript
// 检查createImageBitmap.options_premultiplyAlpha_parameter是否支持
function iscreateImageBitmapOptions_premultiplyAlpha_parameterSupported() {
    return 'options_premultiplyAlpha_parameter' in createimagebitmap && typeof createimagebitmap.options_premultiplyAlpha_parameter === 'function';
}

if (iscreateImageBitmapOptions_premultiplyAlpha_parameterSupported()) {
    console.log('createImageBitmap.options_premultiplyAlpha_parameter 支持');
    // 使用createImageBitmap.options_premultiplyAlpha_parameter
} else {
    console.log('createImageBitmap.options_premultiplyAlpha_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// createImageBitmap.options_premultiplyAlpha_parameter polyfill
if (!createimagebitmap.options_premultiplyAlpha_parameter) {
    // 在这里添加polyfill实现
    console.log('加载createImageBitmap.options_premultiplyAlpha_parameter polyfill');
}
```

