# HTMLElement.toggle_event API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.toggle_event`
- **MDN文档**: [HTMLElement.toggle_event](https://developer.mozilla.org/docs/Web/API/HTMLElement/toggle_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-toggle)
- **标签**: `web-features:popover`, `web-features:dialog`, `web-features:details`
- **描述**: `toggle` event

## 使用示例

### 基本用法

```javascript
// HTMLElement.toggle_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.toggle_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 36 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 49 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 36

### Firefox

- **支持版本**: 49

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.toggle_event是否支持
function isHTMLElementToggle_eventSupported() {
    return 'toggle_event' in htmlelement && typeof htmlelement.toggle_event === 'function';
}

if (isHTMLElementToggle_eventSupported()) {
    console.log('HTMLElement.toggle_event 支持');
    // 使用HTMLElement.toggle_event
} else {
    console.log('HTMLElement.toggle_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.toggle_event polyfill
if (!htmlelement.toggle_event) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.toggle_event polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **details_elements**: `toggle` event fires at details elements
- **dialog_elements**: `toggle` event fires at dialog elements
- **popover_elements**: `toggle` event fires at popover elements

