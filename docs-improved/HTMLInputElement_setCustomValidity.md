# HTMLInputElement.setCustomValidity API 兼容性数据

## 基本信息

- **API名称**: `HTMLInputElement.setCustomValidity`
- **MDN文档**: [HTMLInputElement.setCustomValidity](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/setCustomValidity)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-cva-setcustomvalidity)
- **标签**: `web-features:constraint-validation`

## 使用示例

### 基本用法

```javascript
// HTMLInputElement.setCustomValidity 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLInputElement.setCustomValidity API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 | This method only updates the validation error popup, not the tooltip that appears when hovering the ... |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
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
- **注意事项**:
  - This method only updates the validation error popup, not the tooltip that appears when hovering the mouse over the element, see [bug 41380670](https://crbug.com/41380670).

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 10

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
// 检查HTMLInputElement.setCustomValidity是否支持
function isHTMLInputElementSetCustomValiditySupported() {
    return 'setCustomValidity' in htmlinputelement && typeof htmlinputelement.setCustomValidity === 'function';
}

if (isHTMLInputElementSetCustomValiditySupported()) {
    console.log('HTMLInputElement.setCustomValidity 支持');
    // 使用HTMLInputElement.setCustomValidity
} else {
    console.log('HTMLInputElement.setCustomValidity 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLInputElement.setCustomValidity polyfill
if (!htmlinputelement.setCustomValidity) {
    // 在这里添加polyfill实现
    console.log('加载HTMLInputElement.setCustomValidity polyfill');
}
```

