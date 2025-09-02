# CanvasRenderingContext2D.isContextLost API 兼容性数据

## 基本信息

- **API名称**: `CanvasRenderingContext2D.isContextLost`
- **MDN文档**: [CanvasRenderingContext2D.isContextLost](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/isContextLost)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-iscontextlost)
- **标签**: `web-features:canvas-context-lost`

## 使用示例

### 基本用法

```javascript
// CanvasRenderingContext2D.isContextLost 使用示例
// 请查阅MDN文档了解具体用法
console.log('CanvasRenderingContext2D.isContextLost API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 99 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 125 |  |
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

- **支持版本**: 125

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查CanvasRenderingContext2D.isContextLost是否支持
function isCanvasRenderingContext2DIsContextLostSupported() {
    return 'isContextLost' in canvasrenderingcontext2d && typeof canvasrenderingcontext2d.isContextLost === 'function';
}

if (isCanvasRenderingContext2DIsContextLostSupported()) {
    console.log('CanvasRenderingContext2D.isContextLost 支持');
    // 使用CanvasRenderingContext2D.isContextLost
} else {
    console.log('CanvasRenderingContext2D.isContextLost 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CanvasRenderingContext2D.isContextLost polyfill
if (!canvasrenderingcontext2d.isContextLost) {
    // 在这里添加polyfill实现
    console.log('加载CanvasRenderingContext2D.isContextLost polyfill');
}
```

