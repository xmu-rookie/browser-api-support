# SVGAnimatedRect.animVal API 兼容性数据

## 基本信息

- **API名称**: `SVGAnimatedRect.animVal`
- **MDN文档**: [SVGAnimatedRect.animVal](https://developer.mozilla.org/docs/Web/API/SVGAnimatedRect/animVal)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/types.html#__svg__SVGAnimatedRect__animVal)
- **标签**: `web-features:smil-svg-animations`

## 使用示例

### 基本用法

```javascript
// SVGAnimatedRect.animVal 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGAnimatedRect.animVal API');
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
// 检查SVGAnimatedRect.animVal是否支持
function isSVGAnimatedRectAnimValSupported() {
    return 'animVal' in svganimatedrect && typeof svganimatedrect.animVal === 'function';
}

if (isSVGAnimatedRectAnimValSupported()) {
    console.log('SVGAnimatedRect.animVal 支持');
    // 使用SVGAnimatedRect.animVal
} else {
    console.log('SVGAnimatedRect.animVal 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGAnimatedRect.animVal polyfill
if (!svganimatedrect.animVal) {
    // 在这里添加polyfill实现
    console.log('加载SVGAnimatedRect.animVal polyfill');
}
```

