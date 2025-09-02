# SVGFEFuncBElement API 兼容性数据

## 基本信息

- **API名称**: `SVGFEFuncBElement`
- **MDN文档**: [SVGFEFuncBElement](https://developer.mozilla.org/docs/Web/API/SVGFEFuncBElement)
- **规范文档**: [查看规范](https://drafts.fxtf.org/filter-effects/#InterfaceSVGFEFuncBElement)
- **标签**: `web-features:svg-filters`

## 使用示例

### 基本用法

```javascript
// SVGFEFuncBElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGFEFuncBElement API');
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
| oculus | 同主版本 |  |
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
// 检查SVGFEFuncBElement是否支持
function isSVGFEFuncBElementSupported() {
    return typeof SVGFEFuncBElement !== 'undefined';
}

if (isSVGFEFuncBElementSupported()) {
    console.log('SVGFEFuncBElement 支持');
    // 使用SVGFEFuncBElement
} else {
    console.log('SVGFEFuncBElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGFEFuncBElement polyfill
if (!window.SVGFEFuncBElement) {
    // 在这里添加polyfill实现
    console.log('加载SVGFEFuncBElement polyfill');
}
```

