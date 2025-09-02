# Document.open API 兼容性数据

## 基本信息

- **API名称**: `Document.open`
- **MDN文档**: [Document.open](https://developer.mozilla.org/docs/Web/API/Document/open)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-document-open-dev)
- **标签**: `web-features:document-write`

## 使用示例

### 基本用法

```javascript
// Document.open 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.open API');
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
| Opera | 51 |  |
| Opera Android | 47 |  |
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

- **支持版本**: 51
- **支持版本**: ≤12.1
- **移除版本**: 51
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

### Opera Android

- **支持版本**: 47
- **支持版本**: ≤12.1
- **移除版本**: 47
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

### Safari

- **支持版本**: 11
- **支持版本**: 1
- **移除版本**: 11
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.open是否支持
function isDocumentOpenSupported() {
    return 'open' in document && typeof document.open === 'function';
}

if (isDocumentOpenSupported()) {
    console.log('Document.open 支持');
    // 使用Document.open
} else {
    console.log('Document.open 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.open polyfill
if (!document.open) {
    // 在这里添加polyfill实现
    console.log('加载Document.open polyfill');
}
```

