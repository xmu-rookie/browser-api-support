# Document.plugins API 兼容性数据

## 基本信息

- **API名称**: `Document.plugins`
- **MDN文档**: [Document.plugins](https://developer.mozilla.org/docs/Web/API/Document/plugins)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dom.html#dom-document-plugins-dev)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Document.plugins 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.plugins API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 36 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 61 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | 51 |  |
| Opera Android | 47 |  |
| Safari | 10.1 |  |
| Safari iOS | 10.3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 36
- **支持版本**: 1
- **移除版本**: 36
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

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

- **支持版本**: 10.1
- **支持版本**: 3
- **移除版本**: 10.1
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

### Safari iOS

- **支持版本**: 10.3
- **支持版本**: 1
- **移除版本**: 10.3
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.plugins是否支持
function isDocumentPluginsSupported() {
    return 'plugins' in document && typeof document.plugins === 'function';
}

if (isDocumentPluginsSupported()) {
    console.log('Document.plugins 支持');
    // 使用Document.plugins
} else {
    console.log('Document.plugins 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.plugins polyfill
if (!document.plugins) {
    // 在这里添加polyfill实现
    console.log('加载Document.plugins polyfill');
}
```

