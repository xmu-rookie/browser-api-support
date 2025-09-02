# ServiceWorkerRegistration.showNotification API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerRegistration.showNotification`
- **MDN文档**: [ServiceWorkerRegistration.showNotification](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/showNotification)
- **规范文档**: [查看规范](https://notifications.spec.whatwg.org/#dom-serviceworkerregistration-shownotification)
- **标签**: `web-features:notifications`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "42",
    chrome_android: "同主版本",
    edge: "17",
    firefox: "44",
    firefox_android: "同主版本",
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "16", // Notifications are supported on macOS Ventura and later.,
    safari_ios: "16.4", // Notifications are supported in web apps saved to the home screen.,
    samsunginternet_android: "同主版本",
    webview_android: false,
    webview_ios: false, // Notifications are supported in web apps saved to the home screen.,
};

```

## 相关子API

该API包含以下子功能：

- **options_actions_parameter**: `options.actions` parameter
- **options_badge_parameter**: `options.badge` parameter
- **options_data_parameter**: `options.data` parameter
- **options_image_parameter**: `options.image` parameter
- **options_renotify_parameter**: `options.renotify` parameter
- **options_requireInteraction_parameter**: `options.requireInteraction` parameter
- **options_vibrate_parameter**: `options.vibrate` parameter

