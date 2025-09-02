# ImageBitmap.height API 兼容性数据

## 基本信息

- **API名称**: `ImageBitmap.height`
- **MDN文档**: [ImageBitmap.height](https://developer.mozilla.org/docs/Web/API/ImageBitmap/height)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#dom-imagebitmap-height-dev)
- **标签**: `web-features:createimagebitmap`

## 使用示例

### 基本用法

```javascript
// ImageBitmap.height 使用示例
// 请查阅MDN文档了解具体用法
console.log('ImageBitmap.height API');
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
// 检查ImageBitmap.height是否支持
function isImageBitmapHeightSupported() {
    return 'height' in imagebitmap && typeof imagebitmap.height === 'function';
}

if (isImageBitmapHeightSupported()) {
    console.log('ImageBitmap.height 支持');
    // 使用ImageBitmap.height
} else {
    console.log('ImageBitmap.height 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ImageBitmap.height polyfill
if (!imagebitmap.height) {
    // 在这里添加polyfill实现
    console.log('加载ImageBitmap.height polyfill');
}
```

