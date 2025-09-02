# Window.focus_event API 兼容性数据

## 基本信息

- **API名称**: `Window.focus_event`
- **MDN文档**: [Window.focus_event](https://developer.mozilla.org/docs/Web/API/Window/focus_event)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#event-type-focus,https://html.spec.whatwg.org/multipage/webappapis.html#handler-onfocus)
- **标签**: `web-features:window`
- **描述**: `focus` event

## 使用示例

### 基本用法

```javascript
// Window.focus_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.focus_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 5 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 6 | Apart from firing the event on `window` as other browsers do, Firefox also fires the event on the `d... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
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

- **支持版本**: 5

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 6
- **注意事项**:
  - Apart from firing the event on `window` as other browsers do, Firefox also fires the event on the `document` object. See [bug 1228802](https://bugzil.la/1228802).
  - Before Firefox 24, the interface for this event is a plain [`Event`](https://developer.mozilla.org/docs/Web/API/Event), not [`FocusEvent`](https://developer.mozilla.org/docs/Web/API/FocusEvent).

### Internet Explorer

- **支持版本**: 11

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 5.1

