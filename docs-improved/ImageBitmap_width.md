# ImageBitmap.width API 兼容性数据

## 基本信息

- **API名称**: `ImageBitmap.width`
- **MDN文档**: [ImageBitmap.width](https://developer.mozilla.org/docs/Web/API/ImageBitmap/width)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#dom-imagebitmap-width-dev)
- **标签**: `web-features:createimagebitmap`

## 使用示例

### 基本用法

```javascript
// ImageBitmap.width 使用示例
// 请查阅MDN文档了解具体用法
console.log('ImageBitmap.width API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 50 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.40 |  |
| Edge | 同主版本 |  |
| Firefox | 42 |  |
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

- **支持版本**: 50

### Deno

- **支持版本**: 1.40

### Firefox

- **支持版本**: 42

### Safari

- **支持版本**: 15

## 兼容性检查代码

### 特性检测

```javascript
// 检查ImageBitmap.width是否支持
function isImageBitmapWidthSupported() {
    return 'width' in imagebitmap && typeof imagebitmap.width === 'function';
}

if (isImageBitmapWidthSupported()) {
    console.log('ImageBitmap.width 支持');
    // 使用ImageBitmap.width
} else {
    console.log('ImageBitmap.width 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ImageBitmap.width polyfill
if (!imagebitmap.width) {
    // 在这里添加polyfill实现
    console.log('加载ImageBitmap.width polyfill');
}
```

