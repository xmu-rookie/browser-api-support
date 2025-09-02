# HTMLElement.toggle_event.dialog_elements API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.toggle_event.dialog_elements`
- **MDN文档**: [HTMLElement.toggle_event.dialog_elements](https://developer.mozilla.org/docs/Web/API/HTMLElement/toggle_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-toggle)
- **标签**: `web-features:dialog`
- **描述**: `toggle` event fires at dialog elements

## 使用示例

### 基本用法

```javascript
// HTMLElement.toggle_event.dialog_elements 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.toggle_event.dialog_elements API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 132 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 133 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 132

### Firefox

- **支持版本**: 133

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.toggle_event.dialog_elements是否支持
function isHTMLElementToggle_eventSupported() {
    return 'toggle_event' in htmlelement && typeof htmlelement.toggle_event === 'function';
}

if (isHTMLElementToggle_eventSupported()) {
    console.log('HTMLElement.toggle_event.dialog_elements 支持');
    // 使用HTMLElement.toggle_event.dialog_elements
} else {
    console.log('HTMLElement.toggle_event.dialog_elements 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.toggle_event.dialog_elements polyfill
if (!htmlelement.toggle_event) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.toggle_event.dialog_elements polyfill');
}
```

