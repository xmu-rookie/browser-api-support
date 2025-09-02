# SVGFEGaussianBlurElement.x API 兼容性数据

## 基本信息

- **API名称**: `SVGFEGaussianBlurElement.x`
- **MDN文档**: [SVGFEGaussianBlurElement.x](https://developer.mozilla.org/docs/Web/API/SVGFEGaussianBlurElement/x)
- **规范文档**: [查看规范](https://drafts.fxtf.org/filter-effects/#dom-svgfilterprimitivestandardattributes-x)
- **标签**: `web-features:svg-filters`

## 使用示例

### 基本用法

```javascript
// SVGFEGaussianBlurElement.x 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGFEGaussianBlurElement.x API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 5 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 29 |  |
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

- **支持版本**: 29
- **支持版本**: 3
- **移除版本**: 22

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
// 检查SVGFEGaussianBlurElement.x是否支持
function isSVGFEGaussianBlurElementXSupported() {
    return 'x' in svgfegaussianblurelement && typeof svgfegaussianblurelement.x === 'function';
}

if (isSVGFEGaussianBlurElementXSupported()) {
    console.log('SVGFEGaussianBlurElement.x 支持');
    // 使用SVGFEGaussianBlurElement.x
} else {
    console.log('SVGFEGaussianBlurElement.x 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGFEGaussianBlurElement.x polyfill
if (!svgfegaussianblurelement.x) {
    // 在这里添加polyfill实现
    console.log('加载SVGFEGaussianBlurElement.x polyfill');
}
```

