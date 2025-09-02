# Element.wheel_event API 兼容性数据

## 基本信息

- **API名称**: `Element.wheel_event`
- **MDN文档**: [Element.wheel_event](https://developer.mozilla.org/docs/Web/API/Element/wheel_event)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#event-type-wheel,https://html.spec.whatwg.org/multipage/webappapis.html#handler-onwheel)
- **标签**: `web-features:wheel-events`
- **描述**: `wheel` event

## 使用示例

### 基本用法

```javascript
// Element.wheel_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.wheel_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 31 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 17 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 | The `onwheel` event handler property is not supported. To listen to this event, use `element.addEven... |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 不支持 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 31

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 17

### Internet Explorer

- **支持版本**: 9
- **注意事项**:
  - The `onwheel` event handler property is not supported. To listen to this event, use `element.addEventListener('wheel', function() {});`. See [IE bug 782835](https://connect.microsoft.com/IE/feedback/details/782835/missing-onwheel-attribute-for-the-wheel-event-although-its-supported-via-addeventlistener).

### Safari

- **支持版本**: 7

### Safari iOS

- **支持版本**: 不支持

