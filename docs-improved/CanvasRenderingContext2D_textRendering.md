# CanvasRenderingContext2D.textRendering API 兼容性数据

## 基本信息

- **API名称**: `CanvasRenderingContext2D.textRendering`
- **MDN文档**: [CanvasRenderingContext2D.textRendering](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/textRendering)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-textrendering)
- **标签**: `web-features:canvas-2d`

## 使用示例

### 基本用法

```javascript
// CanvasRenderingContext2D.textRendering 使用示例
// 请查阅MDN文档了解具体用法
console.log('CanvasRenderingContext2D.textRendering API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 99 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 116 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 99

### Firefox

- **支持版本**: 116

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查CanvasRenderingContext2D.textRendering是否支持
function isCanvasRenderingContext2DTextRenderingSupported() {
    return 'textRendering' in canvasrenderingcontext2d && typeof canvasrenderingcontext2d.textRendering === 'function';
}

if (isCanvasRenderingContext2DTextRenderingSupported()) {
    console.log('CanvasRenderingContext2D.textRendering 支持');
    // 使用CanvasRenderingContext2D.textRendering
} else {
    console.log('CanvasRenderingContext2D.textRendering 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CanvasRenderingContext2D.textRendering polyfill
if (!canvasrenderingcontext2d.textRendering) {
    // 在这里添加polyfill实现
    console.log('加载CanvasRenderingContext2D.textRendering polyfill');
}
```

