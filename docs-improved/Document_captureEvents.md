# Document.captureEvents API 兼容性数据

## 基本信息

- **API名称**: `Document.captureEvents`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/obsolete.html#dom-document-captureevents)

## 使用示例

### 基本用法

```javascript
// Document.captureEvents 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.captureEvents API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 64 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 70 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
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

- **支持版本**: 64
- **支持版本**: 1
- **移除版本**: 64
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 70
- **支持版本**: 1
- **移除版本**: 70
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLDocument`](https://developer.mozilla.org/docs/Web/API/HTMLDocument), not all `Document` objects.

### Internet Explorer

- **支持版本**: 11

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
// 检查Document.captureEvents是否支持
function isDocumentCaptureEventsSupported() {
    return 'captureEvents' in document && typeof document.captureEvents === 'function';
}

if (isDocumentCaptureEventsSupported()) {
    console.log('Document.captureEvents 支持');
    // 使用Document.captureEvents
} else {
    console.log('Document.captureEvents 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.captureEvents polyfill
if (!document.captureEvents) {
    // 在这里添加polyfill实现
    console.log('加载Document.captureEvents polyfill');
}
```

