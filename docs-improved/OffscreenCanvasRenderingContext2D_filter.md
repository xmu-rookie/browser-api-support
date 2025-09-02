# OffscreenCanvasRenderingContext2D.filter API 兼容性数据

## 基本信息

- **API名称**: `OffscreenCanvasRenderingContext2D.filter`
- **MDN文档**: [OffscreenCanvasRenderingContext2D.filter](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/filter)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-filter-dev)
- **标签**: `web-features:offscreen-canvas`

## 使用示例

### 基本用法

```javascript
// OffscreenCanvasRenderingContext2D.filter 使用示例
// 请查阅MDN文档了解具体用法
console.log('OffscreenCanvasRenderingContext2D.filter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 |  |
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

- **支持版本**: 69

### Firefox

- **支持版本**: 116

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查OffscreenCanvasRenderingContext2D.filter是否支持
function isOffscreenCanvasRenderingContext2DFilterSupported() {
    return 'filter' in offscreencanvasrenderingcontext2d && typeof offscreencanvasrenderingcontext2d.filter === 'function';
}

if (isOffscreenCanvasRenderingContext2DFilterSupported()) {
    console.log('OffscreenCanvasRenderingContext2D.filter 支持');
    // 使用OffscreenCanvasRenderingContext2D.filter
} else {
    console.log('OffscreenCanvasRenderingContext2D.filter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// OffscreenCanvasRenderingContext2D.filter polyfill
if (!offscreencanvasrenderingcontext2d.filter) {
    // 在这里添加polyfill实现
    console.log('加载OffscreenCanvasRenderingContext2D.filter polyfill');
}
```

