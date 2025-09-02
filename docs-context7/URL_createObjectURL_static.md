# URL.createObjectURL_static API 兼容性数据

## 基本信息

- **API名称**: `URL.createObjectURL_static`
- **MDN文档**: [URL.createObjectURL_static](https://developer.mozilla.org/docs/Web/API/URL/createObjectURL_static)
- **规范文档**: [查看规范](https://w3c.github.io/FileAPI/#dfn-createObjectURL)
- **标签**: `web-features:file`
- **描述**: `createObjectURL()` static method

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    bun: "1.0.0",
    chrome: "19",
    chrome_android: "同主版本",
    deno: "1.9",
    edge: "12",
    firefox: "19", // `createObjectURL()` is no longer available within the context of a `ServiceWorker`.,
    firefox_android: "同主版本",
    ie: "10", // If the underlying object does not have a content type set, using this URL as the `src` of an `img` t...,
    nodejs: "16.7.0",
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "6",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

