# Window.online_event API 兼容性数据

## 基本信息

- **API名称**: `Window.online_event`
- **MDN文档**: [Window.online_event](https://developer.mozilla.org/docs/Web/API/Window/online_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-online,https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-ononline)
- **标签**: `web-features:online`
- **描述**: `online` event

## 使用示例

### 基本用法

```javascript
// Window.online_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.online_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 3 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 9 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 4 |  |
| Safari iOS | 3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 3

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 9

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.online_event是否支持
function isWindowOnline_eventSupported() {
    return 'online_event' in window && typeof window.online_event === 'function';
}

if (isWindowOnline_eventSupported()) {
    console.log('Window.online_event 支持');
    // 使用Window.online_event
} else {
    console.log('Window.online_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.online_event polyfill
if (!window.online_event) {
    // 在这里添加polyfill实现
    console.log('加载Window.online_event polyfill');
}
```

