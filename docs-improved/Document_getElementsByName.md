# Document.getElementsByName API 兼容性数据

## 基本信息

- **API名称**: `Document.getElementsByName`
- **MDN文档**: [Document.getElementsByName](https://developer.mozilla.org/docs/Web/API/Document/getElementsByName)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dom.html#dom-document-getelementsbyname-dev)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Document.getElementsByName 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.getElementsByName API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 | Before Edge 79, this method returns an `HTMLCollection`, not a `NodeList`. |
| Firefox | 58 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5 | Returns an `HTMLCollection`, not a `NodeList` |
| Oculus | 同主版本 |  |
| Opera | 5 |  |
| Opera Android | 10.1 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12
- **注意事项**:
  - Before Edge 79, this method returns an `HTMLCollection`, not a `NodeList`.

### Firefox

- **支持版本**: 58
- **支持版本**: 1
- **移除版本**: 58
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

### Internet Explorer

- **支持版本**: 5
- **注意事项**:
  - Returns an `HTMLCollection`, not a `NodeList`

### Opera

- **支持版本**: 5

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 4
- **支持版本**: 1
- **移除版本**: 4
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.getElementsByName是否支持
function isDocumentGetElementsByNameSupported() {
    return 'getElementsByName' in document && typeof document.getElementsByName === 'function';
}

if (isDocumentGetElementsByNameSupported()) {
    console.log('Document.getElementsByName 支持');
    // 使用Document.getElementsByName
} else {
    console.log('Document.getElementsByName 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.getElementsByName polyfill
if (!document.getElementsByName) {
    // 在这里添加polyfill实现
    console.log('加载Document.getElementsByName polyfill');
}
```

