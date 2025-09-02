# Document.createElement API 兼容性数据

## 基本信息

- **API名称**: `Document.createElement`
- **MDN文档**: [Document.createElement](https://developer.mozilla.org/docs/Web/API/Document/createElement)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-document-createelement①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Document.createElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.createElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 | Doesn't conform to the DOM spec for XUL and XHTML documents: `localName` and `namespaceURI` are not ... |
| Firefox Android | 4 |  |
| Internet Explorer | 5 |  |
| Oculus | 同主版本 |  |
| Opera | 6 |  |
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
- **注意事项**:
  - Doesn't conform to the DOM spec for XUL and XHTML documents: `localName` and `namespaceURI` are not set to null on the created element.

### Firefox Android

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 5

### Opera

- **支持版本**: 6

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.createElement是否支持
function isDocumentCreateElementSupported() {
    return 'createElement' in document && typeof document.createElement === 'function';
}

if (isDocumentCreateElementSupported()) {
    console.log('Document.createElement 支持');
    // 使用Document.createElement
} else {
    console.log('Document.createElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.createElement polyfill
if (!document.createElement) {
    // 在这里添加polyfill实现
    console.log('加载Document.createElement polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **options_parameter**: `options` parameter

