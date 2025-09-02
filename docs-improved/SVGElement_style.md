# SVGElement.style API 兼容性数据

## 基本信息

- **API名称**: `SVGElement.style`
- **MDN文档**: [SVGElement.style](https://developer.mozilla.org/docs/Web/API/SVGElement/style)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#dom-elementcssinlinestyle-style)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGElement.style 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGElement.style API');
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
| WebView Android | 同主版本 |  |
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

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGElement.style是否支持
function isSVGElementStyleSupported() {
    return 'style' in svgelement && typeof svgelement.style === 'function';
}

if (isSVGElementStyleSupported()) {
    console.log('SVGElement.style 支持');
    // 使用SVGElement.style
} else {
    console.log('SVGElement.style 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGElement.style polyfill
if (!svgelement.style) {
    // 在这里添加polyfill实现
    console.log('加载SVGElement.style polyfill');
}
```

