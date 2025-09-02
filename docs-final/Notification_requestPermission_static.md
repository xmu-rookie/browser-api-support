# Notification.requestPermission_static API 兼容性数据

## 基本信息

- **API名称**: `Notification.requestPermission_static`
- **MDN文档**: [Notification.requestPermission_static](https://developer.mozilla.org/docs/Web/API/Notification/requestPermission_static)
- **规范文档**: [查看规范](https://notifications.spec.whatwg.org/#dom-notification-requestpermission)
- **标签**: `web-features:notifications`
- **描述**: `requestPermission()` static method

## 使用示例

### 基本用法

```javascript
// Notification.requestPermission_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('Notification.requestPermission_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 20 |  |
| Chrome Android | 42 |  |
| Edge | 14 |  |
| Firefox | 22 | From Firefox 70 onwards, cannot be called from a cross-origin `iframe`.; From Firefox 72 onwards, ca... |
| Firefox Android | 22 | From Firefox Android 79 onwards, cannot be called from a cross-origin `iframe`.; From Firefox Androi... |
| Oculus | 同主版本 |  |
| Opera | 23 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 |  |
| Safari iOS | 16.4 | The parent <code>Notification</code> interface is undefined unless the page is a web app saved to th... |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 20

### Chrome Android

- **支持版本**: 42

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 22
- **注意事项**:
  - From Firefox 70 onwards, cannot be called from a cross-origin `iframe`.
  - From Firefox 72 onwards, can only be called in response to a user gesture such as a `click` event.

### Firefox Android

- **支持版本**: 22
- **注意事项**:
  - From Firefox Android 79 onwards, cannot be called from a cross-origin `iframe`.
  - From Firefox Android 79 onwards, can only be called in response to a user gesture such as a `click` event.

### Opera

- **支持版本**: 23

### Safari

- **支持版本**: 15
- **支持版本**: 7
- **移除版本**: 15
- **部分实现**: 是
- **注意事项**:
  - Only supported the deprecated callback syntax.

### Safari iOS

- **支持版本**: 16.4
- **部分实现**: 是
- **注意事项**:
  - The parent <code>Notification</code> interface is undefined unless the page is a web app saved to the home screen. The app's manifest must have a non-default <code>display</code> value.

### WebView Android

- **支持版本**: 不支持

### webview_ios

- **支持版本**: 不支持

## 相关子API

该API包含以下子功能：

- **returns_promise**: Returns a `Promise`

