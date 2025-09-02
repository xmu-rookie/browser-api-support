# SVGGeometryElement.isPointInStroke API 兼容性数据

## 基本信息

- **API名称**: `SVGGeometryElement.isPointInStroke`
- **MDN文档**: [SVGGeometryElement.isPointInStroke](https://developer.mozilla.org/docs/Web/API/SVGGeometryElement/isPointInStroke)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/types.html#__svg__SVGGeometryElement__isPointInStroke)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGGeometryElement.isPointInStroke 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGGeometryElement.isPointInStroke API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 33 | The element this method is called for must be in the DOM; otherwise, this method will always return ... |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 69 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 12 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 3.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 33
- **注意事项**:
  - The element this method is called for must be in the DOM; otherwise, this method will always return `false`.

### Firefox

- **支持版本**: 69

### Safari

- **支持版本**: 12

### Samsung Internet

- **支持版本**: 3.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGGeometryElement.isPointInStroke是否支持
function isSVGGeometryElementIsPointInStrokeSupported() {
    return 'isPointInStroke' in svggeometryelement && typeof svggeometryelement.isPointInStroke === 'function';
}

if (isSVGGeometryElementIsPointInStrokeSupported()) {
    console.log('SVGGeometryElement.isPointInStroke 支持');
    // 使用SVGGeometryElement.isPointInStroke
} else {
    console.log('SVGGeometryElement.isPointInStroke 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGGeometryElement.isPointInStroke polyfill
if (!svggeometryelement.isPointInStroke) {
    // 在这里添加polyfill实现
    console.log('加载SVGGeometryElement.isPointInStroke polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **point_parameter_DOMPoint**: Accepts a `DOMPoint` as `point` parameter

