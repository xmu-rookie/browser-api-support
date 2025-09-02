# SVGPathElement.createSVGPathSegCurvetoQuadraticSmoothAbs API 兼容性数据

## 基本信息

- **API名称**: `SVGPathElement.createSVGPathSegCurvetoQuadraticSmoothAbs`
- **标签**: `web-features:svg-discouraged`

## 使用示例

### 基本用法

```javascript
// SVGPathElement.createSVGPathSegCurvetoQuadraticSmoothAbs 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGPathElement.createSVGPathSegCurvetoQuadraticSmoothAbs API');
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
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1
- **移除版本**: 48

### Edge

- **支持版本**: 12
- **移除版本**: 79

### Firefox

- **支持版本**: 1.5
- **移除版本**: 59

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1
- **移除版本**: 35

### Opera Android

- **支持版本**: ≤12.1
- **移除版本**: 35

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGPathElement.createSVGPathSegCurvetoQuadraticSmoothAbs是否支持
function isSVGPathElementCreateSVGPathSegCurvetoQuadraticSmoothAbsSupported() {
    return 'createSVGPathSegCurvetoQuadraticSmoothAbs' in svgpathelement && typeof svgpathelement.createSVGPathSegCurvetoQuadraticSmoothAbs === 'function';
}

if (isSVGPathElementCreateSVGPathSegCurvetoQuadraticSmoothAbsSupported()) {
    console.log('SVGPathElement.createSVGPathSegCurvetoQuadraticSmoothAbs 支持');
    // 使用SVGPathElement.createSVGPathSegCurvetoQuadraticSmoothAbs
} else {
    console.log('SVGPathElement.createSVGPathSegCurvetoQuadraticSmoothAbs 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGPathElement.createSVGPathSegCurvetoQuadraticSmoothAbs polyfill
if (!svgpathelement.createSVGPathSegCurvetoQuadraticSmoothAbs) {
    // 在这里添加polyfill实现
    console.log('加载SVGPathElement.createSVGPathSegCurvetoQuadraticSmoothAbs polyfill');
}
```

