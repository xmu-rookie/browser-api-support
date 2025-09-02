# OffscreenCanvasRenderingContext2D.reset API 兼容性数据

## 基本信息

- **API名称**: `OffscreenCanvasRenderingContext2D.reset`
- **MDN文档**: [OffscreenCanvasRenderingContext2D.reset](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/reset)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-reset)
- **标签**: `web-features:canvas-reset`

## 使用示例

### 基本用法

```javascript
// OffscreenCanvasRenderingContext2D.reset 使用示例
// 请查阅MDN文档了解具体用法
console.log('OffscreenCanvasRenderingContext2D.reset API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 99 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 113 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17.2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 99

### Firefox

- **支持版本**: 113

### Safari

- **支持版本**: 17.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查OffscreenCanvasRenderingContext2D.reset是否支持
function isOffscreenCanvasRenderingContext2DResetSupported() {
    return 'reset' in offscreencanvasrenderingcontext2d && typeof offscreencanvasrenderingcontext2d.reset === 'function';
}

if (isOffscreenCanvasRenderingContext2DResetSupported()) {
    console.log('OffscreenCanvasRenderingContext2D.reset 支持');
    // 使用OffscreenCanvasRenderingContext2D.reset
} else {
    console.log('OffscreenCanvasRenderingContext2D.reset 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// OffscreenCanvasRenderingContext2D.reset polyfill
if (!offscreencanvasrenderingcontext2d.reset) {
    // 在这里添加polyfill实现
    console.log('加载OffscreenCanvasRenderingContext2D.reset polyfill');
}
```

