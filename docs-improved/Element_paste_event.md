# Element.paste_event API 兼容性数据

## 基本信息

- **API名称**: `Element.paste_event`
- **MDN文档**: [Element.paste_event](https://developer.mozilla.org/docs/Web/API/Element/paste_event)
- **规范文档**: [查看规范](https://w3c.github.io/clipboard-apis/#clipboard-event-paste,https://html.spec.whatwg.org/multipage/webappapis.html#handler-onpaste)
- **标签**: `web-features:clipboard-events`
- **描述**: `paste` event

## 使用示例

### 基本用法

```javascript
// Element.paste_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.paste_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 22 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 | Before Internet Explorer 11, copying files does not trigger the `paste` event.; Before Internet Expl... |
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
  - Before Internet Explorer 11, copying files does not trigger the `paste` event.
  - Before Internet Explorer 9, this event is not supported via `addEventListener`; however, the event handler is supported since IE 5.5. The event can be listened to via `element.oncopy`.

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.paste_event是否支持
function isElementPaste_eventSupported() {
    return 'paste_event' in element && typeof element.paste_event === 'function';
}

if (isElementPaste_eventSupported()) {
    console.log('Element.paste_event 支持');
    // 使用Element.paste_event
} else {
    console.log('Element.paste_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.paste_event polyfill
if (!element.paste_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.paste_event polyfill');
}
```

