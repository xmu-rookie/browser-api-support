# Document.getElementsByName API 兼容性数据

## 基本信息

- **API名称**: `Document.getElementsByName`
- **MDN文档**: [Document.getElementsByName](https://developer.mozilla.org/docs/Web/API/Document/getElementsByName)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dom.html#dom-document-getelementsbyname-dev)
- **标签**: `web-features:dom`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "1",
    chrome_android: "同主版本",
    edge: "12", // Before Edge 79, this method returns an `HTMLCollection`, not a `NodeList`.,
    firefox: "58",
    firefox_android: "同主版本",
    ie: "5", // Returns an `HTMLCollection`, not a `NodeList`,
    oculus: "同主版本",
    opera: "5",
    opera_android: "10.1",
    safari: "4",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

