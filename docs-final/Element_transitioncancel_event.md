# Element.transitioncancel_event API 兼容性数据

## 基本信息

- **API名称**: `Element.transitioncancel_event`
- **MDN文档**: [Element.transitioncancel_event](https://developer.mozilla.org/docs/Web/API/Element/transitioncancel_event)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-transitions/#transitioncancel,https://drafts.csswg.org/css-transitions/#dom-globaleventhandlers-ontransitioncancel)
- **标签**: `web-features:transitions`
- **描述**: `transitioncancel` event

## 使用示例

### 基本用法

```javascript
// Element.transitioncancel_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.transitioncancel_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 87 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 53 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 87
- **支持版本**: 74
- **移除版本**: 87
- **部分实现**: 是
- **注意事项**:
  - The `ontransitioncancel` event handler property is not supported. To listen to this event, use `element.addEventListener('transitioncancel', function() {});`.

### Firefox

- **支持版本**: 53

### Safari

- **支持版本**: 13.1
- **支持版本**: 12
- **移除版本**: 13.1
- **部分实现**: 是
- **注意事项**:
  - Although the `ontransitioncancel` event handler property is supported, the `transitioncancel` event is never fired.

