# SVGTransform.setSkewX API 兼容性数据

## 基本信息

- **API名称**: `SVGTransform.setSkewX`
- **MDN文档**: [SVGTransform.setSkewX](https://developer.mozilla.org/docs/Web/API/SVGTransform/setSkewX)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/coords.html#__svg__SVGTransform__setSkewX)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGTransform.setSkewX 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGTransform.setSkewX API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1.5

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGTransform.setSkewX是否支持
function isSVGTransformSetSkewXSupported() {
    return 'setSkewX' in svgtransform && typeof svgtransform.setSkewX === 'function';
}

if (isSVGTransformSetSkewXSupported()) {
    console.log('SVGTransform.setSkewX 支持');
    // 使用SVGTransform.setSkewX
} else {
    console.log('SVGTransform.setSkewX 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGTransform.setSkewX polyfill
if (!svgtransform.setSkewX) {
    // 在这里添加polyfill实现
    console.log('加载SVGTransform.setSkewX polyfill');
}
```

