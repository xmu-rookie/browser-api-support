# createImageBitmap.svgimageelement_as_source_image API 兼容性数据

## 基本信息

- **API名称**: `createImageBitmap.svgimageelement_as_source_image`
- **标签**: `web-features:createimagebitmap`
- **描述**: `SVGImageElement` as source image

## 使用示例

### 基本用法

```javascript
// createImageBitmap.svgimageelement_as_source_image 使用示例
// 请查阅MDN文档了解具体用法
console.log('createImageBitmap.svgimageelement_as_source_image API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 59 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 65 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17.2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 59

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 65

### Safari

- **支持版本**: 17.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查createImageBitmap.svgimageelement_as_source_image是否支持
function iscreateImageBitmapSvgimageelement_as_source_imageSupported() {
    return 'svgimageelement_as_source_image' in createimagebitmap && typeof createimagebitmap.svgimageelement_as_source_image === 'function';
}

if (iscreateImageBitmapSvgimageelement_as_source_imageSupported()) {
    console.log('createImageBitmap.svgimageelement_as_source_image 支持');
    // 使用createImageBitmap.svgimageelement_as_source_image
} else {
    console.log('createImageBitmap.svgimageelement_as_source_image 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// createImageBitmap.svgimageelement_as_source_image polyfill
if (!createimagebitmap.svgimageelement_as_source_image) {
    // 在这里添加polyfill实现
    console.log('加载createImageBitmap.svgimageelement_as_source_image polyfill');
}
```

