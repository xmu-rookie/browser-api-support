# Document.head API 兼容性数据

## 基本信息

- **API名称**: `Document.head`
- **MDN文档**: [Document.head](https://developer.mozilla.org/docs/Web/API/Document/head)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dom.html#dom-document-head-dev)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Document.head 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.head API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 61 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 11 |  |
| Opera Android | 11 |  |
| Safari | 5 |  |
| Safari iOS | 4 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 61
- **支持版本**: 4
- **移除版本**: 61
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 11

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.head是否支持
function isDocumentHeadSupported() {
    return 'head' in document && typeof document.head === 'function';
}

if (isDocumentHeadSupported()) {
    console.log('Document.head 支持');
    // 使用Document.head
} else {
    console.log('Document.head 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.head polyfill
if (!document.head) {
    // 在这里添加polyfill实现
    console.log('加载Document.head polyfill');
}
```

