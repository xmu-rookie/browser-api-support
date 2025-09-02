# HTMLInputElement.cancel_event API 兼容性数据

## 基本信息

- **API名称**: `HTMLInputElement.cancel_event`
- **MDN文档**: [HTMLInputElement.cancel_event](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/cancel_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-cancel,https://html.spec.whatwg.org/multipage/webappapis.html#handler-oncancel)
- **标签**: `web-features:input`
- **描述**: `cancel` event

## 使用示例

### 基本用法

```javascript
// HTMLInputElement.cancel_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLInputElement.cancel_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 113 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 91 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 113

### Firefox

- **支持版本**: 91

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLInputElement.cancel_event是否支持
function isHTMLInputElementCancel_eventSupported() {
    return 'cancel_event' in htmlinputelement && typeof htmlinputelement.cancel_event === 'function';
}

if (isHTMLInputElementCancel_eventSupported()) {
    console.log('HTMLInputElement.cancel_event 支持');
    // 使用HTMLInputElement.cancel_event
} else {
    console.log('HTMLInputElement.cancel_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLInputElement.cancel_event polyfill
if (!htmlinputelement.cancel_event) {
    // 在这里添加polyfill实现
    console.log('加载HTMLInputElement.cancel_event polyfill');
}
```

