# SVGElement API 兼容性数据

## 基本信息

- **API名称**: `SVGElement`
- **MDN文档**: [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/types.html#InterfaceSVGElement)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGElement API');
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
// 检查SVGElement是否支持
function isSVGElementSupported() {
    return 'SVGElement' in window || typeof SVGElement !== 'undefined';
}

if (isSVGElementSupported()) {
    console.log('SVGElement 支持');
    // 使用SVGElement
} else {
    console.log('SVGElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGElement polyfill
if (!window.SVGElement) {
    // 在这里添加polyfill实现
    console.log('加载SVGElement polyfill');
}
```

