# SVGFESpotLightElement.limitingConeAngle API 兼容性数据

## 基本信息

- **API名称**: `SVGFESpotLightElement.limitingConeAngle`
- **MDN文档**: [SVGFESpotLightElement.limitingConeAngle](https://developer.mozilla.org/docs/Web/API/SVGFESpotLightElement/limitingConeAngle)
- **规范文档**: [查看规范](https://drafts.fxtf.org/filter-effects/#dom-svgfespotlightelement-limitingconeangle)
- **标签**: `web-features:svg-filters`

## 使用示例

### 基本用法

```javascript
// SVGFESpotLightElement.limitingConeAngle 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGFESpotLightElement.limitingConeAngle API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 5 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 5

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGFESpotLightElement.limitingConeAngle是否支持
function isSVGFESpotLightElementLimitingConeAngleSupported() {
    return 'limitingConeAngle' in svgfespotlightelement && typeof svgfespotlightelement.limitingConeAngle === 'function';
}

if (isSVGFESpotLightElementLimitingConeAngleSupported()) {
    console.log('SVGFESpotLightElement.limitingConeAngle 支持');
    // 使用SVGFESpotLightElement.limitingConeAngle
} else {
    console.log('SVGFESpotLightElement.limitingConeAngle 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGFESpotLightElement.limitingConeAngle polyfill
if (!svgfespotlightelement.limitingConeAngle) {
    // 在这里添加polyfill实现
    console.log('加载SVGFESpotLightElement.limitingConeAngle polyfill');
}
```

