# Element.mousedown_event API 兼容性数据

## 基本信息

- **API名称**: `Element.mousedown_event`
- **MDN文档**: [Element.mousedown_event](https://developer.mozilla.org/docs/Web/API/Element/mousedown_event)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#event-type-mousedown,https://html.spec.whatwg.org/multipage/webappapis.html#handler-onmousedown)
- **标签**: `web-features:mouse-events`
- **描述**: `mousedown` event

## 使用示例

### 基本用法

```javascript
// Element.mousedown_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.mousedown_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 6 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 11.6 |  |
| Opera Android | 12.1 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 2

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 6

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 11.6

### Opera Android

- **支持版本**: 12.1

### Safari

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.mousedown_event是否支持
function isElementMousedown_eventSupported() {
    return 'mousedown_event' in element && typeof element.mousedown_event === 'function';
}

if (isElementMousedown_eventSupported()) {
    console.log('Element.mousedown_event 支持');
    // 使用Element.mousedown_event
} else {
    console.log('Element.mousedown_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.mousedown_event polyfill
if (!element.mousedown_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.mousedown_event polyfill');
}
```

