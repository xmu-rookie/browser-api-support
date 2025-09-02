# SVGTextPositioningElement.rotate API 兼容性数据

## 基本信息

- **API名称**: `SVGTextPositioningElement.rotate`
- **MDN文档**: [SVGTextPositioningElement.rotate](https://developer.mozilla.org/docs/Web/API/SVGTextPositioningElement/rotate)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/text.html#__svg__SVGTextPositioningElement__rotate)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGTextPositioningElement.rotate 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGTextPositioningElement.rotate API');
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

- **支持版本**: 1.5

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
// 检查SVGTextPositioningElement.rotate是否支持
function isSVGTextPositioningElementRotateSupported() {
    return 'rotate' in svgtextpositioningelement && typeof svgtextpositioningelement.rotate === 'function';
}

if (isSVGTextPositioningElementRotateSupported()) {
    console.log('SVGTextPositioningElement.rotate 支持');
    // 使用SVGTextPositioningElement.rotate
} else {
    console.log('SVGTextPositioningElement.rotate 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGTextPositioningElement.rotate polyfill
if (!svgtextpositioningelement.rotate) {
    // 在这里添加polyfill实现
    console.log('加载SVGTextPositioningElement.rotate polyfill');
}
```

