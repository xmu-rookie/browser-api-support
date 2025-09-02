# SVGFEConvolveMatrixElement.kernelMatrix API 兼容性数据

## 基本信息

- **API名称**: `SVGFEConvolveMatrixElement.kernelMatrix`
- **MDN文档**: [SVGFEConvolveMatrixElement.kernelMatrix](https://developer.mozilla.org/docs/Web/API/SVGFEConvolveMatrixElement/kernelMatrix)
- **规范文档**: [查看规范](https://drafts.fxtf.org/filter-effects/#dom-svgfeconvolvematrixelement-kernelmatrix)
- **标签**: `web-features:svg-filters`

## 使用示例

### 基本用法

```javascript
// SVGFEConvolveMatrixElement.kernelMatrix 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGFEConvolveMatrixElement.kernelMatrix API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 6 |  |
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

- **支持版本**: 6

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
// 检查SVGFEConvolveMatrixElement.kernelMatrix是否支持
function isSVGFEConvolveMatrixElementKernelMatrixSupported() {
    return 'kernelMatrix' in svgfeconvolvematrixelement && typeof svgfeconvolvematrixelement.kernelMatrix === 'function';
}

if (isSVGFEConvolveMatrixElementKernelMatrixSupported()) {
    console.log('SVGFEConvolveMatrixElement.kernelMatrix 支持');
    // 使用SVGFEConvolveMatrixElement.kernelMatrix
} else {
    console.log('SVGFEConvolveMatrixElement.kernelMatrix 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGFEConvolveMatrixElement.kernelMatrix polyfill
if (!svgfeconvolvematrixelement.kernelMatrix) {
    // 在这里添加polyfill实现
    console.log('加载SVGFEConvolveMatrixElement.kernelMatrix polyfill');
}
```

