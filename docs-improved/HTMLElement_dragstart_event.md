# HTMLElement.dragstart_event API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.dragstart_event`
- **MDN文档**: [HTMLElement.dragstart_event](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragstart_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/webappapis.html#handler-ondragstart,https://html.spec.whatwg.org/multipage/dnd.html#event-dnd-dragstart)
- **标签**: `web-features:draganddrop`
- **描述**: `dragstart` event

## 使用示例

### 基本用法

```javascript
// HTMLElement.dragstart_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.dragstart_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 9 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | 12 |  |
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

- **支持版本**: 9

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 12

### Opera Android

- **支持版本**: 12

### Safari

- **支持版本**: 3.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.dragstart_event是否支持
function isHTMLElementDragstart_eventSupported() {
    return 'dragstart_event' in htmlelement && typeof htmlelement.dragstart_event === 'function';
}

if (isHTMLElementDragstart_eventSupported()) {
    console.log('HTMLElement.dragstart_event 支持');
    // 使用HTMLElement.dragstart_event
} else {
    console.log('HTMLElement.dragstart_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.dragstart_event polyfill
if (!htmlelement.dragstart_event) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.dragstart_event polyfill');
}
```

