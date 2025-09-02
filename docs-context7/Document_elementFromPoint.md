# Document.elementFromPoint API 兼容性数据

## 基本信息

- **API名称**: `Document.elementFromPoint`
- **MDN文档**: [Document.elementFromPoint](https://developer.mozilla.org/docs/Web/API/Document/elementFromPoint)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-document-elementfrompoint)
- **标签**: `web-features:element-from-point`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "1", // Before Chrome 66, this method returned `null` when the element was a child of a host node. See [bug ...,
    chrome_android: "同主版本",
    edge: "12",
    firefox: "3",
    firefox_android: "同主版本",
    ie: "4",
    oculus: "同主版本",
    opera: "≤12.1", // Before Opera 53, this method returned `null` when the element was a child of a host node. See [bug 4...,
    opera_android: "≤12.1", // Before Opera Android 47, this method returned `null` when the element was a child of a host node. Se...,
    safari: "4",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

