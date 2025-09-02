# Document.createElementNS API 兼容性数据

## 基本信息

- **API名称**: `Document.createElementNS`
- **MDN文档**: [Document.createElementNS](https://developer.mozilla.org/docs/Web/API/Document/createElementNS)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-document-createelementns①)
- **标签**: `web-features:dom`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "1",
    chrome_android: "同主版本",
    edge: "12",
    firefox: "1", // Doesn't conform to the DOM spec for XUL and XHTML documents: `localName` and `namespaceURI` are not ...,
    firefox_android: "4",
    ie: "9",
    oculus: "同主版本",
    opera: "≤12.1",
    opera_android: "≤12.1",
    safari: "1",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **options_parameter**: `options` parameter

