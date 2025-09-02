# SVGTransform.matrix API 兼容性数据

## 基本信息

- **API名称**: `SVGTransform.matrix`
- **MDN文档**: [SVGTransform.matrix](https://developer.mozilla.org/docs/Web/API/SVGTransform/matrix)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/coords.html#__svg__SVGTransform__matrix)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGTransform.matrix 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGTransform.matrix API');
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
// 检查SVGTransform.matrix是否支持
function isSVGTransformMatrixSupported() {
    return 'matrix' in svgtransform && typeof svgtransform.matrix === 'function';
}

if (isSVGTransformMatrixSupported()) {
    console.log('SVGTransform.matrix 支持');
    // 使用SVGTransform.matrix
} else {
    console.log('SVGTransform.matrix 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGTransform.matrix polyfill
if (!svgtransform.matrix) {
    // 在这里添加polyfill实现
    console.log('加载SVGTransform.matrix polyfill');
}
```

