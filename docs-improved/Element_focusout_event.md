# Element.focusout_event API 兼容性数据

## 基本信息

- **API名称**: `Element.focusout_event`
- **MDN文档**: [Element.focusout_event](https://developer.mozilla.org/docs/Web/API/Element/focusout_event)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#event-type-focusout)
- **标签**: `web-features:focus-events`
- **描述**: `focusout` event

## 使用示例

### 基本用法

```javascript
// Element.focusout_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.focusout_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 | The `onfocusout` event handler property is not supported. To listen to this event, use `element.addE... |
| Chrome Android | 同主版本 |  |
| Edge | 12 | The `onfocusout` event handler property is not supported. To listen to this event, use `element.addE... |
| Firefox | 52 | The `onfocusout` event handler property is not supported. To listen to this event, use `element.addE... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 11.6 |  |
| Opera Android | 12.1 |  |
| Safari | 5 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1
- **部分实现**: 是
- **注意事项**:
  - The `onfocusout` event handler property is not supported. To listen to this event, use `element.addEventListener('focusout', function() {});`.

### Edge

- **支持版本**: 12
- **部分实现**: 是
- **注意事项**:
  - The `onfocusout` event handler property is not supported. To listen to this event, use `element.addEventListener('focusout', function() {});`.

### Firefox

- **支持版本**: 52
- **部分实现**: 是
- **注意事项**:
  - The `onfocusout` event handler property is not supported. To listen to this event, use `element.addEventListener('focusout', function() {});`.

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 11.6

### Opera Android

- **支持版本**: 12.1

### Safari

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.focusout_event是否支持
function isElementFocusout_eventSupported() {
    return 'focusout_event' in element && typeof element.focusout_event === 'function';
}

if (isElementFocusout_eventSupported()) {
    console.log('Element.focusout_event 支持');
    // 使用Element.focusout_event
} else {
    console.log('Element.focusout_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.focusout_event polyfill
if (!element.focusout_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.focusout_event polyfill');
}
```

