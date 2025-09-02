# CanvasGradient API 兼容性数据

## 基本信息

- **API名称**: `CanvasGradient`
- **MDN文档**: [CanvasGradient](https://developer.mozilla.org/docs/Web/API/CanvasGradient)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#canvasgradient)
- **标签**: `web-features:canvas-2d`

## 使用示例

### 基本用法

```javascript
// CanvasGradient 使用示例
// 请查阅MDN文档了解具体用法
console.log('CanvasGradient API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1.5 | Before Firefox 5.0, specifying non-finite values when adding color stops through a call to `addColor... |
| Firefox Android | 4 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 9 |  |
| Opera Android | 10.1 |  |
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
- **注意事项**:
  - Before Firefox 5.0, specifying non-finite values when adding color stops through a call to `addColorStop()` incorrectly throws `SYNTAX_ERR` instead of `INDEX_SIZE_ERR`.

### Firefox Android

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 9

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 2

## 兼容性检查代码

### 特性检测

```javascript
// 检查CanvasGradient是否支持
function isCanvasGradientSupported() {
    return 'CanvasGradient' in window || typeof CanvasGradient !== 'undefined';
}

if (isCanvasGradientSupported()) {
    console.log('CanvasGradient 支持');
    // 使用CanvasGradient
} else {
    console.log('CanvasGradient 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CanvasGradient polyfill
if (!window.CanvasGradient) {
    // 在这里添加polyfill实现
    console.log('加载CanvasGradient polyfill');
}
```

