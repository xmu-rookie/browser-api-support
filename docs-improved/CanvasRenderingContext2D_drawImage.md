# CanvasRenderingContext2D.drawImage API 兼容性数据

## 基本信息

- **API名称**: `CanvasRenderingContext2D.drawImage`
- **MDN文档**: [CanvasRenderingContext2D.drawImage](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/drawImage)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-drawimage-dev)
- **标签**: `web-features:canvas-2d`

## 使用示例

### 基本用法

```javascript
// CanvasRenderingContext2D.drawImage 使用示例
// 请查阅MDN文档了解具体用法
console.log('CanvasRenderingContext2D.drawImage API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 9 |  |
| Opera Android | 10.1 |  |
| Safari | 2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1.5

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 9

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 2

## 兼容性检查代码

### 特性检测

```javascript
// 检查CanvasRenderingContext2D.drawImage是否支持
function isCanvasRenderingContext2DDrawImageSupported() {
    return 'drawImage' in canvasrenderingcontext2d && typeof canvasrenderingcontext2d.drawImage === 'function';
}

if (isCanvasRenderingContext2DDrawImageSupported()) {
    console.log('CanvasRenderingContext2D.drawImage 支持');
    // 使用CanvasRenderingContext2D.drawImage
} else {
    console.log('CanvasRenderingContext2D.drawImage 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CanvasRenderingContext2D.drawImage polyfill
if (!canvasrenderingcontext2d.drawImage) {
    // 在这里添加polyfill实现
    console.log('加载CanvasRenderingContext2D.drawImage polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **ImageBitmap_source_image**: ImageBitmap as source image
- **SVGImageElement_source_image**: SVGImageElement as source image

