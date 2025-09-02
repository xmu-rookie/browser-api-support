# Element.auxclick_event API 兼容性数据

## 基本信息

- **API名称**: `Element.auxclick_event`
- **MDN文档**: [Element.auxclick_event](https://developer.mozilla.org/docs/Web/API/Element/auxclick_event)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#event-type-auxclick,https://html.spec.whatwg.org/multipage/webappapis.html#handler-onauxclick)
- **标签**: `web-features:mouse-events`
- **描述**: `auxclick` event

## 使用示例

### 基本用法

```javascript
// Element.auxclick_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.auxclick_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 55 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 53 | Starting in Firefox 68, the `auxclick` event is used to trigger the _new tab on middle-click_ action... |
| Firefox Android | 53 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18.2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 55

### Firefox

- **支持版本**: 53
- **注意事项**:
  - Starting in Firefox 68, the `auxclick` event is used to trigger the _new tab on middle-click_ action; previously, this had been done with the `click` event. Apps can prevent middle-click from opening new tabs (or middle-click to paste, if that feature is enabled) by intercepting `auxclick` on links, and `auxclick` event handlers can now open popups without triggering the popup blocker.

### Firefox Android

- **支持版本**: 53

### Safari

- **支持版本**: 18.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.auxclick_event是否支持
function isElementAuxclick_eventSupported() {
    return 'auxclick_event' in element && typeof element.auxclick_event === 'function';
}

if (isElementAuxclick_eventSupported()) {
    console.log('Element.auxclick_event 支持');
    // 使用Element.auxclick_event
} else {
    console.log('Element.auxclick_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.auxclick_event polyfill
if (!element.auxclick_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.auxclick_event polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **type_pointerevent**: Is a `PointerEvent`

