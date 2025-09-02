# Document.getSelection API 兼容性数据

## 基本信息

- **API名称**: `Document.getSelection`
- **MDN文档**: [Document.getSelection](https://developer.mozilla.org/docs/Web/API/Document/getSelection)
- **规范文档**: [查看规范](https://w3c.github.io/selection-api/#dom-document-getselection)
- **标签**: `web-features:selection-api`

## 使用示例

### 基本用法

```javascript
// Document.getSelection 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.getSelection API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 57 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 2

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 57
- **支持版本**: 1
- **移除版本**: 57
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.getSelection是否支持
function isDocumentGetSelectionSupported() {
    return 'getSelection' in document && typeof document.getSelection === 'function';
}

if (isDocumentGetSelectionSupported()) {
    console.log('Document.getSelection 支持');
    // 使用Document.getSelection
} else {
    console.log('Document.getSelection 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.getSelection polyfill
if (!document.getSelection) {
    // 在这里添加polyfill实现
    console.log('加载Document.getSelection polyfill');
}
```

