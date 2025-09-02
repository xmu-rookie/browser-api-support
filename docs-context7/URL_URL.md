# URL.URL API 兼容性数据

## 基本信息

- **API名称**: `URL.URL`
- **MDN文档**: [URL.URL](https://developer.mozilla.org/docs/Web/API/URL/URL)
- **规范文档**: [查看规范](https://url.spec.whatwg.org/#dom-url-url)
- **标签**: `web-features:url`
- **描述**: `URL()` constructor

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    bun: "1.0.0",
    chrome: "19",
    chrome_android: "同主版本",
    deno: "1.0",
    edge: "12", // Before Edge 79, query arguments in the base URL argument are removed when calling the `URL` construc...,
    firefox: "26", // Before version 122, `host`, `hostname`, and `port` were not parsed for unknown protocols/schemes.,
    firefox_android: "同主版本",
    nodejs: "6.13.0",
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "14.1",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

