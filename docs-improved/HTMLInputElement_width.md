# HTMLInputElement.width API 兼容性数据

## 基本信息

- **API名称**: `HTMLInputElement.width`
- **MDN文档**: [HTMLInputElement.width](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/width)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/input.html#dom-input-width)
- **标签**: `web-features:input`

## 使用示例

### 基本用法

```javascript
// HTMLInputElement.width 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLInputElement.width API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 21 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 16 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 21

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 16

### Internet Explorer

- **支持版本**: 5.5

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLInputElement.width是否支持
function isHTMLInputElementWidthSupported() {
    return 'width' in htmlinputelement && typeof htmlinputelement.width === 'function';
}

if (isHTMLInputElementWidthSupported()) {
    console.log('HTMLInputElement.width 支持');
    // 使用HTMLInputElement.width
} else {
    console.log('HTMLInputElement.width 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLInputElement.width polyfill
if (!htmlinputelement.width) {
    // 在这里添加polyfill实现
    console.log('加载HTMLInputElement.width polyfill');
}
```

