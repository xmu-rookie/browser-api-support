# HTMLInputElement.select API 兼容性数据

## 基本信息

- **API名称**: `HTMLInputElement.select`
- **MDN文档**: [HTMLInputElement.select](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/select)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-textarea/input-select)
- **标签**: `web-features:input`

## 使用示例

### 基本用法

```javascript
// HTMLInputElement.select 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLInputElement.select API');
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

- **支持版本**: 5.5

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLInputElement.select是否支持
function isHTMLInputElementSelectSupported() {
    return 'select' in htmlinputelement && typeof htmlinputelement.select === 'function';
}

if (isHTMLInputElementSelectSupported()) {
    console.log('HTMLInputElement.select 支持');
    // 使用HTMLInputElement.select
} else {
    console.log('HTMLInputElement.select 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLInputElement.select polyfill
if (!htmlinputelement.select) {
    // 在这里添加polyfill实现
    console.log('加载HTMLInputElement.select polyfill');
}
```

