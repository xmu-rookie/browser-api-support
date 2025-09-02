# ImageBitmapRenderingContext.canvas API 兼容性数据

## 基本信息

- **API名称**: `ImageBitmapRenderingContext.canvas`
- **MDN文档**: [ImageBitmapRenderingContext.canvas](https://developer.mozilla.org/docs/Web/API/ImageBitmapRenderingContext/canvas)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-imagebitmaprenderingcontext-canvas-dev)
- **标签**: `web-features:imagebitmaprenderingcontext`

## 使用示例

### 基本用法

```javascript
// ImageBitmapRenderingContext.canvas 使用示例
// 请查阅MDN文档了解具体用法
console.log('ImageBitmapRenderingContext.canvas API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 66 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 97 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 66

### Firefox

- **支持版本**: 97

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查ImageBitmapRenderingContext.canvas是否支持
function isImageBitmapRenderingContextCanvasSupported() {
    return 'canvas' in imagebitmaprenderingcontext && typeof imagebitmaprenderingcontext.canvas === 'function';
}

if (isImageBitmapRenderingContextCanvasSupported()) {
    console.log('ImageBitmapRenderingContext.canvas 支持');
    // 使用ImageBitmapRenderingContext.canvas
} else {
    console.log('ImageBitmapRenderingContext.canvas 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ImageBitmapRenderingContext.canvas polyfill
if (!imagebitmaprenderingcontext.canvas) {
    // 在这里添加polyfill实现
    console.log('加载ImageBitmapRenderingContext.canvas polyfill');
}
```

