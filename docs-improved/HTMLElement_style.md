# HTMLElement.style API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.style`
- **MDN文档**: [HTMLElement.style](https://developer.mozilla.org/docs/Web/API/HTMLElement/style)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#dom-elementcssinlinestyle-style)
- **标签**: `web-features:css-object-model`

## 使用示例

### 基本用法

```javascript
// HTMLElement.style 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.style API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 |  |
| Oculus | 同主版本 |  |
| Opera | 8 |  |
| Opera Android | 10.1 |  |
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

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 5.5

### Opera

- **支持版本**: 8

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.style是否支持
function isHTMLElementStyleSupported() {
    return 'style' in htmlelement && typeof htmlelement.style === 'function';
}

if (isHTMLElementStyleSupported()) {
    console.log('HTMLElement.style 支持');
    // 使用HTMLElement.style
} else {
    console.log('HTMLElement.style 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.style polyfill
if (!htmlelement.style) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.style polyfill');
}
```

