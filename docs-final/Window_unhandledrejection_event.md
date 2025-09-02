# Window.unhandledrejection_event API 兼容性数据

## 基本信息

- **API名称**: `Window.unhandledrejection_event`
- **MDN文档**: [Window.unhandledrejection_event](https://developer.mozilla.org/docs/Web/API/Window/unhandledrejection_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-unhandledrejection,https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onunhandledrejection)
- **描述**: `unhandledrejection` event

## 使用示例

### 基本用法

```javascript
// Window.unhandledrejection_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.unhandledrejection_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.24 |  |
| Edge | 同主版本 |  |
| Firefox | 69 | `event.preventDefault()` does not prevent Firefox from logging the error message in the console, see... |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 11.3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 49

### Deno

- **支持版本**: 1.24

### Firefox

- **支持版本**: 69
- **注意事项**:
  - `event.preventDefault()` does not prevent Firefox from logging the error message in the console, see [bug 1642147](https://bugzil.la/1642147).

### Safari

- **支持版本**: 11

### Safari iOS

- **支持版本**: 11.3

