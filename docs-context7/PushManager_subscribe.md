# PushManager.subscribe API 兼容性数据

## 基本信息

- **API名称**: `PushManager.subscribe`
- **MDN文档**: [PushManager.subscribe](https://developer.mozilla.org/docs/Web/API/PushManager/subscribe)
- **规范文档**: [查看规范](https://w3c.github.io/push-api/#dom-pushmanager-subscribe)
- **标签**: `web-features:push`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "42", // The `options` parameter with a `applicationServerKey` value is required.,
    chrome_android: "同主版本",
    edge: "17", // The `options` parameter with a `applicationServerKey` value is required.,
    firefox: "44", // From Firefox 72 onwards, can only be called in response to a user gesture such as a `click` event.,
    firefox_android: "48", // From Firefox Android 79 onwards, can only be called in response to a user gesture such as a `click` ...,
    oculus: "同主版本",
    opera: "29",
    opera_android: "同主版本",
    safari: "16", // Notifications are supported on macOS Ventura and later.,
    safari_ios: "16.4", // Notifications are supported in web apps saved to the home screen.,
    samsunginternet_android: "同主版本",
    webview_android: false,
    webview_ios: false, // Notifications are supported in web apps saved to the home screen.,
};

```

