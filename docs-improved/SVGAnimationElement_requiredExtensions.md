# SVGAnimationElement.requiredExtensions API 兼容性数据

## 基本信息

- **API名称**: `SVGAnimationElement.requiredExtensions`
- **MDN文档**: [SVGAnimationElement.requiredExtensions](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement/requiredExtensions)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/types.html#__svg__SVGTests__requiredExtensions)
- **标签**: `web-features:smil-svg-animations`

## 使用示例

### 基本用法

```javascript
// SVGAnimationElement.requiredExtensions 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGAnimationElement.requiredExtensions API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 12 |  |
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

- **支持版本**: 2

### Firefox

- **支持版本**: 12

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
// 检查SVGAnimationElement.requiredExtensions是否支持
function isSVGAnimationElementRequiredExtensionsSupported() {
    return 'requiredExtensions' in svganimationelement && typeof svganimationelement.requiredExtensions === 'function';
}

if (isSVGAnimationElementRequiredExtensionsSupported()) {
    console.log('SVGAnimationElement.requiredExtensions 支持');
    // 使用SVGAnimationElement.requiredExtensions
} else {
    console.log('SVGAnimationElement.requiredExtensions 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGAnimationElement.requiredExtensions polyfill
if (!svganimationelement.requiredExtensions) {
    // 在这里添加polyfill实现
    console.log('加载SVGAnimationElement.requiredExtensions polyfill');
}
```

