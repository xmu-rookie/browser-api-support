# SVGFEDropShadowElement.stdDeviationY API 兼容性数据

## 基本信息

- **API名称**: `SVGFEDropShadowElement.stdDeviationY`
- **MDN文档**: [SVGFEDropShadowElement.stdDeviationY](https://developer.mozilla.org/docs/Web/API/SVGFEDropShadowElement/stdDeviationY)
- **规范文档**: [查看规范](https://drafts.fxtf.org/filter-effects/#dom-svgfedropshadowelement-stddeviationy)
- **标签**: `web-features:svg-filters`

## 使用示例

### 基本用法

```javascript
// SVGFEDropShadowElement.stdDeviationY 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGFEDropShadowElement.stdDeviationY API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 13 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 30 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 13

### Firefox

- **支持版本**: 30

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGFEDropShadowElement.stdDeviationY是否支持
function isSVGFEDropShadowElementStdDeviationYSupported() {
    return 'stdDeviationY' in svgfedropshadowelement && typeof svgfedropshadowelement.stdDeviationY === 'function';
}

if (isSVGFEDropShadowElementStdDeviationYSupported()) {
    console.log('SVGFEDropShadowElement.stdDeviationY 支持');
    // 使用SVGFEDropShadowElement.stdDeviationY
} else {
    console.log('SVGFEDropShadowElement.stdDeviationY 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGFEDropShadowElement.stdDeviationY polyfill
if (!svgfedropshadowelement.stdDeviationY) {
    // 在这里添加polyfill实现
    console.log('加载SVGFEDropShadowElement.stdDeviationY polyfill');
}
```

