# Node.ownerDocument API 兼容性数据

## 基本信息

- **API名称**: `Node.ownerDocument`
- **MDN文档**: [Node.ownerDocument](https://developer.mozilla.org/docs/Web/API/Node/ownerDocument)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-node-ownerdocument①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Node.ownerDocument 使用示例
// 请查阅MDN文档了解具体用法
console.log('Node.ownerDocument API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 9 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 6 |  |
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

- **支持版本**: 9
- **支持版本**: 1
- **移除版本**: 9
- **注意事项**:
  - The `ownerDocument` of doctype nodes (that is, nodes for which `Node.nodeType` is `Node.DOCUMENT_TYPE_NODE` or 10) is `null`.

### Internet Explorer

- **支持版本**: 6

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

