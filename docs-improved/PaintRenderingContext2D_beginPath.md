# PaintRenderingContext2D.beginPath API 兼容性数据

## 基本信息

- **API名称**: `PaintRenderingContext2D.beginPath`
- **MDN文档**: [PaintRenderingContext2D.beginPath](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/beginPath)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-beginpath-dev)
- **标签**: `web-features:paint`

## 使用示例

### 基本用法

```javascript
// PaintRenderingContext2D.beginPath 使用示例
// 请查阅MDN文档了解具体用法
console.log('PaintRenderingContext2D.beginPath API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 65 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 65

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PaintRenderingContext2D.beginPath是否支持
function isPaintRenderingContext2DBeginPathSupported() {
    return 'beginPath' in paintrenderingcontext2d && typeof paintrenderingcontext2d.beginPath === 'function';
}

if (isPaintRenderingContext2DBeginPathSupported()) {
    console.log('PaintRenderingContext2D.beginPath 支持');
    // 使用PaintRenderingContext2D.beginPath
} else {
    console.log('PaintRenderingContext2D.beginPath 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PaintRenderingContext2D.beginPath polyfill
if (!paintrenderingcontext2d.beginPath) {
    // 在这里添加polyfill实现
    console.log('加载PaintRenderingContext2D.beginPath polyfill');
}
```

