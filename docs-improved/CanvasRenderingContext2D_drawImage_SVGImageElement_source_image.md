# CanvasRenderingContext2D.drawImage.SVGImageElement_source_image API 兼容性数据

## 基本信息

- **API名称**: `CanvasRenderingContext2D.drawImage.SVGImageElement_source_image`
- **标签**: `web-features:svg`
- **描述**: SVGImageElement as source image

## 使用示例

### 基本用法

```javascript
// CanvasRenderingContext2D.drawImage.SVGImageElement_source_image 使用示例
// 请查阅MDN文档了解具体用法
console.log('CanvasRenderingContext2D.drawImage.SVGImageElement_source_image API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 59 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 56 |  |
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

- **支持版本**: 59

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 56

### Safari

- **支持版本**: 17

## 兼容性检查代码

### 特性检测

```javascript
// 检查CanvasRenderingContext2D.drawImage.SVGImageElement_source_image是否支持
function isCanvasRenderingContext2DDrawImageSupported() {
    return 'drawImage' in canvasrenderingcontext2d && typeof canvasrenderingcontext2d.drawImage === 'function';
}

if (isCanvasRenderingContext2DDrawImageSupported()) {
    console.log('CanvasRenderingContext2D.drawImage.SVGImageElement_source_image 支持');
    // 使用CanvasRenderingContext2D.drawImage.SVGImageElement_source_image
} else {
    console.log('CanvasRenderingContext2D.drawImage.SVGImageElement_source_image 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CanvasRenderingContext2D.drawImage.SVGImageElement_source_image polyfill
if (!canvasrenderingcontext2d.drawImage) {
    // 在这里添加polyfill实现
    console.log('加载CanvasRenderingContext2D.drawImage.SVGImageElement_source_image polyfill');
}
```

