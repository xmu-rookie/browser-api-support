# Document.visibilitychange_event API 兼容性数据

## 基本信息

- **API名称**: `Document.visibilitychange_event`
- **MDN文档**: [Document.visibilitychange_event](https://developer.mozilla.org/docs/Web/API/Document/visibilitychange_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-visibilitychange,https://html.spec.whatwg.org/multipage/webappapis.html#handler-onvisibilitychange)
- **标签**: `web-features:page-visibility`
- **描述**: `visibilitychange` event

## 使用示例

### 基本用法

```javascript
// Document.visibilitychange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.visibilitychange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 62 |  |
| Chrome Android | 同主版本 |  |
| Edge | 18 |  |
| Firefox | 56 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 | The `onvisibilitychange` event handler property is not supported. |
| Oculus | 同主版本 |  |
| Opera | 49 |  |
| Opera Android | 46 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 62
- **支持版本**: 13
- **前缀**: webkit
- **部分实现**: 是
- **注意事项**:
  - The `onvisibilitychange` event handler property is not supported.
- **支持版本**: 33
- **移除版本**: 62
- **部分实现**: 是
- **注意事项**:
  - The `onvisibilitychange` event handler property is not supported.

### Edge

- **支持版本**: 18
- **支持版本**: 12
- **移除版本**: 18
- **部分实现**: 是
- **注意事项**:
  - The `onvisibilitychange` event handler property is not supported.

### Firefox

- **支持版本**: 56

### Internet Explorer

- **支持版本**: 10
- **部分实现**: 是
- **注意事项**:
  - The `onvisibilitychange` event handler property is not supported.

### Opera

- **支持版本**: 49
- **支持版本**: 15
- **前缀**: webkit
- **部分实现**: 是
- **注意事项**:
  - The `onvisibilitychange` event handler property is not supported.
- **支持版本**: 20
- **移除版本**: 49
- **部分实现**: 是
- **注意事项**:
  - The `onvisibilitychange` event handler property is not supported.
- **支持版本**: 12.1
- **移除版本**: 15
- **部分实现**: 是
- **注意事项**:
  - The `onvisibilitychange` event handler property is not supported.

### Opera Android

- **支持版本**: 46
- **支持版本**: 14
- **前缀**: webkit
- **部分实现**: 是
- **注意事项**:
  - The `onvisibilitychange` event handler property is not supported.
- **支持版本**: 20
- **移除版本**: 46
- **部分实现**: 是
- **注意事项**:
  - The `onvisibilitychange` event handler property is not supported.
- **支持版本**: 12.1
- **移除版本**: 14
- **部分实现**: 是
- **注意事项**:
  - The `onvisibilitychange` event handler property is not supported.

### Safari

- **支持版本**: 14.1
- **支持版本**: 14
- **移除版本**: 14.1
- **部分实现**: 是
- **注意事项**:
  - Doesn't fire the `visibilitychange` event when navigating away from a document, so also include code to check for the `pagehide` event (which does fire for that case in all current browsers). See [bug 116769](https://webkit.org/b/116769), [bug 151234](https://webkit.org/b/151234), [bug 151610](https://webkit.org/b/151610), and [bug 194897](https://webkit.org/b/194897).
- **支持版本**: 10.1
- **移除版本**: 14
- **部分实现**: 是
- **注意事项**:
  - Doesn't fire the `visibilitychange` event when navigating away from a document, so also include code to check for the `pagehide` event (which does fire for that case in all current browsers). See [bug 116769](https://webkit.org/b/116769), [bug 151234](https://webkit.org/b/151234), [bug 151610](https://webkit.org/b/151610), and [bug 194897](https://webkit.org/b/194897).
  - Before Safari 14, the event does not bubble, so `document.addEventListener('visibilitychange', ...)` works, but `window.addEventListener('visibilitychange', ...)` does not.
- **支持版本**: 7
- **移除版本**: 10.1
- **部分实现**: 是
- **注意事项**:
  - Doesn't fire the `visibilitychange` event when navigating away from a document, so also include code to check for the `pagehide` event (which does fire for that case in all current browsers). See [bug 116769](https://webkit.org/b/116769), [bug 151234](https://webkit.org/b/151234), [bug 151610](https://webkit.org/b/151610), and [bug 194897](https://webkit.org/b/194897).
  - Before Safari 14, the event does not bubble, so `document.addEventListener('visibilitychange', ...)` works, but `window.addEventListener('visibilitychange', ...)` does not.
  - The `onvisibilitychange` event handler property is not supported.

