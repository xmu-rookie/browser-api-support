# Location.origin API 兼容性数据

## 基本信息

- **API名称**: `Location.origin`
- **MDN文档**: [Location.origin](https://developer.mozilla.org/docs/Web/API/Location/origin)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-location-origin-dev)
- **标签**: `web-features:location`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "8",
    chrome_android: "同主版本",
    deno: "1.7",
    edge: "12",
    firefox: "21", // Before Firefox 49, results for URL using the blob scheme incorrectly returned null.,
    firefox_android: "同主版本",
    ie: "11", // Intranet sites are set to Compatibility View, which will emulate IE7 and omit `window.location.origi...,
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "5.1",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "3",
    webview_ios: "同主版本",
};

```

