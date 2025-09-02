# SVGImageElement.height API 兼容性数据

## 基本信息

- **API名称**: `SVGImageElement.height`
- **MDN文档**: [SVGImageElement.height](https://developer.mozilla.org/docs/Web/API/SVGImageElement/height)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/embedded.html#__svg__SVGImageElement__height)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGImageElement.height 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGImageElement.height API');
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
// 检查SVGImageElement.height是否支持
function isSVGImageElementHeightSupported() {
    return 'height' in svgimageelement && typeof svgimageelement.height === 'function';
}

if (isSVGImageElementHeightSupported()) {
    console.log('SVGImageElement.height 支持');
    // 使用SVGImageElement.height
} else {
    console.log('SVGImageElement.height 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGImageElement.height polyfill
if (!svgimageelement.height) {
    // 在这里添加polyfill实现
    console.log('加载SVGImageElement.height polyfill');
}
```

