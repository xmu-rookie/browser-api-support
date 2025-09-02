# SVGMaskElement.maskUnits API 兼容性数据

## 基本信息

- **API名称**: `SVGMaskElement.maskUnits`
- **MDN文档**: [SVGMaskElement.maskUnits](https://developer.mozilla.org/docs/Web/API/SVGMaskElement/maskUnits)
- **规范文档**: [查看规范](https://drafts.fxtf.org/css-masking/#dom-svgmaskelement-maskunits)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGMaskElement.maskUnits 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGMaskElement.maskUnits API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3.1

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGMaskElement.maskUnits是否支持
function isSVGMaskElementMaskUnitsSupported() {
    return 'maskUnits' in svgmaskelement && typeof svgmaskelement.maskUnits === 'function';
}

if (isSVGMaskElementMaskUnitsSupported()) {
    console.log('SVGMaskElement.maskUnits 支持');
    // 使用SVGMaskElement.maskUnits
} else {
    console.log('SVGMaskElement.maskUnits 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGMaskElement.maskUnits polyfill
if (!svgmaskelement.maskUnits) {
    // 在这里添加polyfill实现
    console.log('加载SVGMaskElement.maskUnits polyfill');
}
```

