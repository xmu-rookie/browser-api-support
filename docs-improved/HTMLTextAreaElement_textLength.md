# HTMLTextAreaElement.textLength API 兼容性数据

## 基本信息

- **API名称**: `HTMLTextAreaElement.textLength`
- **MDN文档**: [HTMLTextAreaElement.textLength](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement/textLength)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-elements.html#dom-textarea-textlength)
- **标签**: `web-features:textarea`

## 使用示例

### 基本用法

```javascript
// HTMLTextAreaElement.textLength 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLTextAreaElement.textLength API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 5 |  |
| Safari iOS | 4 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 1

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLTextAreaElement.textLength是否支持
function isHTMLTextAreaElementTextLengthSupported() {
    return 'textLength' in htmltextareaelement && typeof htmltextareaelement.textLength === 'function';
}

if (isHTMLTextAreaElementTextLengthSupported()) {
    console.log('HTMLTextAreaElement.textLength 支持');
    // 使用HTMLTextAreaElement.textLength
} else {
    console.log('HTMLTextAreaElement.textLength 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLTextAreaElement.textLength polyfill
if (!htmltextareaelement.textLength) {
    // 在这里添加polyfill实现
    console.log('加载HTMLTextAreaElement.textLength polyfill');
}
```

