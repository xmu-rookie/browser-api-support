# SVGFESpecularLightingElement.kernelUnitLengthY API 兼容性数据

## 基本信息

- **API名称**: `SVGFESpecularLightingElement.kernelUnitLengthY`
- **MDN文档**: [SVGFESpecularLightingElement.kernelUnitLengthY](https://developer.mozilla.org/docs/Web/API/SVGFESpecularLightingElement/kernelUnitLengthY)
- **规范文档**: [查看规范](https://drafts.fxtf.org/filter-effects/#dom-svgfespecularlightingelement-kernelunitlengthy)
- **标签**: `web-features:svg-filters`

## 使用示例

### 基本用法

```javascript
// SVGFESpecularLightingElement.kernelUnitLengthY 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGFESpecularLightingElement.kernelUnitLengthY API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 45 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 45

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3

### Internet Explorer

- **支持版本**: 10

### Safari

- **支持版本**: 17.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGFESpecularLightingElement.kernelUnitLengthY是否支持
function isSVGFESpecularLightingElementKernelUnitLengthYSupported() {
    return 'kernelUnitLengthY' in svgfespecularlightingelement && typeof svgfespecularlightingelement.kernelUnitLengthY === 'function';
}

if (isSVGFESpecularLightingElementKernelUnitLengthYSupported()) {
    console.log('SVGFESpecularLightingElement.kernelUnitLengthY 支持');
    // 使用SVGFESpecularLightingElement.kernelUnitLengthY
} else {
    console.log('SVGFESpecularLightingElement.kernelUnitLengthY 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGFESpecularLightingElement.kernelUnitLengthY polyfill
if (!svgfespecularlightingelement.kernelUnitLengthY) {
    // 在这里添加polyfill实现
    console.log('加载SVGFESpecularLightingElement.kernelUnitLengthY polyfill');
}
```

