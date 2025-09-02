# SVGForeignObjectElement.y API 兼容性数据

## 基本信息

- **API名称**: `SVGForeignObjectElement.y`
- **MDN文档**: [SVGForeignObjectElement.y](https://developer.mozilla.org/docs/Web/API/SVGForeignObjectElement/y)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/embedded.html#__svg__SVGForeignObjectElement__y)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGForeignObjectElement.y 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGForeignObjectElement.y API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3.1

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGForeignObjectElement.y是否支持
function isSVGForeignObjectElementYSupported() {
    return 'y' in svgforeignobjectelement && typeof svgforeignobjectelement.y === 'function';
}

if (isSVGForeignObjectElementYSupported()) {
    console.log('SVGForeignObjectElement.y 支持');
    // 使用SVGForeignObjectElement.y
} else {
    console.log('SVGForeignObjectElement.y 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGForeignObjectElement.y polyfill
if (!svgforeignobjectelement.y) {
    // 在这里添加polyfill实现
    console.log('加载SVGForeignObjectElement.y polyfill');
}
```

