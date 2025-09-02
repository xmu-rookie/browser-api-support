# SVGFEColorMatrixElement.height API 兼容性数据

## 基本信息

- **API名称**: `SVGFEColorMatrixElement.height`
- **MDN文档**: [SVGFEColorMatrixElement.height](https://developer.mozilla.org/docs/Web/API/SVGFEColorMatrixElement/height)
- **规范文档**: [查看规范](https://drafts.fxtf.org/filter-effects/#dom-svgfilterprimitivestandardattributes-height)
- **标签**: `web-features:svg-filters`

## 使用示例

### 基本用法

```javascript
// SVGFEColorMatrixElement.height 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGFEColorMatrixElement.height API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 5 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 5

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGFEColorMatrixElement.height是否支持
function isSVGFEColorMatrixElementHeightSupported() {
    return 'height' in svgfecolormatrixelement && typeof svgfecolormatrixelement.height === 'function';
}

if (isSVGFEColorMatrixElementHeightSupported()) {
    console.log('SVGFEColorMatrixElement.height 支持');
    // 使用SVGFEColorMatrixElement.height
} else {
    console.log('SVGFEColorMatrixElement.height 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGFEColorMatrixElement.height polyfill
if (!svgfecolormatrixelement.height) {
    // 在这里添加polyfill实现
    console.log('加载SVGFEColorMatrixElement.height polyfill');
}
```

