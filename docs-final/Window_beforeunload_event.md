# Window.beforeunload_event API 兼容性数据

## 基本信息

- **API名称**: `Window.beforeunload_event`
- **MDN文档**: [Window.beforeunload_event](https://developer.mozilla.org/docs/Web/API/Window/beforeunload_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-beforeunload,https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onbeforeunload)
- **标签**: `web-features:beforeunload`
- **描述**: `beforeunload` event

## 使用示例

### 基本用法

```javascript
// Window.beforeunload_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.beforeunload_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.27 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | 12 |  |
| Safari | 3 |  |
| Safari iOS | 不支持 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Deno

- **支持版本**: 1.27

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: 12

### Opera Android

- **支持版本**: 12

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 不支持

## 相关子API

该API包含以下子功能：

- **event_returnvalue_activation**: Activation by setting `event.returnValue` to any truthy value
- **generic_string_displayed**: Dialog displays a generic string, not event handler return value
- **preventdefault_activation**: Activation using `event.preventDefault()`
- **return_string_activation**: Activation by returning a string

