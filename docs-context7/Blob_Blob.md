# Blob.Blob API 兼容性数据

## 基本信息

- **API名称**: `Blob.Blob`
- **MDN文档**: [Blob.Blob](https://developer.mozilla.org/docs/Web/API/Blob/Blob)
- **规范文档**: [查看规范](https://w3c.github.io/FileAPI/#constructorBlob)
- **标签**: `web-features:file`
- **描述**: `Blob()` constructor

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    bun: "1.0.0",
    chrome: "20",
    chrome_android: "同主版本",
    deno: "1.0",
    edge: "12",
    firefox: "13", // Before Firefox 16, the second parameter, when set to `null` or `undefined`, leads to an error instea...,
    firefox_android: "同主版本",
    ie: "10", // IE10 throws `InvalidStateError` with a `TypedArray` argument. Consider using `MSBuilder` as an alter...,
    nodejs: "15.7.0", // Before v16.7.0, the `endings` option was not supported.,
    oculus: "同主版本",
    opera: "12",
    opera_android: "12",
    safari: "6",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

