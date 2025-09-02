# Document.elementsFromPoint API 兼容性数据

## 基本信息

- **API名称**: `Document.elementsFromPoint`
- **MDN文档**: [Document.elementsFromPoint](https://developer.mozilla.org/docs/Web/API/Document/elementsFromPoint)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-document-elementsfrompoint)
- **标签**: `web-features:element-from-point`

## 使用示例

### 基本用法

```javascript
// Document.elementsFromPoint 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.elementsFromPoint API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 43 | Before Chrome 66, this method returned `null` when the element was a child of a host node. See [bug ... |
| Chrome Android | 同主版本 |  |
| Edge | 79 |  |
| Firefox | 46 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 | Returns a `NodeList` instead of an array. See [the MSDN documentation](https://msdn.microsoft.com/en... |
| Oculus | 同主版本 |  |
| Opera | 30 |  |
| Opera Android | 30 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 43
- **注意事项**:
  - Before Chrome 66, this method returned `null` when the element was a child of a host node. See [bug 40537452](https://crbug.com/40537452).

### Edge

- **支持版本**: 79
- **支持版本**: 12
- **移除版本**: 79
- **前缀**: ms
- **注意事项**:
  - Returns a `NodeList` instead of an array. See [the MSDN documentation](https://msdn.microsoft.com/en-us/library/hh772121(v=vs.85).aspx). Returns `null` when the point provided has no elements beneath it (e.g., when given a point outside the document).

### Firefox

- **支持版本**: 46

### Internet Explorer

- **支持版本**: 10
- **前缀**: ms
- **注意事项**:
  - Returns a `NodeList` instead of an array. See [the MSDN documentation](https://msdn.microsoft.com/en-us/library/hh772121(v=vs.85).aspx). Returns `null` when the point provided has no elements beneath it (e.g., when given a point outside the document).

### Opera

- **支持版本**: 30

### Opera Android

- **支持版本**: 30

### Safari

- **支持版本**: 11.1

