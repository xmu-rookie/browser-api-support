# SVGFilterElement.filterUnits API 兼容性数据

## 基本信息

- **API名称**: `SVGFilterElement.filterUnits`
- **MDN文档**: [SVGFilterElement.filterUnits](https://developer.mozilla.org/docs/Web/API/SVGFilterElement/filterUnits)
- **规范文档**: [查看规范](https://drafts.fxtf.org/filter-effects/#dom-svgfilterelement-filterunits)
- **标签**: `web-features:svg-filters`

## 使用示例

### 基本用法

```javascript
// SVGFilterElement.filterUnits 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGFilterElement.filterUnits API');
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
// 检查SVGFilterElement.filterUnits是否支持
function isSVGFilterElementFilterUnitsSupported() {
    return 'filterUnits' in svgfilterelement && typeof svgfilterelement.filterUnits === 'function';
}

if (isSVGFilterElementFilterUnitsSupported()) {
    console.log('SVGFilterElement.filterUnits 支持');
    // 使用SVGFilterElement.filterUnits
} else {
    console.log('SVGFilterElement.filterUnits 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGFilterElement.filterUnits polyfill
if (!svgfilterelement.filterUnits) {
    // 在这里添加polyfill实现
    console.log('加载SVGFilterElement.filterUnits polyfill');
}
```

