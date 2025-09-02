# HTMLLegendElement.form API 兼容性数据

## 基本信息

- **API名称**: `HTMLLegendElement.form`
- **MDN文档**: [HTMLLegendElement.form](https://developer.mozilla.org/docs/Web/API/HTMLLegendElement/form)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-elements.html#dom-legend-form)
- **标签**: `web-features:fieldset`

## 使用示例

### 基本用法

```javascript
// HTMLLegendElement.form 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLLegendElement.form API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 6 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1 |  |
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

- **支持版本**: 6

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLLegendElement.form是否支持
function isHTMLLegendElementFormSupported() {
    return 'form' in htmllegendelement && typeof htmllegendelement.form === 'function';
}

if (isHTMLLegendElementFormSupported()) {
    console.log('HTMLLegendElement.form 支持');
    // 使用HTMLLegendElement.form
} else {
    console.log('HTMLLegendElement.form 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLLegendElement.form polyfill
if (!htmllegendelement.form) {
    // 在这里添加polyfill实现
    console.log('加载HTMLLegendElement.form polyfill');
}
```

