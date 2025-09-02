# HTMLSelectElement API 兼容性数据

## 基本信息

- **API名称**: `HTMLSelectElement`
- **MDN文档**: [HTMLSelectElement](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-elements.html#htmlselectelement)
- **标签**: `web-features:select`

## 使用示例

### 基本用法

```javascript
// HTMLSelectElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLSelectElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 | You should watch for [change](https://developer.mozilla.org/docs/Web/Events/change) events on [`<select>`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) instead of watching `<option>` elements for events. See [bug 1090602](https://bugzil.la/1090602) and [Multiprocess Firefox Web content compatibility](https://developer.mozilla.org/docs/Mozilla/Firefox/Multiprocess_Firefox/Web_content_compatibility) for details. |
| Firefox Android | 4 |  |
| Internet Explorer | 1 |  |
| oculus | 同主版本 |  |
| Opera | 2 |  |
| Opera Android | 10.1 |  |
| Safari | 1 |  |
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

- **支持版本**: 1
- **注意事项**:
  - You should watch for [change](https://developer.mozilla.org/docs/Web/Events/change) events on [`<select>`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/select) instead of watching `<option>` elements for events. See [bug 1090602](https://bugzil.la/1090602) and [Multiprocess Firefox Web content compatibility](https://developer.mozilla.org/docs/Mozilla/Firefox/Multiprocess_Firefox/Web_content_compatibility) for details.

### Firefox Android

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 1

### Opera

- **支持版本**: 2

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLSelectElement是否支持
function isHTMLSelectElementSupported() {
    return typeof HTMLSelectElement !== 'undefined';
}

if (isHTMLSelectElementSupported()) {
    console.log('HTMLSelectElement 支持');
    // 使用HTMLSelectElement
} else {
    console.log('HTMLSelectElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLSelectElement polyfill
if (!window.HTMLSelectElement) {
    // 在这里添加polyfill实现
    console.log('加载HTMLSelectElement polyfill');
}
```

