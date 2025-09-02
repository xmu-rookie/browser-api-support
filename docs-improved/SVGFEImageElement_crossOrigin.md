# SVGFEImageElement.crossOrigin API 兼容性数据

## 基本信息

- **API名称**: `SVGFEImageElement.crossOrigin`
- **MDN文档**: [SVGFEImageElement.crossOrigin](https://developer.mozilla.org/docs/Web/API/SVGFEImageElement)
- **规范文档**: [查看规范](https://drafts.fxtf.org/filter-effects/#element-attrdef-feimage-crossorigin)
- **标签**: `web-features:svg-filters`

## 使用示例

### 基本用法

```javascript
// SVGFEImageElement.crossOrigin 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGFEImageElement.crossOrigin API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 114 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 114

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGFEImageElement.crossOrigin是否支持
function isSVGFEImageElementCrossOriginSupported() {
    return 'crossOrigin' in svgfeimageelement && typeof svgfeimageelement.crossOrigin === 'function';
}

if (isSVGFEImageElementCrossOriginSupported()) {
    console.log('SVGFEImageElement.crossOrigin 支持');
    // 使用SVGFEImageElement.crossOrigin
} else {
    console.log('SVGFEImageElement.crossOrigin 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGFEImageElement.crossOrigin polyfill
if (!svgfeimageelement.crossOrigin) {
    // 在这里添加polyfill实现
    console.log('加载SVGFEImageElement.crossOrigin polyfill');
}
```

