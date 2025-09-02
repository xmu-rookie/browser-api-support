# SVGFEImageElement.href API 兼容性数据

## 基本信息

- **API名称**: `SVGFEImageElement.href`
- **MDN文档**: [SVGFEImageElement.href](https://developer.mozilla.org/docs/Web/API/SVGFEImageElement/href)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/types.html#__svg__SVGURIReference__href)
- **标签**: `web-features:svg-filters`

## 使用示例

### 基本用法

```javascript
// SVGFEImageElement.href 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGFEImageElement.href API');
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
// 检查SVGFEImageElement.href是否支持
function isSVGFEImageElementHrefSupported() {
    return 'href' in svgfeimageelement && typeof svgfeimageelement.href === 'function';
}

if (isSVGFEImageElementHrefSupported()) {
    console.log('SVGFEImageElement.href 支持');
    // 使用SVGFEImageElement.href
} else {
    console.log('SVGFEImageElement.href 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGFEImageElement.href polyfill
if (!svgfeimageelement.href) {
    // 在这里添加polyfill实现
    console.log('加载SVGFEImageElement.href polyfill');
}
```

