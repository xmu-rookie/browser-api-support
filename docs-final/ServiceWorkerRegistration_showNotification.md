# ServiceWorkerRegistration.showNotification API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerRegistration.showNotification`
- **MDN文档**: [ServiceWorkerRegistration.showNotification](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/showNotification)
- **规范文档**: [查看规范](https://notifications.spec.whatwg.org/#dom-serviceworkerregistration-shownotification)
- **标签**: `web-features:notifications`

## 使用示例

### 基本用法

```javascript
// ServiceWorkerRegistration.showNotification 使用示例
// 请查阅MDN文档了解具体用法
console.log('ServiceWorkerRegistration.showNotification API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 42 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 44 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16 | Notifications are supported on macOS Ventura and later. |
| Safari iOS | 16.4 | Notifications are supported in web apps saved to the home screen. |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 不支持 | Notifications are supported in web apps saved to the home screen. |

## 详细兼容性信息

### Chrome

- **支持版本**: 42

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 44

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

## 相关子API

该API包含以下子功能：

- **options_actions_parameter**: `options.actions` parameter
- **options_badge_parameter**: `options.badge` parameter
- **options_data_parameter**: `options.data` parameter
- **options_image_parameter**: `options.image` parameter
- **options_renotify_parameter**: `options.renotify` parameter
- **options_requireInteraction_parameter**: `options.requireInteraction` parameter
- **options_vibrate_parameter**: `options.vibrate` parameter

