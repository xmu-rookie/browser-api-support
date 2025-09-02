# Document.Document API 兼容性数据

## 基本信息

- **API名称**: `Document.Document`
- **MDN文档**: [Document.Document](https://developer.mozilla.org/docs/Web/API/Document/Document)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-document-document①)
- **标签**: `web-features:dom`
- **描述**: `Document()` constructor

## 使用示例

### 基本用法

```javascript
// Document.Document 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.Document API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 20 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 60

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 20

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.Document是否支持
function isDocumentDocumentSupported() {
    return 'Document' in document && typeof document.Document === 'function';
}

if (isDocumentDocumentSupported()) {
    console.log('Document.Document 支持');
    // 使用Document.Document
} else {
    console.log('Document.Document 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.Document polyfill
if (!document.Document) {
    // 在这里添加polyfill实现
    console.log('加载Document.Document polyfill');
}
```

