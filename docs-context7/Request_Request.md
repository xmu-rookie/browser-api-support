# Request.Request API 兼容性数据

## 基本信息

- **API名称**: `Request.Request`
- **MDN文档**: [Request.Request](https://developer.mozilla.org/docs/Web/API/Request/Request)
- **规范文档**: [查看规范](https://fetch.spec.whatwg.org/#ref-for-dom-request①)
- **标签**: `web-features:fetch`
- **描述**: `Request()` constructor

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    bun: "1.0.0",
    chrome: "40",
    chrome_android: "同主版本",
    deno: "1.0", // Fetching with a `\"manual\"` redirect mode does not result in a `\"opaqueredirect\"` response, but a...,
    edge: "14",
    firefox: "39",
    firefox_android: "同主版本",
    nodejs: "18.0.0",
    oculus: "同主版本",
    opera: "27",
    opera_android: "27",
    safari: "10.1",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **cross_origin_stripped**: cross-origin `referrer` stripped out and `navigate` mode converted to `same-origin` when constructor created from existing `Request` object.
- **init_attributionReporting_parameter**: `init.attributionReporting` parameter
- **init_browsingTopics_parameter**: `init.browsingTopics` parameter
- **init_duplex_parameter**: `init.duplex` parameter
- **init_keepalive_parameter**: `init.keepalive` parameter
- **init_priority_parameter**: `init.priority` parameter
- **init_referrer_parameter**: `init.referrer` parameter
- **request_body_readablestream**: Send `ReadableStream` in request body
- **response_body_readablestream**: Consume `ReadableStream` as a response body

