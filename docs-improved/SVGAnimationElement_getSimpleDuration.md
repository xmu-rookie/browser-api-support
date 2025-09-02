# SVGAnimationElement.getSimpleDuration API 兼容性数据

## 基本信息

- **API名称**: `SVGAnimationElement.getSimpleDuration`
- **MDN文档**: [SVGAnimationElement.getSimpleDuration](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement/getSimpleDuration)
- **规范文档**: [查看规范](https://svgwg.org/specs/animations/#__svg__SVGAnimationElement__getSimpleDuration)
- **标签**: `web-features:smil-svg-animations`

## 使用示例

### 基本用法

```javascript
// SVGAnimationElement.getSimpleDuration 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGAnimationElement.getSimpleDuration API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 2

### Firefox

- **支持版本**: 4

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 4

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGAnimationElement.getSimpleDuration是否支持
function isSVGAnimationElementGetSimpleDurationSupported() {
    return 'getSimpleDuration' in svganimationelement && typeof svganimationelement.getSimpleDuration === 'function';
}

if (isSVGAnimationElementGetSimpleDurationSupported()) {
    console.log('SVGAnimationElement.getSimpleDuration 支持');
    // 使用SVGAnimationElement.getSimpleDuration
} else {
    console.log('SVGAnimationElement.getSimpleDuration 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGAnimationElement.getSimpleDuration polyfill
if (!svganimationelement.getSimpleDuration) {
    // 在这里添加polyfill实现
    console.log('加载SVGAnimationElement.getSimpleDuration polyfill');
}
```

