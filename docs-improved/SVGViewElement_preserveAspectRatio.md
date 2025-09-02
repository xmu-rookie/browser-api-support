# SVGViewElement.preserveAspectRatio API 兼容性数据

## 基本信息

- **API名称**: `SVGViewElement.preserveAspectRatio`
- **MDN文档**: [SVGViewElement.preserveAspectRatio](https://developer.mozilla.org/docs/Web/API/SVGViewElement/preserveAspectRatio)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/types.html#__svg__SVGFitToViewBox__preserveAspectRatio)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGViewElement.preserveAspectRatio 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGViewElement.preserveAspectRatio API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 15 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 15

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGViewElement.preserveAspectRatio是否支持
function isSVGViewElementPreserveAspectRatioSupported() {
    return 'preserveAspectRatio' in svgviewelement && typeof svgviewelement.preserveAspectRatio === 'function';
}

if (isSVGViewElementPreserveAspectRatioSupported()) {
    console.log('SVGViewElement.preserveAspectRatio 支持');
    // 使用SVGViewElement.preserveAspectRatio
} else {
    console.log('SVGViewElement.preserveAspectRatio 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGViewElement.preserveAspectRatio polyfill
if (!svgviewelement.preserveAspectRatio) {
    // 在这里添加polyfill实现
    console.log('加载SVGViewElement.preserveAspectRatio polyfill');
}
```

