# CanvasRenderingContext2D.resetTransform API 兼容性数据

## 基本信息

- **API名称**: `CanvasRenderingContext2D.resetTransform`
- **MDN文档**: [CanvasRenderingContext2D.resetTransform](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/resetTransform)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-resettransform-dev)
- **标签**: `web-features:canvas-2d`

## 使用示例

### 基本用法

```javascript
// CanvasRenderingContext2D.resetTransform 使用示例
// 请查阅MDN文档了解具体用法
console.log('CanvasRenderingContext2D.resetTransform API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 31 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 36 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 31

### Firefox

- **支持版本**: 36

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查CanvasRenderingContext2D.resetTransform是否支持
function isCanvasRenderingContext2DResetTransformSupported() {
    return 'resetTransform' in canvasrenderingcontext2d && typeof canvasrenderingcontext2d.resetTransform === 'function';
}

if (isCanvasRenderingContext2DResetTransformSupported()) {
    console.log('CanvasRenderingContext2D.resetTransform 支持');
    // 使用CanvasRenderingContext2D.resetTransform
} else {
    console.log('CanvasRenderingContext2D.resetTransform 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CanvasRenderingContext2D.resetTransform polyfill
if (!canvasrenderingcontext2d.resetTransform) {
    // 在这里添加polyfill实现
    console.log('加载CanvasRenderingContext2D.resetTransform polyfill');
}
```

