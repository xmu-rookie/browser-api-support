# HTMLSelectElement.remove API 兼容性数据

## 基本信息

- **API名称**: `HTMLSelectElement.remove`
- **MDN文档**: [HTMLSelectElement.remove](https://developer.mozilla.org/docs/Web/API/HTMLSelectElement/remove)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-elements.html#dom-select-remove)
- **标签**: `web-features:select`

## 使用示例

### 基本用法

```javascript
// HTMLSelectElement.remove 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLSelectElement.remove API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 |  |
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

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 5.5

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
// 检查HTMLSelectElement.remove是否支持
function isHTMLSelectElementRemoveSupported() {
    return 'remove' in htmlselectelement && typeof htmlselectelement.remove === 'function';
}

if (isHTMLSelectElementRemoveSupported()) {
    console.log('HTMLSelectElement.remove 支持');
    // 使用HTMLSelectElement.remove
} else {
    console.log('HTMLSelectElement.remove 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLSelectElement.remove polyfill
if (!htmlselectelement.remove) {
    // 在这里添加polyfill实现
    console.log('加载HTMLSelectElement.remove polyfill');
}
```

