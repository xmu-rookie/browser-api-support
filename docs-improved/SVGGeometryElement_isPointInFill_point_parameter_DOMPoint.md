# SVGGeometryElement.isPointInFill.point_parameter_DOMPoint API 兼容性数据

## 基本信息

- **API名称**: `SVGGeometryElement.isPointInFill.point_parameter_DOMPoint`
- **标签**: `web-features:svg`
- **描述**: Accepts a `DOMPoint` as `point` parameter

## 使用示例

### 基本用法

```javascript
// SVGGeometryElement.isPointInFill.point_parameter_DOMPoint 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGGeometryElement.isPointInFill.point_parameter_DOMPoint API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 136 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 69 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 12 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 136

### Firefox

- **支持版本**: 69

### Safari

- **支持版本**: 12

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGGeometryElement.isPointInFill.point_parameter_DOMPoint是否支持
function isSVGGeometryElementIsPointInFillSupported() {
    return 'isPointInFill' in svggeometryelement && typeof svggeometryelement.isPointInFill === 'function';
}

if (isSVGGeometryElementIsPointInFillSupported()) {
    console.log('SVGGeometryElement.isPointInFill.point_parameter_DOMPoint 支持');
    // 使用SVGGeometryElement.isPointInFill.point_parameter_DOMPoint
} else {
    console.log('SVGGeometryElement.isPointInFill.point_parameter_DOMPoint 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGGeometryElement.isPointInFill.point_parameter_DOMPoint polyfill
if (!svggeometryelement.isPointInFill) {
    // 在这里添加polyfill实现
    console.log('加载SVGGeometryElement.isPointInFill.point_parameter_DOMPoint polyfill');
}
```

