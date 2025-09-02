# Document.elementFromPoint API 兼容性数据

## 基本信息

- **API名称**: `Document.elementFromPoint`
- **MDN文档**: [Document.elementFromPoint](https://developer.mozilla.org/docs/Web/API/Document/elementFromPoint)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-document-elementfrompoint)
- **标签**: `web-features:element-from-point`

## 使用示例

### 基本用法

```javascript
// Document.elementFromPoint 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.elementFromPoint API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 | Before Chrome 66, this method returned `null` when the element was a child of a host node. See [bug ... |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 | Before Opera 53, this method returned `null` when the element was a child of a host node. See [bug 4... |
| Opera Android | ≤12.1 | Before Opera Android 47, this method returned `null` when the element was a child of a host node. Se... |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1
- **注意事项**:
  - Before Chrome 66, this method returned `null` when the element was a child of a host node. See [bug 40537452](https://crbug.com/40537452).

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: ≤12.1
- **注意事项**:
  - Before Opera 53, this method returned `null` when the element was a child of a host node. See [bug 40537452](https://crbug.com/40537452).

### Opera Android

- **支持版本**: ≤12.1
- **注意事项**:
  - Before Opera Android 47, this method returned `null` when the element was a child of a host node. See [bug 40537452](https://crbug.com/40537452).

### Safari

- **支持版本**: 4

