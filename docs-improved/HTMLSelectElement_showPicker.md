# HTMLSelectElement.showPicker API 兼容性数据

## 基本信息

- **API名称**: `HTMLSelectElement.showPicker`
- **MDN文档**: [HTMLSelectElement.showPicker](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/showPicker)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/input.html#dom-select-showpicker)
- **标签**: `web-features:show-picker-select`

## 使用示例

### 基本用法

```javascript
// HTMLSelectElement.showPicker 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLSelectElement.showPicker API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 121 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 122 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | preview |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 121

### Firefox

- **支持版本**: 122

### Safari

- **支持版本**: preview
- **需要标志**: 
  - <select> showPicker() method: Enabled

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLSelectElement.showPicker是否支持
function isHTMLSelectElementShowPickerSupported() {
    return 'showPicker' in htmlselectelement && typeof htmlselectelement.showPicker === 'function';
}

if (isHTMLSelectElementShowPickerSupported()) {
    console.log('HTMLSelectElement.showPicker 支持');
    // 使用HTMLSelectElement.showPicker
} else {
    console.log('HTMLSelectElement.showPicker 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLSelectElement.showPicker polyfill
if (!htmlselectelement.showPicker) {
    // 在这里添加polyfill实现
    console.log('加载HTMLSelectElement.showPicker polyfill');
}
```

