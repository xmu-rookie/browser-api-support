# Notification API 兼容性数据

## 基本信息

- **API名称**: `Notification`
- **MDN文档**: [Notification](https://developer.mozilla.org/docs/Web/API/Notification)
- **规范文档**: [查看规范](https://notifications.spec.whatwg.org/#api)
- **标签**: `web-features:notifications`

## 使用示例

### 基本用法

```javascript
// Notification 使用示例
// 请查阅MDN文档了解具体用法
console.log('Notification API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 20 | Starting in Chrome 49, notifications do not work in incognito mode.; Before Chrome 42, service worker additions were not supported. |
| Chrome Android | 42 (部分支持) | A notification can only be sent from a service worker. To show a notification, see <a href='https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/showNotification'><code>ServiceWorkerRegistration.showNotification()</code></a>. |
| Edge | 14 |  |
| Firefox | 未知 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 23 | Starting in Opera 36, notifications do not work in incognito mode.; Before Opera 29, service worker additions were not supported. |
| Opera Android | 29 (部分支持) | Notifications in Opera for Android are only available through service workers. To show notifications on Android, see [`ServiceWorkerRegistration.showNotification()`](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/showNotification).; Starting in Opera for Android 36, notifications do not work in incognito mode. |
| Safari | 7 |  |
| Safari iOS | 16.4 (部分支持) | The <code>Notification</code> interface is undefined, unless the page is a web app saved to the home screen. The app's manifest must have a non-default <code>display</code> value.; A notification can only be sent from a service worker. To show a notification, see <a href='https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/showNotification'><code>ServiceWorkerRegistration.showNotification()</code></a>. |
| Samsung Internet | 4.0 (部分支持) | Notifications in Samsung Internet are only available through service workers. To show notifications on Android, see [`ServiceWorkerRegistration.showNotification()`](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/showNotification).; Starting in Samsung Internet 5.0, notifications do not work in incognito mode. |
| WebView Android | ❌ 不支持 |  |
| webview_ios | ❌ 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 20
- **注意事项**:
  - Starting in Chrome 49, notifications do not work in incognito mode.
  - Before Chrome 42, service worker additions were not supported.

### Chrome Android

- **支持版本**: 42
- **部分实现**: 是
- **注意事项**:
  - A notification can only be sent from a service worker. To show a notification, see <a href='https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/showNotification'><code>ServiceWorkerRegistration.showNotification()</code></a>.

### Edge

- **支持版本**: 14

### Firefox


### Opera

- **支持版本**: 23
- **注意事项**:
  - Starting in Opera 36, notifications do not work in incognito mode.
  - Before Opera 29, service worker additions were not supported.

### Opera Android

- **支持版本**: 29
- **部分实现**: 是
- **注意事项**:
  - Notifications in Opera for Android are only available through service workers. To show notifications on Android, see [`ServiceWorkerRegistration.showNotification()`](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/showNotification).
  - Starting in Opera for Android 36, notifications do not work in incognito mode.

### Safari

- **支持版本**: 7

### Safari iOS

- **支持版本**: 16.4
- **部分实现**: 是
- **注意事项**:
  - The <code>Notification</code> interface is undefined, unless the page is a web app saved to the home screen. The app's manifest must have a non-default <code>display</code> value.
  - A notification can only be sent from a service worker. To show a notification, see <a href='https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/showNotification'><code>ServiceWorkerRegistration.showNotification()</code></a>.

### Samsung Internet

- **支持版本**: 4.0
- **部分实现**: 是
- **注意事项**:
  - Notifications in Samsung Internet are only available through service workers. To show notifications on Android, see [`ServiceWorkerRegistration.showNotification()`](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/showNotification).
  - Starting in Samsung Internet 5.0, notifications do not work in incognito mode.

### WebView Android

- **支持版本**: 不支持

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Notification是否支持
function isNotificationSupported() {
    return 'Notification' in window || typeof Notification !== 'undefined';
}

if (isNotificationSupported()) {
    console.log('Notification 支持');
    // 使用Notification
} else {
    console.log('Notification 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Notification polyfill
if (!window.Notification) {
    // 在这里添加polyfill实现
    console.log('加载Notification polyfill');
}
```

