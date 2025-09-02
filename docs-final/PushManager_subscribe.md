# PushManager.subscribe API 兼容性数据

## 基本信息

- **API名称**: `PushManager.subscribe`
- **MDN文档**: [PushManager.subscribe](https://developer.mozilla.org/docs/Web/API/PushManager/subscribe)
- **规范文档**: [查看规范](https://w3c.github.io/push-api/#dom-pushmanager-subscribe)
- **标签**: `web-features:push`

## 使用示例

### 基本用法

```javascript
// PushManager.subscribe 使用示例
// 请查阅MDN文档了解具体用法
console.log('PushManager.subscribe API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 42 | The `options` parameter with a `applicationServerKey` value is required. |
| Chrome Android | 同主版本 |  |
| Edge | 17 | The `options` parameter with a `applicationServerKey` value is required. |
| Firefox | 44 | From Firefox 72 onwards, can only be called in response to a user gesture such as a `click` event. |
| Firefox Android | 48 | From Firefox Android 79 onwards, can only be called in response to a user gesture such as a `click` ... |
| Oculus | 同主版本 |  |
| Opera | 29 |  |
| Opera Android | 同主版本 |  |
| Safari | 16 | Notifications are supported on macOS Ventura and later. |
| Safari iOS | 16.4 | Notifications are supported in web apps saved to the home screen. |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 不支持 | Notifications are supported in web apps saved to the home screen. |

## 详细兼容性信息

### Chrome

- **支持版本**: 42
- **注意事项**:
  - The `options` parameter with a `applicationServerKey` value is required.

### Edge

- **支持版本**: 17
- **注意事项**:
  - The `options` parameter with a `applicationServerKey` value is required.

### Firefox

- **支持版本**: 44
- **注意事项**:
  - From Firefox 72 onwards, can only be called in response to a user gesture such as a `click` event.

### Firefox Android

- **支持版本**: 48
- **注意事项**:
  - From Firefox Android 79 onwards, can only be called in response to a user gesture such as a `click` event.

### Opera

- **支持版本**: 29

### Safari

- **支持版本**: 16
- **注意事项**:
  - Notifications are supported on macOS Ventura and later.

### Safari iOS

- **支持版本**: 16.4
- **注意事项**:
  - Notifications are supported in web apps saved to the home screen.

### WebView Android

- **支持版本**: 不支持

### webview_ios

- **支持版本**: 不支持
- **注意事项**:
  - Notifications are supported in web apps saved to the home screen.

