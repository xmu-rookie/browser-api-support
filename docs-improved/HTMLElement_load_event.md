# HTMLElement.load_event API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.load_event`
- **MDN文档**: [HTMLElement.load_event](https://developer.mozilla.org/docs/Web/API/HTMLElement/load_event)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#event-type-load,https://html.spec.whatwg.org/multipage/webappapis.html#handler-onload,https://html.spec.whatwg.org/multipage/indices.html#event-load)
- **标签**: `web-features:dom`
- **描述**: `load` event

## 使用示例

### 基本用法

```javascript
// HTMLElement.load_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.load_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 |  |
| Oculus | 同主版本 |  |
| Opera | 8 |  |
| Opera Android | 10.1 |  |
| Safari | 1.3 |  |
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

- **支持版本**: 5.5

### Opera

- **支持版本**: 8

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1.3

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.load_event是否支持
function isHTMLElementLoad_eventSupported() {
    return 'load_event' in htmlelement && typeof htmlelement.load_event === 'function';
}

if (isHTMLElementLoad_eventSupported()) {
    console.log('HTMLElement.load_event 支持');
    // 使用HTMLElement.load_event
} else {
    console.log('HTMLElement.load_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.load_event polyfill
if (!htmlelement.load_event) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.load_event polyfill');
}
```

