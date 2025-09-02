# OffscreenCanvasRenderingContext2D.font API 兼容性数据

## 基本信息

- **API名称**: `OffscreenCanvasRenderingContext2D.font`
- **MDN文档**: [OffscreenCanvasRenderingContext2D.font](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/font)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-font-dev)
- **标签**: `web-features:offscreen-canvas`

## 使用示例

### 基本用法

```javascript
// OffscreenCanvasRenderingContext2D.font 使用示例
// 请查阅MDN文档了解具体用法
console.log('OffscreenCanvasRenderingContext2D.font API');
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
| Safari | 18.4 |  |
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

- **支持版本**: 18.4
- **支持版本**: 16.4
- **移除版本**: 18.4
- **部分实现**: 是
- **注意事项**:
  - The `font-weight` can be set, but is not reflected back (see [bug 284115](https://webkit.org/b/284115)).

## 兼容性检查代码

### 特性检测

```javascript
// 检查OffscreenCanvasRenderingContext2D.font是否支持
function isOffscreenCanvasRenderingContext2DFontSupported() {
    return 'font' in offscreencanvasrenderingcontext2d && typeof offscreencanvasrenderingcontext2d.font === 'function';
}

if (isOffscreenCanvasRenderingContext2DFontSupported()) {
    console.log('OffscreenCanvasRenderingContext2D.font 支持');
    // 使用OffscreenCanvasRenderingContext2D.font
} else {
    console.log('OffscreenCanvasRenderingContext2D.font 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// OffscreenCanvasRenderingContext2D.font polyfill
if (!offscreencanvasrenderingcontext2d.font) {
    // 在这里添加polyfill实现
    console.log('加载OffscreenCanvasRenderingContext2D.font polyfill');
}
```

