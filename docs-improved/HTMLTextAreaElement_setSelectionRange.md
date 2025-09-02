# HTMLTextAreaElement.setSelectionRange API 兼容性数据

## 基本信息

- **API名称**: `HTMLTextAreaElement.setSelectionRange`
- **MDN文档**: [HTMLTextAreaElement.setSelectionRange](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement/setSelectionRange)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-textarea/input-setselectionrange-dev)
- **标签**: `web-features:textarea`

## 使用示例

### 基本用法

```javascript
// HTMLTextAreaElement.setSelectionRange 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLTextAreaElement.setSelectionRange API');
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
// 检查HTMLTextAreaElement.setSelectionRange是否支持
function isHTMLTextAreaElementSetSelectionRangeSupported() {
    return 'setSelectionRange' in htmltextareaelement && typeof htmltextareaelement.setSelectionRange === 'function';
}

if (isHTMLTextAreaElementSetSelectionRangeSupported()) {
    console.log('HTMLTextAreaElement.setSelectionRange 支持');
    // 使用HTMLTextAreaElement.setSelectionRange
} else {
    console.log('HTMLTextAreaElement.setSelectionRange 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLTextAreaElement.setSelectionRange polyfill
if (!htmltextareaelement.setSelectionRange) {
    // 在这里添加polyfill实现
    console.log('加载HTMLTextAreaElement.setSelectionRange polyfill');
}
```

