# Window.popstate_event API 兼容性数据

## 基本信息

- **API名称**: `Window.popstate_event`
- **MDN文档**: [Window.popstate_event](https://developer.mozilla.org/docs/Web/API/Window/popstate_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-popstate,https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onpopstate)
- **标签**: `web-features:history`
- **描述**: `popstate` event

## 使用示例

### 基本用法

```javascript
// Window.popstate_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.popstate_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 5 | Before version 34, Chrome would fire a `popstate` event on page load. |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 11.5 |  |
| Opera Android | 11.5 |  |
| Safari | 5 | Before version 10, Safari would fire a `popstate` event on page load. |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 5
- **注意事项**:
  - Before version 34, Chrome would fire a `popstate` event on page load.

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 11.5

### Opera Android

- **支持版本**: 11.5

### Safari

- **支持版本**: 5
- **注意事项**:
  - Before version 10, Safari would fire a `popstate` event on page load.

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.popstate_event是否支持
function isWindowPopstate_eventSupported() {
    return 'popstate_event' in window && typeof window.popstate_event === 'function';
}

if (isWindowPopstate_eventSupported()) {
    console.log('Window.popstate_event 支持');
    // 使用Window.popstate_event
} else {
    console.log('Window.popstate_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.popstate_event polyfill
if (!window.popstate_event) {
    // 在这里添加polyfill实现
    console.log('加载Window.popstate_event polyfill');
}
```

