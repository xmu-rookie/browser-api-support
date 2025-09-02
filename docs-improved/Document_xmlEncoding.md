# Document.xmlEncoding API 兼容性数据

## 基本信息

- **API名称**: `Document.xmlEncoding`
- **MDN文档**: [Document.xmlEncoding](https://developer.mozilla.org/docs/Web/API/Document/xmlEncoding)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-document-xmlencoding)

## 使用示例

### 基本用法

```javascript
// Document.xmlEncoding 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.xmlEncoding API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
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
- **移除版本**: 10

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.xmlEncoding是否支持
function isDocumentXmlEncodingSupported() {
    return 'xmlEncoding' in document && typeof document.xmlEncoding === 'function';
}

if (isDocumentXmlEncodingSupported()) {
    console.log('Document.xmlEncoding 支持');
    // 使用Document.xmlEncoding
} else {
    console.log('Document.xmlEncoding 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.xmlEncoding polyfill
if (!document.xmlEncoding) {
    // 在这里添加polyfill实现
    console.log('加载Document.xmlEncoding polyfill');
}
```

