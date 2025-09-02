# Window.confirm API 兼容性数据

## 基本信息

- **API名称**: `Window.confirm`
- **MDN文档**: [Window.confirm](https://developer.mozilla.org/docs/Web/API/Window/confirm)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-confirm-dev)
- **标签**: `web-features:alerts`

## 使用示例

### 基本用法

```javascript
// Window.confirm 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.confirm API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 | Starting with Chrome 46, this method is blocked inside an `<iframe>` unless its sandbox attribute ha... |
| Chrome Android | 同主版本 |  |
| Deno | 1.5 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | 3 | Starting with Opera 33, this method is blocked inside an `<iframe>` unless its sandbox attribute has... |
| Opera Android | 10.1 | Starting with Opera 33, this method is blocked inside an `<iframe>` unless its sandbox attribute has... |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 1 | Starting with Chrome 46, this method is blocked inside an `<iframe>` unless its sandbox attribute ha... |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1
- **注意事项**:
  - Starting with Chrome 46, this method is blocked inside an `<iframe>` unless its sandbox attribute has the value `allow-modals`.

### Deno

- **支持版本**: 1.5

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: 3
- **注意事项**:
  - Starting with Opera 33, this method is blocked inside an `<iframe>` unless its sandbox attribute has the value `allow-modals`.

### Opera Android

- **支持版本**: 10.1
- **注意事项**:
  - Starting with Opera 33, this method is blocked inside an `<iframe>` unless its sandbox attribute has the value `allow-modals`.

### Safari

- **支持版本**: 1

### WebView Android

- **支持版本**: 1
- **注意事项**:
  - Starting with Chrome 46, this method is blocked inside an `<iframe>` unless its sandbox attribute has the value `allow-modals`.

