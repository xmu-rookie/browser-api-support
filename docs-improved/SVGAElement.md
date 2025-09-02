# SVGAElement API 兼容性数据

## 基本信息

- **API名称**: `SVGAElement`
- **MDN文档**: [SVGAElement](https://developer.mozilla.org/docs/Web/API/SVGAElement)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/linking.html#InterfaceSVGAElement)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGAElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGAElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3 |  |
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

- **支持版本**: 3

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
// 检查SVGAElement是否支持
function isSVGAElementSupported() {
    return 'SVGAElement' in window || typeof SVGAElement !== 'undefined';
}

if (isSVGAElementSupported()) {
    console.log('SVGAElement 支持');
    // 使用SVGAElement
} else {
    console.log('SVGAElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGAElement polyfill
if (!window.SVGAElement) {
    // 在这里添加polyfill实现
    console.log('加载SVGAElement polyfill');
}
```

