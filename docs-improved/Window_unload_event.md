# Window.unload_event API 兼容性数据

## 基本信息

- **API名称**: `Window.unload_event`
- **MDN文档**: [Window.unload_event](https://developer.mozilla.org/docs/Web/API/Window/unload_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-unload,https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onunload)
- **描述**: `unload` event

## 使用示例

### 基本用法

```javascript
// Window.unload_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.unload_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | 4 |  |
| Opera Android | 10.1 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: 4

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.unload_event是否支持
function isWindowUnload_eventSupported() {
    return 'unload_event' in window && typeof window.unload_event === 'function';
}

if (isWindowUnload_eventSupported()) {
    console.log('Window.unload_event 支持');
    // 使用Window.unload_event
} else {
    console.log('Window.unload_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.unload_event polyfill
if (!window.unload_event) {
    // 在这里添加polyfill实现
    console.log('加载Window.unload_event polyfill');
}
```

