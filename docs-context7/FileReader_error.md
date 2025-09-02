# FileReader.error API 兼容性数据

## 基本信息

- **API名称**: `FileReader.error`
- **MDN文档**: [FileReader.error](https://developer.mozilla.org/docs/Web/API/FileReader/error)
- **规范文档**: [查看规范](https://w3c.github.io/FileAPI/#dom-filereader-error)
- **标签**: `web-features:file`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "6",
    chrome_android: "同主版本",
    deno: "1.3",
    edge: "12",
    firefox: "3.6",
    firefox_android: "32", // From Firefox 32 to Firefox 58, the `error` property returned a `DOMError` object.; From Firefox 58, ...,
    ie: "10", // The `error` property returns a `DOMError` object.,
    oculus: "同主版本",
    opera: "11",
    opera_android: "11",
    safari: "6", // The `error` property returns a `DOMError` object.,
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "3",
    webview_ios: "同主版本",
};

```

