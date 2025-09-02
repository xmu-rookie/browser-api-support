# HTMLTextAreaElement.autocomplete API 兼容性数据

## 基本信息

- **API名称**: `HTMLTextAreaElement.autocomplete`
- **MDN文档**: [HTMLTextAreaElement.autocomplete](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement/autocomplete)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-fe-autocomplete)
- **标签**: `web-features:textarea`

## 使用示例

### 基本用法

```javascript
// HTMLTextAreaElement.autocomplete 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLTextAreaElement.autocomplete API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 66 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 59 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 9.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 66

### Firefox

- **支持版本**: 59

### Safari

- **支持版本**: 9.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLTextAreaElement.autocomplete是否支持
function isHTMLTextAreaElementAutocompleteSupported() {
    return 'autocomplete' in htmltextareaelement && typeof htmltextareaelement.autocomplete === 'function';
}

if (isHTMLTextAreaElementAutocompleteSupported()) {
    console.log('HTMLTextAreaElement.autocomplete 支持');
    // 使用HTMLTextAreaElement.autocomplete
} else {
    console.log('HTMLTextAreaElement.autocomplete 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLTextAreaElement.autocomplete polyfill
if (!htmltextareaelement.autocomplete) {
    // 在这里添加polyfill实现
    console.log('加载HTMLTextAreaElement.autocomplete polyfill');
}
```

