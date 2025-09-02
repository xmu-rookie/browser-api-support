# SVGAnimationElement.getCurrentTime API 兼容性数据

## 基本信息

- **API名称**: `SVGAnimationElement.getCurrentTime`
- **MDN文档**: [SVGAnimationElement.getCurrentTime](https://developer.mozilla.org/docs/Web/API/SVGAnimationElement/getCurrentTime)
- **规范文档**: [查看规范](https://svgwg.org/specs/animations/#__svg__SVGAnimationElement__getCurrentTime)
- **标签**: `web-features:smil-svg-animations`

## 使用示例

### 基本用法

```javascript
// SVGAnimationElement.getCurrentTime 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGAnimationElement.getCurrentTime API');
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
// 检查SVGAnimationElement.getCurrentTime是否支持
function isSVGAnimationElementGetCurrentTimeSupported() {
    return 'getCurrentTime' in svganimationelement && typeof svganimationelement.getCurrentTime === 'function';
}

if (isSVGAnimationElementGetCurrentTimeSupported()) {
    console.log('SVGAnimationElement.getCurrentTime 支持');
    // 使用SVGAnimationElement.getCurrentTime
} else {
    console.log('SVGAnimationElement.getCurrentTime 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGAnimationElement.getCurrentTime polyfill
if (!svganimationelement.getCurrentTime) {
    // 在这里添加polyfill实现
    console.log('加载SVGAnimationElement.getCurrentTime polyfill');
}
```

