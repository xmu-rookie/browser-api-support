# ServiceWorkerGlobalScope.pushsubscriptionchange_event API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerGlobalScope.pushsubscriptionchange_event`
- **MDN文档**: [ServiceWorkerGlobalScope.pushsubscriptionchange_event](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)
- **规范文档**: [查看规范](https://w3c.github.io/push-api/#the-pushsubscriptionchange-event,https://w3c.github.io/push-api/#dom-serviceworkerglobalscope-onpushsubscriptionchange)
- **标签**: `web-features:push`
- **描述**: `pushsubscriptionchange` event

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "138",
    chrome_android: "同主版本",
    edge: "17",
    firefox: "44", // The event does not have the `oldSubscription` and `newSubscription` properties. See [bug 1497429](ht...,
    firefox_android: "48", // The event does not have the `oldSubscription` and `newSubscription` properties. See [bug 1497429](ht...,
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "16", // Notifications are supported on macOS Ventura and later.,
    safari_ios: false,
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

