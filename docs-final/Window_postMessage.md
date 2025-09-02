# Window.postMessage API 兼容性数据

## 基本信息

- **API名称**: `Window.postMessage`
- **MDN文档**: [Window.postMessage](https://developer.mozilla.org/docs/Web/API/Window/postMessage)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/web-messaging.html#dom-window-postmessage-options-dev)
- **标签**: `web-features:postmessage`

## 使用示例

### 基本用法

```javascript
// Window.postMessage 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.postMessage API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 3 | Firefox 8 and up supports sending `File` and `FileList` objects between windows. This is only allowe... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 | IE10 had an important limitation: see this [article](https://stackoverflow.com/questions/16226924/is... |
| Oculus | 同主版本 |  |
| Opera | 9.5 |  |
| Opera Android | 10.1 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 2

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3
- **注意事项**:
  - Firefox 8 and up supports sending `File` and `FileList` objects between windows. This is only allowed if the recipient's principal is contained within the sender's principal for security reasons.
  - Before Firefox 6, the `message` parameter must be a string. Since Firefox 6, the `message` parameter is serialized using the [structured clone algorithm](https://developer.mozilla.org/docs/Web/API/Web_Workers_API/Structured_clone_algorithm). This means you can pass a broad variety of data objects safely to the destination window without having to serialize them yourself.

### Internet Explorer

- **支持版本**: 10
- **注意事项**:
  - IE10 had an important limitation: see this [article](https://stackoverflow.com/questions/16226924/is-cross-origin-postmessage-broken-in-ie10) for details.
- **支持版本**: 8
- **移除版本**: 10
- **部分实现**: 是
- **注意事项**:
  - Support only for `<frame>` and `<iframe>`.

### Opera

- **支持版本**: 9.5

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 4

## 相关子API

该API包含以下子功能：

- **options_delegate_parameter**: `options.delegate` parameter
- **options_includeUserActivation_parameter**: `options.includeUserActivation` parameter
- **transfer_parameter**: `transfer` parameter

