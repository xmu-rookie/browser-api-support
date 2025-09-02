# Document.compatMode API 兼容性数据

## 基本信息

- **API名称**: `Document.compatMode`
- **MDN文档**: [Document.compatMode](https://developer.mozilla.org/docs/Web/API/Document/compatMode)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-document-compatmode①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Document.compatMode 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.compatMode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 8 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 19 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 6 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 5.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 8
- **支持版本**: 1
- **移除版本**: 8
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 19
- **支持版本**: 1
- **移除版本**: 19
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

### Internet Explorer

- **支持版本**: 6

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 5.1
- **支持版本**: 3.1
- **移除版本**: 5.1
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.compatMode是否支持
function isDocumentCompatModeSupported() {
    return 'compatMode' in document && typeof document.compatMode === 'function';
}

if (isDocumentCompatModeSupported()) {
    console.log('Document.compatMode 支持');
    // 使用Document.compatMode
} else {
    console.log('Document.compatMode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.compatMode polyfill
if (!document.compatMode) {
    // 在这里添加polyfill实现
    console.log('加载Document.compatMode polyfill');
}
```

