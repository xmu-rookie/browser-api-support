# HTMLElement.outerText API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.outerText`
- **MDN文档**: [HTMLElement.outerText](https://developer.mozilla.org/docs/Web/API/HTMLElement/outerText)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dom.html#dom-outertext)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// HTMLElement.outerText 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.outerText API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 98 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1.3 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 1 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 98

### Internet Explorer

- **支持版本**: 5.5

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1.3

### WebView Android

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.outerText是否支持
function isHTMLElementOuterTextSupported() {
    return 'outerText' in htmlelement && typeof htmlelement.outerText === 'function';
}

if (isHTMLElementOuterTextSupported()) {
    console.log('HTMLElement.outerText 支持');
    // 使用HTMLElement.outerText
} else {
    console.log('HTMLElement.outerText 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.outerText polyfill
if (!htmlelement.outerText) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.outerText polyfill');
}
```

