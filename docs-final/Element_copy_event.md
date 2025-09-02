# Element.copy_event API 兼容性数据

## 基本信息

- **API名称**: `Element.copy_event`
- **MDN文档**: [Element.copy_event](https://developer.mozilla.org/docs/Web/API/Element/copy_event)
- **规范文档**: [查看规范](https://w3c.github.io/clipboard-apis/#clipboard-event-copy,https://html.spec.whatwg.org/multipage/webappapis.html#handler-oncopy)
- **标签**: `web-features:clipboard-events`
- **描述**: `copy` event

## 使用示例

### 基本用法

```javascript
// Element.copy_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.copy_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 22 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 | Before Internet Explorer 9, this event is not supported via `addEventListener`; however, the event h... |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3 |  |
| Safari iOS | 3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 22

### Internet Explorer

- **支持版本**: 9
- **注意事项**:
  - Before Internet Explorer 9, this event is not supported via `addEventListener`; however, the event handler is supported since IE 5.5. The event can be listened to via `element.oncopy`.

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 3

