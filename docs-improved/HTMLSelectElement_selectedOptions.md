# HTMLSelectElement.selectedOptions API 兼容性数据

## 基本信息

- **API名称**: `HTMLSelectElement.selectedOptions`
- **MDN文档**: [HTMLSelectElement.selectedOptions](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/selectedOptions)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-elements.html#dom-select-selectedoptions-dev)
- **标签**: `web-features:select`

## 使用示例

### 基本用法

```javascript
// HTMLSelectElement.selectedOptions 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLSelectElement.selectedOptions API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 19 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 26 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 9 |  |
| Opera Android | 10.1 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 19

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 26

### Opera

- **支持版本**: 9

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLSelectElement.selectedOptions是否支持
function isHTMLSelectElementSelectedOptionsSupported() {
    return 'selectedOptions' in htmlselectelement && typeof htmlselectelement.selectedOptions === 'function';
}

if (isHTMLSelectElementSelectedOptionsSupported()) {
    console.log('HTMLSelectElement.selectedOptions 支持');
    // 使用HTMLSelectElement.selectedOptions
} else {
    console.log('HTMLSelectElement.selectedOptions 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLSelectElement.selectedOptions polyfill
if (!htmlselectelement.selectedOptions) {
    // 在这里添加polyfill实现
    console.log('加载HTMLSelectElement.selectedOptions polyfill');
}
```

