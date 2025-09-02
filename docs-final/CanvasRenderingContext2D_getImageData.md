# CanvasRenderingContext2D.getImageData API 兼容性数据

## 基本信息

- **API名称**: `CanvasRenderingContext2D.getImageData`
- **MDN文档**: [CanvasRenderingContext2D.getImageData](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/getImageData)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-getimagedata-dev)
- **标签**: `web-features:canvas-2d`

## 使用示例

### 基本用法

```javascript
// CanvasRenderingContext2D.getImageData 使用示例
// 请查阅MDN文档了解具体用法
console.log('CanvasRenderingContext2D.getImageData API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 2 | Since Firefox 5, `getImageData` now correctly accepts rectangles that extend beyond the bounds of th... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 9.5 |  |
| Opera Android | 10.1 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 2

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 2
- **注意事项**:
  - Since Firefox 5, `getImageData` now correctly accepts rectangles that extend beyond the bounds of the canvas; pixels outside the canvas are returned as transparent black and now also returns at least one pixel's worth of image data if a rectangle smaller than one pixel is specified.

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 9.5

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 4

