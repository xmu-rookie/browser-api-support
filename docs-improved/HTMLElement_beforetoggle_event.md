# HTMLElement.beforetoggle_event API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.beforetoggle_event`
- **MDN文档**: [HTMLElement.beforetoggle_event](https://developer.mozilla.org/docs/Web/API/HTMLElement/beforetoggle_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-beforetoggle)
- **标签**: `web-features:popover`, `web-features:dialog`
- **描述**: `beforetoggle` event

## 使用示例

### 基本用法

```javascript
// HTMLElement.beforetoggle_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.beforetoggle_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 114 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 125 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 114

### Firefox

- **支持版本**: 125

### Safari

- **支持版本**: 17

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.beforetoggle_event是否支持
function isHTMLElementBeforetoggle_eventSupported() {
    return 'beforetoggle_event' in htmlelement && typeof htmlelement.beforetoggle_event === 'function';
}

if (isHTMLElementBeforetoggle_eventSupported()) {
    console.log('HTMLElement.beforetoggle_event 支持');
    // 使用HTMLElement.beforetoggle_event
} else {
    console.log('HTMLElement.beforetoggle_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.beforetoggle_event polyfill
if (!htmlelement.beforetoggle_event) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.beforetoggle_event polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **dialog_elements**: `beforetoggle` event fires at dialog elements
- **popover_elements**: `beforetoggle` event fires at popover elements

