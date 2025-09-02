# SVGLinearGradientElement.y2 API 兼容性数据

## 基本信息

- **API名称**: `SVGLinearGradientElement.y2`
- **MDN文档**: [SVGLinearGradientElement.y2](https://developer.mozilla.org/docs/Web/API/SVGLinearGradientElement/y2)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/pservers.html#__svg__SVGLinearGradientElement__y2)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGLinearGradientElement.y2 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGLinearGradientElement.y2 API');
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
// 检查SVGLinearGradientElement.y2是否支持
function isSVGLinearGradientElementY2Supported() {
    return 'y2' in svglineargradientelement && typeof svglineargradientelement.y2 === 'function';
}

if (isSVGLinearGradientElementY2Supported()) {
    console.log('SVGLinearGradientElement.y2 支持');
    // 使用SVGLinearGradientElement.y2
} else {
    console.log('SVGLinearGradientElement.y2 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGLinearGradientElement.y2 polyfill
if (!svglineargradientelement.y2) {
    // 在这里添加polyfill实现
    console.log('加载SVGLinearGradientElement.y2 polyfill');
}
```

