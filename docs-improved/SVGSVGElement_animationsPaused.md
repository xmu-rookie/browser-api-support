# SVGSVGElement.animationsPaused API 兼容性数据

## 基本信息

- **API名称**: `SVGSVGElement.animationsPaused`
- **MDN文档**: [SVGSVGElement.animationsPaused](https://developer.mozilla.org/docs/Web/API/SVGSVGElement/animationsPaused)
- **规范文档**: [查看规范](https://svgwg.org/specs/animations/#__svg__SVGSVGElement__animationsPaused)
- **标签**: `web-features:smil-svg-animations`

## 使用示例

### 基本用法

```javascript
// SVGSVGElement.animationsPaused 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGSVGElement.animationsPaused API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 1.5 |  |
| Firefox Android | 同主版本 |  |
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

### Firefox

- **支持版本**: 1.5

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
// 检查SVGSVGElement.animationsPaused是否支持
function isSVGSVGElementAnimationsPausedSupported() {
    return 'animationsPaused' in svgsvgelement && typeof svgsvgelement.animationsPaused === 'function';
}

if (isSVGSVGElementAnimationsPausedSupported()) {
    console.log('SVGSVGElement.animationsPaused 支持');
    // 使用SVGSVGElement.animationsPaused
} else {
    console.log('SVGSVGElement.animationsPaused 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGSVGElement.animationsPaused polyfill
if (!svgsvgelement.animationsPaused) {
    // 在这里添加polyfill实现
    console.log('加载SVGSVGElement.animationsPaused polyfill');
}
```

