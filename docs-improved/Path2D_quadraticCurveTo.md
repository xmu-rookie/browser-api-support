# Path2D.quadraticCurveTo API 兼容性数据

## 基本信息

- **API名称**: `Path2D.quadraticCurveTo`
- **MDN文档**: [Path2D.quadraticCurveTo](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-quadraticcurveto-dev)
- **标签**: `web-features:canvas-2d`

## 使用示例

### 基本用法

```javascript
// Path2D.quadraticCurveTo 使用示例
// 请查阅MDN文档了解具体用法
console.log('Path2D.quadraticCurveTo API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 36 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 31 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 36

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 31

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查Path2D.quadraticCurveTo是否支持
function isPath2DQuadraticCurveToSupported() {
    return 'quadraticCurveTo' in path2d && typeof path2d.quadraticCurveTo === 'function';
}

if (isPath2DQuadraticCurveToSupported()) {
    console.log('Path2D.quadraticCurveTo 支持');
    // 使用Path2D.quadraticCurveTo
} else {
    console.log('Path2D.quadraticCurveTo 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Path2D.quadraticCurveTo polyfill
if (!path2d.quadraticCurveTo) {
    // 在这里添加polyfill实现
    console.log('加载Path2D.quadraticCurveTo polyfill');
}
```

