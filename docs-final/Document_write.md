# Document.write API 兼容性数据

## 基本信息

- **API名称**: `Document.write`
- **MDN文档**: [Document.write](https://developer.mozilla.org/docs/Web/API/Document/write)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-document-write-dev)
- **标签**: `web-features:document-write`

## 使用示例

### 基本用法

```javascript
// Document.write 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.write API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 45 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 69 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | 3 |  |
| Opera Android | 10.1 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 45
- **支持版本**: 1
- **移除版本**: 45
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 69
- **支持版本**: 1
- **移除版本**: 69
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: 3

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 11
- **支持版本**: 1
- **移除版本**: 11
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

## 相关子API

该API包含以下子功能：

- **enforces_trusted_types**: Requires `TrustedHTML` instance when trusted types are enforced

