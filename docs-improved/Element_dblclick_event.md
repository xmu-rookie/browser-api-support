# Element.dblclick_event API 兼容性数据

## 基本信息

- **API名称**: `Element.dblclick_event`
- **MDN文档**: [Element.dblclick_event](https://developer.mozilla.org/docs/Web/API/Element/dblclick_event)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#event-type-dblclick,https://html.spec.whatwg.org/multipage/webappapis.html#handler-ondblclick)
- **标签**: `web-features:mouse-events`
- **描述**: `dblclick` event

## 使用示例

### 基本用法

```javascript
// Element.dblclick_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.dblclick_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 6 | Starting in Firefox 68, `dblclick` events are only sent for the primary mouse button, per the specif... |
| Firefox Android | 6 |  |
| Internet Explorer | 8 |  |
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
  - Starting in Firefox 68, `dblclick` events are only sent for the primary mouse button, per the specification.

### Firefox Android

- **支持版本**: 6

### Internet Explorer

- **支持版本**: 8

### Opera

- **支持版本**: 11.6

### Opera Android

- **支持版本**: 12.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.dblclick_event是否支持
function isElementDblclick_eventSupported() {
    return 'dblclick_event' in element && typeof element.dblclick_event === 'function';
}

if (isElementDblclick_eventSupported()) {
    console.log('Element.dblclick_event 支持');
    // 使用Element.dblclick_event
} else {
    console.log('Element.dblclick_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.dblclick_event polyfill
if (!element.dblclick_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.dblclick_event polyfill');
}
```

