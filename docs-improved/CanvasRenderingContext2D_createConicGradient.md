# CanvasRenderingContext2D.createConicGradient API 兼容性数据

## 基本信息

- **API名称**: `CanvasRenderingContext2D.createConicGradient`
- **MDN文档**: [CanvasRenderingContext2D.createConicGradient](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-createconicgradient-dev)
- **标签**: `web-features:canvas-createconicgradient`

## 使用示例

### 基本用法

```javascript
// CanvasRenderingContext2D.createConicGradient 使用示例
// 请查阅MDN文档了解具体用法
console.log('CanvasRenderingContext2D.createConicGradient API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 99 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 112 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 99

### Firefox

- **支持版本**: 112
- **支持版本**: 90
- **移除版本**: 112
- **部分实现**: 是
- **注意事项**:
  - Implements an older version of the specification. The gradient starts from a line going vertically up from the center, like the equivalent CSS function.

### Safari

- **支持版本**: 16.1
- **支持版本**: 15
- **移除版本**: 16.1
- **部分实现**: 是
- **注意事项**:
  - Implements an older version of the specification. The gradient starts from a line going vertically up from the center, like the equivalent CSS function.

## 兼容性检查代码

### 特性检测

```javascript
// 检查CanvasRenderingContext2D.createConicGradient是否支持
function isCanvasRenderingContext2DCreateConicGradientSupported() {
    return 'createConicGradient' in canvasrenderingcontext2d && typeof canvasrenderingcontext2d.createConicGradient === 'function';
}

if (isCanvasRenderingContext2DCreateConicGradientSupported()) {
    console.log('CanvasRenderingContext2D.createConicGradient 支持');
    // 使用CanvasRenderingContext2D.createConicGradient
} else {
    console.log('CanvasRenderingContext2D.createConicGradient 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CanvasRenderingContext2D.createConicGradient polyfill
if (!canvasrenderingcontext2d.createConicGradient) {
    // 在这里添加polyfill实现
    console.log('加载CanvasRenderingContext2D.createConicGradient polyfill');
}
```

