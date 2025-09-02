# Navigator.serviceWorker API 兼容性数据

## 基本信息

- **API名称**: `Navigator.serviceWorker`
- **MDN文档**: [Navigator.serviceWorker](https://developer.mozilla.org/docs/Web/API/Navigator/serviceWorker)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#navigator-service-worker-attribute)
- **标签**: `web-features:service-workers`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "40",
    chrome_android: "同主版本",
    edge: "17",
    firefox: "44", // In Firefox private windows, the `serviceWorker` object is `undefined`. See [bug 1320796](https://bug...,
    firefox_android: "同主版本",
    nodejs: false,
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

