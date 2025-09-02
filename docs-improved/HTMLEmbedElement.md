# HTMLEmbedElement API 兼容性数据

## 基本信息

- **API名称**: `HTMLEmbedElement`
- **MDN文档**: [HTMLEmbedElement](https://developer.mozilla.org/docs/Web/API/HTMLEmbedElement)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#htmlembedelement)
- **标签**: `web-features:embed`

## 使用示例

### 基本用法

```javascript
// HTMLEmbedElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLEmbedElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 | Starting with Chrome 58, this interface can no longer be called as a function. |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 | Starting with Opera 45, this interface can no longer be called as a function. |
| Opera Android | ≤12.1 | Starting with Opera 45, this interface can no longer be called as a function. |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1
- **注意事项**:
  - Starting with Chrome 58, this interface can no longer be called as a function.

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 5.5

### Opera

- **支持版本**: ≤12.1
- **注意事项**:
  - Starting with Opera 45, this interface can no longer be called as a function.

### Opera Android

- **支持版本**: ≤12.1
- **注意事项**:
  - Starting with Opera 45, this interface can no longer be called as a function.

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLEmbedElement是否支持
function isHTMLEmbedElementSupported() {
    return 'HTMLEmbedElement' in window || typeof HTMLEmbedElement !== 'undefined';
}

if (isHTMLEmbedElementSupported()) {
    console.log('HTMLEmbedElement 支持');
    // 使用HTMLEmbedElement
} else {
    console.log('HTMLEmbedElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLEmbedElement polyfill
if (!window.HTMLEmbedElement) {
    // 在这里添加polyfill实现
    console.log('加载HTMLEmbedElement polyfill');
}
```

