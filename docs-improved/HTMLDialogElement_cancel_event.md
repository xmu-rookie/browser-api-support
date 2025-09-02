# HTMLDialogElement.cancel_event API 兼容性数据

## 基本信息

- **API名称**: `HTMLDialogElement.cancel_event`
- **MDN文档**: [HTMLDialogElement.cancel_event](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/cancel_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-cancel,https://html.spec.whatwg.org/multipage/webappapis.html#handler-oncancel)
- **标签**: `web-features:dialog`
- **描述**: `cancel` event

## 使用示例

### 基本用法

```javascript
// HTMLDialogElement.cancel_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLDialogElement.cancel_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 37 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 98 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 37

### Firefox

- **支持版本**: 98

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLDialogElement.cancel_event是否支持
function isHTMLDialogElementCancel_eventSupported() {
    return 'cancel_event' in htmldialogelement && typeof htmldialogelement.cancel_event === 'function';
}

if (isHTMLDialogElementCancel_eventSupported()) {
    console.log('HTMLDialogElement.cancel_event 支持');
    // 使用HTMLDialogElement.cancel_event
} else {
    console.log('HTMLDialogElement.cancel_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLDialogElement.cancel_event polyfill
if (!htmldialogelement.cancel_event) {
    // 在这里添加polyfill实现
    console.log('加载HTMLDialogElement.cancel_event polyfill');
}
```

