# Worker.postMessage API 兼容性数据

## 基本信息

- **API名称**: `Worker.postMessage`
- **MDN文档**: [Worker.postMessage](https://developer.mozilla.org/docs/Web/API/Worker/postMessage)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/workers.html#dom-worker-postmessage-dev)
- **标签**: `web-features:postmessage`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    bun: "1.0.0",
    chrome: "2",
    chrome_android: "同主版本",
    deno: "1.14", // The `message` parameter does not support cloning `Blob` values.,
    edge: "12",
    firefox: "3.5",
    firefox_android: "同主版本",
    ie: "10", // Internet Explorer does not support `Transferable` objects.,
    nodejs: "11.7.0", // Only accepts an array of transfer objects as the second parameter, not an options object with a `tra...,
    oculus: "同主版本",
    opera: "10.6",
    opera_android: "11",
    safari: "4",
    safari_ios: "5",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **options_includeUserActivation_parameter**: `options.includeUserActivation` parameter

