# SVGSVGElement.height API 兼容性数据

## 基本信息

- **API名称**: `SVGSVGElement.height`
- **MDN文档**: [SVGSVGElement.height](https://developer.mozilla.org/docs/Web/API/SVGSVGElement/height)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/struct.html#__svg__SVGSVGElement__height)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGSVGElement.height 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGSVGElement.height API');
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
// 检查SVGSVGElement.height是否支持
function isSVGSVGElementHeightSupported() {
    return 'height' in svgsvgelement && typeof svgsvgelement.height === 'function';
}

if (isSVGSVGElementHeightSupported()) {
    console.log('SVGSVGElement.height 支持');
    // 使用SVGSVGElement.height
} else {
    console.log('SVGSVGElement.height 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGSVGElement.height polyfill
if (!svgsvgelement.height) {
    // 在这里添加polyfill实现
    console.log('加载SVGSVGElement.height polyfill');
}
```

