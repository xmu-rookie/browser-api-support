# Element.click_event API 兼容性数据

## 基本信息

- **API名称**: `Element.click_event`
- **MDN文档**: [Element.click_event](https://developer.mozilla.org/docs/Web/API/Element/click_event)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#event-type-click,https://html.spec.whatwg.org/multipage/webappapis.html#handler-onclick)
- **标签**: `web-features:mouse-events`
- **描述**: `click` event

## 使用示例

### 基本用法

```javascript
// Element.click_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.click_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 6 | Beginning in Firefox 68, Firefox no longer incorrectly sends a `click` event for buttons other than ... |
| Firefox Android | 6 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 11.6 |  |
| Opera Android | 12.1 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 6
- **注意事项**:
  - Beginning in Firefox 68, Firefox no longer incorrectly sends a `click` event for buttons other than the primary mouse button; previously, there were circumstances in which this would occur. One example: middle-clicking a link would send a `click` to the document's `<html>` element.

### Firefox Android

- **支持版本**: 6

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 11.6

### Opera Android

- **支持版本**: 12.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 相关子API

该API包含以下子功能：

- **type_pointerevent**: Is a `PointerEvent`

