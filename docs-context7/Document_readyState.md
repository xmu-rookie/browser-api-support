# Document.readyState API 兼容性数据

## 基本信息

- **API名称**: `Document.readyState`
- **MDN文档**: [Document.readyState](https://developer.mozilla.org/docs/Web/API/Document/readyState)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dom.html#current-document-readiness)
- **标签**: `web-features:dom`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "1",
    chrome_android: "同主版本",
    edge: "12",
    firefox: "3.6",
    firefox_android: "同主版本",
    ie: "11",
    oculus: "同主版本",
    opera: "11", // Opera Presto fires 'complete' late after the 'load' event (in an incorrect order as per HTML5 standa...,
    opera_android: "11", // Opera Presto fires 'complete' late after the 'load' event (in an incorrect order as per HTML5 standa...,
    safari: "1",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

