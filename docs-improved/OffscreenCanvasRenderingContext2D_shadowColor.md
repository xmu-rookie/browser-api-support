# OffscreenCanvasRenderingContext2D.shadowColor API 兼容性数据

## 基本信息

- **API名称**: `OffscreenCanvasRenderingContext2D.shadowColor`
- **MDN文档**: [OffscreenCanvasRenderingContext2D.shadowColor](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowColor)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-shadowcolor-dev)
- **标签**: `web-features:offscreen-canvas`

## 使用示例

### 基本用法

```javascript
// OffscreenCanvasRenderingContext2D.shadowColor 使用示例
// 请查阅MDN文档了解具体用法
console.log('OffscreenCanvasRenderingContext2D.shadowColor API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 105 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 69

### Firefox

- **支持版本**: 105

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查OffscreenCanvasRenderingContext2D.shadowColor是否支持
function isOffscreenCanvasRenderingContext2DShadowColorSupported() {
    return 'shadowColor' in offscreencanvasrenderingcontext2d && typeof offscreencanvasrenderingcontext2d.shadowColor === 'function';
}

if (isOffscreenCanvasRenderingContext2DShadowColorSupported()) {
    console.log('OffscreenCanvasRenderingContext2D.shadowColor 支持');
    // 使用OffscreenCanvasRenderingContext2D.shadowColor
} else {
    console.log('OffscreenCanvasRenderingContext2D.shadowColor 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// OffscreenCanvasRenderingContext2D.shadowColor polyfill
if (!offscreencanvasrenderingcontext2d.shadowColor) {
    // 在这里添加polyfill实现
    console.log('加载OffscreenCanvasRenderingContext2D.shadowColor polyfill');
}
```

