# Document.querySelector API 兼容性数据

## 基本信息

- **API名称**: `Document.querySelector`
- **MDN文档**: [Document.querySelector](https://developer.mozilla.org/docs/Web/API/Document/querySelector)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-parentnode-queryselector①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Document.querySelector 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.querySelector API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 10 |  |
| Opera Android | 10.1 |  |
| Safari | 3.1 |  |
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

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 9
- **支持版本**: 8
- **移除版本**: 9
- **部分实现**: 是
- **注意事项**:
  - `querySelectorAll()` is supported, but only for CSS 2.1 selectors.

### Opera

- **支持版本**: 10

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 3.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.querySelector是否支持
function isDocumentQuerySelectorSupported() {
    return 'querySelector' in document && typeof document.querySelector === 'function';
}

if (isDocumentQuerySelectorSupported()) {
    console.log('Document.querySelector 支持');
    // 使用Document.querySelector
} else {
    console.log('Document.querySelector 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.querySelector polyfill
if (!document.querySelector) {
    // 在这里添加polyfill实现
    console.log('加载Document.querySelector polyfill');
}
```

