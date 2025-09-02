# CanvasPattern.setTransform API 兼容性数据

## 基本信息

- **API名称**: `CanvasPattern.setTransform`
- **MDN文档**: [CanvasPattern.setTransform](https://developer.mozilla.org/docs/Web/API/CanvasPattern/setTransform)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-canvaspattern-settransform-dev)
- **标签**: `web-features:canvas-2d`

## 使用示例

### 基本用法

```javascript
// CanvasPattern.setTransform 使用示例
// 请查阅MDN文档了解具体用法
console.log('CanvasPattern.setTransform API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 68 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 33 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 68

### Firefox

- **支持版本**: 33

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查CanvasPattern.setTransform是否支持
function isCanvasPatternSetTransformSupported() {
    return 'setTransform' in canvaspattern && typeof canvaspattern.setTransform === 'function';
}

if (isCanvasPatternSetTransformSupported()) {
    console.log('CanvasPattern.setTransform 支持');
    // 使用CanvasPattern.setTransform
} else {
    console.log('CanvasPattern.setTransform 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CanvasPattern.setTransform polyfill
if (!canvaspattern.setTransform) {
    // 在这里添加polyfill实现
    console.log('加载CanvasPattern.setTransform polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **dommatrix**: Accepts a `DOMMatrix2DInit`-like object parameter

