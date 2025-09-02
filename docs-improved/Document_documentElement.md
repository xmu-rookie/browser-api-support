# Document.documentElement API 兼容性数据

## 基本信息

- **API名称**: `Document.documentElement`
- **MDN文档**: [Document.documentElement](https://developer.mozilla.org/docs/Web/API/Document/documentElement)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-document-documentelement①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Document.documentElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.documentElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5 |  |
| Oculus | 同主版本 |  |
| Opera | 7 |  |
| Opera Android | 10.1 |  |
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

- **支持版本**: 5

### Opera

- **支持版本**: 7

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.documentElement是否支持
function isDocumentDocumentElementSupported() {
    return 'documentElement' in document && typeof document.documentElement === 'function';
}

if (isDocumentDocumentElementSupported()) {
    console.log('Document.documentElement 支持');
    // 使用Document.documentElement
} else {
    console.log('Document.documentElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.documentElement polyfill
if (!document.documentElement) {
    // 在这里添加polyfill实现
    console.log('加载Document.documentElement polyfill');
}
```

