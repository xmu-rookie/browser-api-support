# Element.focus_event API 兼容性数据

## 基本信息

- **API名称**: `Element.focus_event`
- **MDN文档**: [Element.focus_event](https://developer.mozilla.org/docs/Web/API/Element/focus_event)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#event-type-focus,https://html.spec.whatwg.org/multipage/webappapis.html#handler-onfocus)
- **标签**: `web-features:focus-events`
- **描述**: `focus` event

## 使用示例

### 基本用法

```javascript
// Element.focus_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.focus_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 24 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 11.6 |  |
| Opera Android | 12.1 |  |
| Safari | 3.1 |  |
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

- **支持版本**: 24
- **支持版本**: 6
- **移除版本**: 24
- **部分实现**: 是
- **注意事项**:
  - The interface for this event is [`Event`](https://developer.mozilla.org/docs/Web/API/Event), not [`FocusEvent`](https://developer.mozilla.org/docs/Web/API/FocusEvent).

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 11.6

### Opera Android

- **支持版本**: 12.1

### Safari

- **支持版本**: 3.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.focus_event是否支持
function isElementFocus_eventSupported() {
    return 'focus_event' in element && typeof element.focus_event === 'function';
}

if (isElementFocus_eventSupported()) {
    console.log('Element.focus_event 支持');
    // 使用Element.focus_event
} else {
    console.log('Element.focus_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.focus_event polyfill
if (!element.focus_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.focus_event polyfill');
}
```

