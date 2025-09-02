# SVGAnimatedInteger API 兼容性数据

## 基本信息

- **API名称**: `SVGAnimatedInteger`
- **MDN文档**: [SVGAnimatedInteger](https://developer.mozilla.org/docs/Web/API/SVGAnimatedInteger)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/types.html#InterfaceSVGAnimatedInteger)
- **标签**: `web-features:smil-svg-animations`

## 使用示例

### 基本用法

```javascript
// SVGAnimatedInteger 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGAnimatedInteger API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 6 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 5 |  |
| Safari iOS | 4 |  |
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

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGAnimatedInteger是否支持
function isSVGAnimatedIntegerSupported() {
    return typeof SVGAnimatedInteger !== 'undefined';
}

if (isSVGAnimatedIntegerSupported()) {
    console.log('SVGAnimatedInteger 支持');
    // 使用SVGAnimatedInteger
} else {
    console.log('SVGAnimatedInteger 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGAnimatedInteger polyfill
if (!window.SVGAnimatedInteger) {
    // 在这里添加polyfill实现
    console.log('加载SVGAnimatedInteger polyfill');
}
```

