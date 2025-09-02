# Location.reload API 兼容性数据

## 基本信息

- **API名称**: `Location.reload`
- **MDN文档**: [Location.reload](https://developer.mozilla.org/docs/Web/API/Location/reload)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-location-reload-dev)
- **标签**: `web-features:location`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "1",
    chrome_android: "同主版本",
    deno: "1.7", // This method exists but has no effect in Deno.,
    edge: "12",
    firefox: "1",
    firefox_android: "同主版本",
    ie: "5.5", // If a page added to _Trusted Sites_ contains a cross-origin iframe, then calling `reload()` from with...,
    oculus: "同主版本",
    opera: "3",
    opera_android: "10.1",
    safari: "1",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

