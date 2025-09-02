# FetchEvent.respondWith API 兼容性数据

## 基本信息

- **API名称**: `FetchEvent.respondWith`
- **MDN文档**: [FetchEvent.respondWith](https://developer.mozilla.org/docs/Web/API/FetchEvent/respondWith)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#fetch-event-respondwith)
- **标签**: `web-features:service-workers`

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
    safari: "11.1",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: false,
};

```

## 相关子API

该API包含以下子功能：

- **networkerror_on_same-origin_cors**: `NetworkError` thrown if the request mode is `same-origin` and the response type is `cors`
- **resource_url**: Change in behavior when specifying the final URL of a resource.

