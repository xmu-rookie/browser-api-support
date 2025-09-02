# SVGImageElement.preserveAspectRatio API 兼容性数据

## 基本信息

- **API名称**: `SVGImageElement.preserveAspectRatio`
- **MDN文档**: [SVGImageElement.preserveAspectRatio](https://developer.mozilla.org/docs/Web/API/SVGImageElement/preserveAspectRatio)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/coords.html#PreserveAspectRatioAttribute)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGImageElement.preserveAspectRatio 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGImageElement.preserveAspectRatio API');
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
// 检查SVGImageElement.preserveAspectRatio是否支持
function isSVGImageElementPreserveAspectRatioSupported() {
    return 'preserveAspectRatio' in svgimageelement && typeof svgimageelement.preserveAspectRatio === 'function';
}

if (isSVGImageElementPreserveAspectRatioSupported()) {
    console.log('SVGImageElement.preserveAspectRatio 支持');
    // 使用SVGImageElement.preserveAspectRatio
} else {
    console.log('SVGImageElement.preserveAspectRatio 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGImageElement.preserveAspectRatio polyfill
if (!svgimageelement.preserveAspectRatio) {
    // 在这里添加polyfill实现
    console.log('加载SVGImageElement.preserveAspectRatio polyfill');
}
```

