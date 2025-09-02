# Request.redirect API 兼容性数据

## 基本信息

- **API名称**: `Request.redirect`
- **MDN文档**: [Request.redirect](https://developer.mozilla.org/docs/Web/API/Request/redirect)
- **规范文档**: [查看规范](https://fetch.spec.whatwg.org/#ref-for-dom-request-redirect②)
- **标签**: `web-features:fetch`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    bun: "1.0.0",
    chrome: "46",
    chrome_android: "同主版本",
    deno: "1.0", // Fetching with a `\"manual\"` redirect mode does not result in a `\"opaqueredirect\"` response, but a...,
    edge: "14",
    firefox: "43",
    firefox_android: "同主版本",
    nodejs: "18.0.0",
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "10.1",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

