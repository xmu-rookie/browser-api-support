# HTMLLinkElement.sizes API 兼容性数据

## 基本信息

- **API名称**: `HTMLLinkElement.sizes`
- **MDN文档**: [HTMLLinkElement.sizes](https://developer.mozilla.org/docs/Web/API/HTMLLinkElement/sizes)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/semantics.html#dom-link-sizes)
- **标签**: `web-features:link`

## 使用示例

### 基本用法

```javascript
// HTMLLinkElement.sizes 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLLinkElement.sizes API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 15 | Before Chrome 50, this property returned the deprecated child `DOMSettableTokenList` instead of `DOM... |
| Chrome Android | 同主版本 |  |
| Edge | 79 |  |
| Firefox | 31 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 4.4 | Before WebView 50, this property returned the deprecated child `DOMSettableTokenList` instead of `DO... |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 15
- **注意事项**:
  - Before Chrome 50, this property returned the deprecated child `DOMSettableTokenList` instead of `DOMTokenList`.

### Edge

- **支持版本**: 79

### Firefox

- **支持版本**: 31

### Safari

- **支持版本**: 6

### WebView Android

- **支持版本**: 4.4
- **注意事项**:
  - Before WebView 50, this property returned the deprecated child `DOMSettableTokenList` instead of `DOMTokenList`.

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLLinkElement.sizes是否支持
function isHTMLLinkElementSizesSupported() {
    return 'sizes' in htmllinkelement && typeof htmllinkelement.sizes === 'function';
}

if (isHTMLLinkElementSizesSupported()) {
    console.log('HTMLLinkElement.sizes 支持');
    // 使用HTMLLinkElement.sizes
} else {
    console.log('HTMLLinkElement.sizes 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLLinkElement.sizes polyfill
if (!htmllinkelement.sizes) {
    // 在这里添加polyfill实现
    console.log('加载HTMLLinkElement.sizes polyfill');
}
```

