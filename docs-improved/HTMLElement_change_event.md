# HTMLElement.change_event API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.change_event`
- **MDN文档**: [HTMLElement.change_event](https://developer.mozilla.org/docs/Web/API/HTMLElement/change_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-change,https://html.spec.whatwg.org/multipage/webappapis.html#handler-onchange)
- **标签**: `web-features:change-event`
- **描述**: `change` event

## 使用示例

### 基本用法

```javascript
// HTMLElement.change_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.change_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 9 |  |
| Opera Android | 10.1 |  |
| Safari | 3 |  |
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

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 9

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.change_event是否支持
function isHTMLElementChange_eventSupported() {
    return 'change_event' in htmlelement && typeof htmlelement.change_event === 'function';
}

if (isHTMLElementChange_eventSupported()) {
    console.log('HTMLElement.change_event 支持');
    // 使用HTMLElement.change_event
} else {
    console.log('HTMLElement.change_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.change_event polyfill
if (!htmlelement.change_event) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.change_event polyfill');
}
```

