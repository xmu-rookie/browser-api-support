# SVGImageElement.crossOrigin API 兼容性数据

## 基本信息

- **API名称**: `SVGImageElement.crossOrigin`
- **MDN文档**: [SVGImageElement.crossOrigin](https://developer.mozilla.org/docs/Web/API/SVGImageElement/crossOrigin)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/embedded.html#__svg__SVGImageElement__crossOrigin)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGImageElement.crossOrigin 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGImageElement.crossOrigin API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 118 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 114 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17.2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 118

### Firefox

- **支持版本**: 114

### Safari

- **支持版本**: 17.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGImageElement.crossOrigin是否支持
function isSVGImageElementCrossOriginSupported() {
    return 'crossOrigin' in svgimageelement && typeof svgimageelement.crossOrigin === 'function';
}

if (isSVGImageElementCrossOriginSupported()) {
    console.log('SVGImageElement.crossOrigin 支持');
    // 使用SVGImageElement.crossOrigin
} else {
    console.log('SVGImageElement.crossOrigin 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGImageElement.crossOrigin polyfill
if (!svgimageelement.crossOrigin) {
    // 在这里添加polyfill实现
    console.log('加载SVGImageElement.crossOrigin polyfill');
}
```

