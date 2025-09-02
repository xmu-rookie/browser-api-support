# Headers.get API 兼容性数据

## 基本信息

- **API名称**: `Headers.get`
- **MDN文档**: [Headers.get](https://developer.mozilla.org/docs/Web/API/Headers/get)
- **规范文档**: [查看规范](https://fetch.spec.whatwg.org/#ref-for-dom-headers-get①)
- **标签**: `web-features:fetch`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    bun: "1.0.0",
    chrome: "42", // Before version 57, `get()` returns only the first value for the specified header.,
    chrome_android: "同主版本",
    deno: "1.0",
    edge: "14",
    firefox: "39", // Before version 52, `get()` returns only the first value for the specified header.,
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

