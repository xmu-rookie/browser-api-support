# Window.hashchange_event API 兼容性数据

## 基本信息

- **API名称**: `Window.hashchange_event`
- **MDN文档**: [Window.hashchange_event](https://developer.mozilla.org/docs/Web/API/Window/hashchange_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-hashchange,https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onhashchange)
- **标签**: `web-features:hashchange`
- **描述**: `hashchange` event

## 使用示例

### 基本用法

```javascript
// Window.hashchange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.hashchange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 8 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 3.6 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 8 |  |
| Oculus | 同主版本 |  |
| Opera | 10.6 |  |
| Opera Android | 11 |  |
| Safari | 5 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 8
- **支持版本**: 4
- **移除版本**: 8
- **注意事项**:
  - A regular `Event` object is fired, rather than a `HashChangeEvent` object.

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.6

### Internet Explorer

- **支持版本**: 8

### Opera

- **支持版本**: 10.6

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.hashchange_event是否支持
function isWindowHashchange_eventSupported() {
    return 'hashchange_event' in window && typeof window.hashchange_event === 'function';
}

if (isWindowHashchange_eventSupported()) {
    console.log('Window.hashchange_event 支持');
    // 使用Window.hashchange_event
} else {
    console.log('Window.hashchange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.hashchange_event polyfill
if (!window.hashchange_event) {
    // 在这里添加polyfill实现
    console.log('加载Window.hashchange_event polyfill');
}
```

