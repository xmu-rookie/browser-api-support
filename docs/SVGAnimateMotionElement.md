# SVGAnimateMotionElement API 兼容性数据

## 基本信息

- **API名称**: `SVGAnimateMotionElement`
- **MDN文档**: [SVGAnimateMotionElement](https://developer.mozilla.org/docs/Web/API/SVGAnimateMotionElement)
- **规范文档**: [查看规范](https://svgwg.org/specs/animations/#InterfaceSVGAnimateMotionElement)
- **标签**: `web-features:smil-svg-animations`

## 使用示例

### 基本用法

```javascript
// SVGAnimateMotionElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGAnimateMotionElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 19 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 19

### Firefox

- **支持版本**: 4

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGAnimateMotionElement是否支持
function isSVGAnimateMotionElementSupported() {
    return typeof SVGAnimateMotionElement !== 'undefined';
}

if (isSVGAnimateMotionElementSupported()) {
    console.log('SVGAnimateMotionElement 支持');
    // 使用SVGAnimateMotionElement
} else {
    console.log('SVGAnimateMotionElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGAnimateMotionElement polyfill
if (!window.SVGAnimateMotionElement) {
    // 在这里添加polyfill实现
    console.log('加载SVGAnimateMotionElement polyfill');
}
```

