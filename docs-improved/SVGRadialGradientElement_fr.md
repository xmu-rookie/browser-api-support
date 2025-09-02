# SVGRadialGradientElement.fr API 兼容性数据

## 基本信息

- **API名称**: `SVGRadialGradientElement.fr`
- **MDN文档**: [SVGRadialGradientElement.fr](https://developer.mozilla.org/docs/Web/API/SVGRadialGradientElement/fr)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/pservers.html#__svg__SVGRadialGradientElement__fr)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGRadialGradientElement.fr 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGRadialGradientElement.fr API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 24 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 55 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 24

### Firefox

- **支持版本**: 55

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGRadialGradientElement.fr是否支持
function isSVGRadialGradientElementFrSupported() {
    return 'fr' in svgradialgradientelement && typeof svgradialgradientelement.fr === 'function';
}

if (isSVGRadialGradientElementFrSupported()) {
    console.log('SVGRadialGradientElement.fr 支持');
    // 使用SVGRadialGradientElement.fr
} else {
    console.log('SVGRadialGradientElement.fr 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGRadialGradientElement.fr polyfill
if (!svgradialgradientelement.fr) {
    // 在这里添加polyfill实现
    console.log('加载SVGRadialGradientElement.fr polyfill');
}
```

