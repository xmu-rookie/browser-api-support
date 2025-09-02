# HTMLTextAreaElement.selectionStart API 兼容性数据

## 基本信息

- **API名称**: `HTMLTextAreaElement.selectionStart`
- **MDN文档**: [HTMLTextAreaElement.selectionStart](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement/selectionStart)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-textarea/input-selectionstart)
- **标签**: `web-features:textarea`

## 使用示例

### 基本用法

```javascript
// HTMLTextAreaElement.selectionStart 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLTextAreaElement.selectionStart API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1.3 |  |
| Safari iOS | 同主版本 |  |
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

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1.3

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLTextAreaElement.selectionStart是否支持
function isHTMLTextAreaElementSelectionStartSupported() {
    return 'selectionStart' in htmltextareaelement && typeof htmltextareaelement.selectionStart === 'function';
}

if (isHTMLTextAreaElementSelectionStartSupported()) {
    console.log('HTMLTextAreaElement.selectionStart 支持');
    // 使用HTMLTextAreaElement.selectionStart
} else {
    console.log('HTMLTextAreaElement.selectionStart 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLTextAreaElement.selectionStart polyfill
if (!htmltextareaelement.selectionStart) {
    // 在这里添加polyfill实现
    console.log('加载HTMLTextAreaElement.selectionStart polyfill');
}
```

