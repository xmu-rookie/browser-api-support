# HTMLElement.dragenter_event API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.dragenter_event`
- **MDN文档**: [HTMLElement.dragenter_event](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragenter_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/webappapis.html#handler-ondragenter,https://html.spec.whatwg.org/multipage/dnd.html#event-dnd-dragenter)
- **标签**: `web-features:draganddrop`
- **描述**: `dragenter` event

## 使用示例

### 基本用法

```javascript
// HTMLElement.dragenter_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.dragenter_event API');
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
// 检查HTMLElement.dragenter_event是否支持
function isHTMLElementDragenter_eventSupported() {
    return 'dragenter_event' in htmlelement && typeof htmlelement.dragenter_event === 'function';
}

if (isHTMLElementDragenter_eventSupported()) {
    console.log('HTMLElement.dragenter_event 支持');
    // 使用HTMLElement.dragenter_event
} else {
    console.log('HTMLElement.dragenter_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.dragenter_event polyfill
if (!htmlelement.dragenter_event) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.dragenter_event polyfill');
}
```

