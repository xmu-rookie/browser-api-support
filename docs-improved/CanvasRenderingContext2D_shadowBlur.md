# CanvasRenderingContext2D.shadowBlur API 兼容性数据

## 基本信息

- **API名称**: `CanvasRenderingContext2D.shadowBlur`
- **MDN文档**: [CanvasRenderingContext2D.shadowBlur](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-shadowblur-dev)
- **标签**: `web-features:canvas-2d`

## 使用示例

### 基本用法

```javascript
// CanvasRenderingContext2D.shadowBlur 使用示例
// 请查阅MDN文档了解具体用法
console.log('CanvasRenderingContext2D.shadowBlur API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1.5

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 2

## 兼容性检查代码

### 特性检测

```javascript
// 检查CanvasRenderingContext2D.shadowBlur是否支持
function isCanvasRenderingContext2DShadowBlurSupported() {
    return 'shadowBlur' in canvasrenderingcontext2d && typeof canvasrenderingcontext2d.shadowBlur === 'function';
}

if (isCanvasRenderingContext2DShadowBlurSupported()) {
    console.log('CanvasRenderingContext2D.shadowBlur 支持');
    // 使用CanvasRenderingContext2D.shadowBlur
} else {
    console.log('CanvasRenderingContext2D.shadowBlur 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CanvasRenderingContext2D.shadowBlur polyfill
if (!canvasrenderingcontext2d.shadowBlur) {
    // 在这里添加polyfill实现
    console.log('加载CanvasRenderingContext2D.shadowBlur polyfill');
}
```

