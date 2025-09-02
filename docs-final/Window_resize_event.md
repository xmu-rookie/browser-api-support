# Window.resize_event API 兼容性数据

## 基本信息

- **API名称**: `Window.resize_event`
- **MDN文档**: [Window.resize_event](https://developer.mozilla.org/docs/Web/API/Window/resize_event)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#eventdef-window-resize)
- **标签**: `web-features:window`
- **描述**: `resize` event

## 使用示例

### 基本用法

```javascript
// Window.resize_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.resize_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 | Chrome does not fire a `resize` event on page load. |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 | Before Edge 79, Edge fired a `resize` event on page load. This is no longer the case. |
| Firefox | 1 | Before Firefox 68, Firefox fired a `resize` event on page load. This is no longer the case. |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | 7 | Opera does not fire a `resize` event on page load. |
| Opera Android | 10.1 | Opera does not fire a `resize` event on page load. |
| Safari | 1.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 1 | WebView does not fire a `resize` event on page load. |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1
- **注意事项**:
  - Chrome does not fire a `resize` event on page load.

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12
- **注意事项**:
  - Before Edge 79, Edge fired a `resize` event on page load. This is no longer the case.

### Firefox

- **支持版本**: 1
- **注意事项**:
  - Before Firefox 68, Firefox fired a `resize` event on page load. This is no longer the case.

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: 7
- **注意事项**:
  - Opera does not fire a `resize` event on page load.

### Opera Android

- **支持版本**: 10.1
- **注意事项**:
  - Opera does not fire a `resize` event on page load.

### Safari

- **支持版本**: 1.1

### WebView Android

- **支持版本**: 1
- **注意事项**:
  - WebView does not fire a `resize` event on page load.

