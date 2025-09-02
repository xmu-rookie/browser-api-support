# HTMLOptionElement.label API 兼容性数据

## 基本信息

- **API名称**: `HTMLOptionElement.label`
- **MDN文档**: [HTMLOptionElement.label](https://developer.mozilla.org/docs/Web/API/HTMLOptionElement/label)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-elements.html#dom-option-label)
- **标签**: `web-features:select`

## 使用示例

### 基本用法

```javascript
// HTMLOptionElement.label 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLOptionElement.label API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 7 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 6 |  |
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

- **支持版本**: 7
- **支持版本**: 1
- **移除版本**: 7
- **部分实现**: 是
- **注意事项**:
  - Before Firefox 7 the `label` property incorrectly returned an empty string if not defined instead of returning the element's text content.

### Internet Explorer

- **支持版本**: 6

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
// 检查HTMLOptionElement.label是否支持
function isHTMLOptionElementLabelSupported() {
    return 'label' in htmloptionelement && typeof htmloptionelement.label === 'function';
}

if (isHTMLOptionElementLabelSupported()) {
    console.log('HTMLOptionElement.label 支持');
    // 使用HTMLOptionElement.label
} else {
    console.log('HTMLOptionElement.label 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLOptionElement.label polyfill
if (!htmloptionelement.label) {
    // 在这里添加polyfill实现
    console.log('加载HTMLOptionElement.label polyfill');
}
```

