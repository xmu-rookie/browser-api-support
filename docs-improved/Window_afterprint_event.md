# Window.afterprint_event API 兼容性数据

## 基本信息

- **API名称**: `Window.afterprint_event`
- **MDN文档**: [Window.afterprint_event](https://developer.mozilla.org/docs/Web/API/Window/afterprint_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-afterprint,https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onafterprint)
- **标签**: `web-features:print-events`
- **描述**: `afterprint` event

## 使用示例

### 基本用法

```javascript
// Window.afterprint_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.afterprint_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 63 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 6 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 63

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 6

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 13

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.afterprint_event是否支持
function isWindowAfterprint_eventSupported() {
    return 'afterprint_event' in window && typeof window.afterprint_event === 'function';
}

if (isWindowAfterprint_eventSupported()) {
    console.log('Window.afterprint_event 支持');
    // 使用Window.afterprint_event
} else {
    console.log('Window.afterprint_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.afterprint_event polyfill
if (!window.afterprint_event) {
    // 在这里添加polyfill实现
    console.log('加载Window.afterprint_event polyfill');
}
```

