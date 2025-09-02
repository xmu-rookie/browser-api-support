# Element.mouseup_event API 兼容性数据

## 基本信息

- **API名称**: `Element.mouseup_event`
- **MDN文档**: [Element.mouseup_event](https://developer.mozilla.org/docs/Web/API/Element/mouseup_event)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#event-type-mouseup,https://html.spec.whatwg.org/multipage/webappapis.html#handler-onmouseup)
- **标签**: `web-features:mouse-events`
- **描述**: `mouseup` event

## 使用示例

### 基本用法

```javascript
// Element.mouseup_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.mouseup_event API');
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
// 检查Element.mouseup_event是否支持
function isElementMouseup_eventSupported() {
    return 'mouseup_event' in element && typeof element.mouseup_event === 'function';
}

if (isElementMouseup_eventSupported()) {
    console.log('Element.mouseup_event 支持');
    // 使用Element.mouseup_event
} else {
    console.log('Element.mouseup_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.mouseup_event polyfill
if (!element.mouseup_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.mouseup_event polyfill');
}
```

