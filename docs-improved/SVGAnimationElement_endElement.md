# SVGAnimationElement.endElement API 兼容性数据

## 基本信息

- **API名称**: `SVGAnimationElement.endElement`
- **MDN文档**: [SVGAnimationElement.endElement](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement/endElement)
- **规范文档**: [查看规范](https://svgwg.org/specs/animations/#__svg__SVGAnimationElement__endElement)
- **标签**: `web-features:smil-svg-animations`

## 使用示例

### 基本用法

```javascript
// SVGAnimationElement.endElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGAnimationElement.endElement API');
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
// 检查SVGAnimationElement.endElement是否支持
function isSVGAnimationElementEndElementSupported() {
    return 'endElement' in svganimationelement && typeof svganimationelement.endElement === 'function';
}

if (isSVGAnimationElementEndElementSupported()) {
    console.log('SVGAnimationElement.endElement 支持');
    // 使用SVGAnimationElement.endElement
} else {
    console.log('SVGAnimationElement.endElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGAnimationElement.endElement polyfill
if (!svganimationelement.endElement) {
    // 在这里添加polyfill实现
    console.log('加载SVGAnimationElement.endElement polyfill');
}
```

