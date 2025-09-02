# Notification.Notification API 兼容性数据

## 基本信息

- **API名称**: `Notification.Notification`
- **MDN文档**: [Notification.Notification](https://developer.mozilla.org/docs/Web/API/Notification/Notification)
- **规范文档**: [查看规范](https://notifications.spec.whatwg.org/#dom-notification-notification)
- **标签**: `web-features:notifications`
- **描述**: `Notification()` constructor

## 使用示例

### 基本用法

```javascript
// Notification.Notification 使用示例
// 请查阅MDN文档了解具体用法
console.log('Notification.Notification API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 20 |  |
| Chrome Android | 42 | A notification can only be sent from a service worker. To show a notification, see <a href='https://... |
| Edge | 14 |  |
| Firefox | 22 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 23 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 16.4 | This constructor throws a <code>ReferenceError</code> exception, unless the page is a web app saved ... |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 20

### Chrome Android

- **支持版本**: 42
- **部分实现**: 是
- **注意事项**:
  - A notification can only be sent from a service worker. To show a notification, see <a href='https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/showNotification'><code>ServiceWorkerRegistration.showNotification()</code></a>.
  - This constructor always throws a <code>TypeError</code> exception.

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 22
- **支持版本**: 4
- **前缀**: moz

### Opera

- **支持版本**: 23

### Safari

- **支持版本**: 7

### Safari iOS

- **支持版本**: 16.4
- **部分实现**: 是
- **注意事项**:
  - This constructor throws a <code>ReferenceError</code> exception, unless the page is a web app saved to the home screen. The app's manifest must have a non-default <code>display</code> value.
  - A notification can only be sent from a service worker. To show a notification, see <a href='https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/showNotification'><code>ServiceWorkerRegistration.showNotification()</code></a>.

### WebView Android

- **支持版本**: 不支持

### webview_ios

- **支持版本**: 不支持

