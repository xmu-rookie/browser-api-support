# Document.images API 兼容性数据

## 基本信息

- **API名称**: `Document.images`
- **MDN文档**: [Document.images](https://developer.mozilla.org/docs/Web/API/Document/images)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dom.html#dom-document-images-dev)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Document.images 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.images API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 61 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
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

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 61
- **支持版本**: 1
- **移除版本**: 61
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

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
// 检查Document.images是否支持
function isDocumentImagesSupported() {
    return 'images' in document && typeof document.images === 'function';
}

if (isDocumentImagesSupported()) {
    console.log('Document.images 支持');
    // 使用Document.images
} else {
    console.log('Document.images 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.images polyfill
if (!document.images) {
    // 在这里添加polyfill实现
    console.log('加载Document.images polyfill');
}
```

