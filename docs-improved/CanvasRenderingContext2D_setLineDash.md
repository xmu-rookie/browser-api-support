# CanvasRenderingContext2D.setLineDash API 兼容性数据

## 基本信息

- **API名称**: `CanvasRenderingContext2D.setLineDash`
- **MDN文档**: [CanvasRenderingContext2D.setLineDash](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-setlinedash-dev)
- **标签**: `web-features:canvas-2d`

## 使用示例

### 基本用法

```javascript
// CanvasRenderingContext2D.setLineDash 使用示例
// 请查阅MDN文档了解具体用法
console.log('CanvasRenderingContext2D.setLineDash API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 23 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 27 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 23

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 27

### Internet Explorer

- **支持版本**: 11

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查CanvasRenderingContext2D.setLineDash是否支持
function isCanvasRenderingContext2DSetLineDashSupported() {
    return 'setLineDash' in canvasrenderingcontext2d && typeof canvasrenderingcontext2d.setLineDash === 'function';
}

if (isCanvasRenderingContext2DSetLineDashSupported()) {
    console.log('CanvasRenderingContext2D.setLineDash 支持');
    // 使用CanvasRenderingContext2D.setLineDash
} else {
    console.log('CanvasRenderingContext2D.setLineDash 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CanvasRenderingContext2D.setLineDash polyfill
if (!canvasrenderingcontext2d.setLineDash) {
    // 在这里添加polyfill实现
    console.log('加载CanvasRenderingContext2D.setLineDash polyfill');
}
```

