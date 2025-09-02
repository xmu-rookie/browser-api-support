# Element.getElementsByTagNameNS API 兼容性数据

## 基本信息

- **API名称**: `Element.getElementsByTagNameNS`
- **MDN文档**: [Element.getElementsByTagNameNS](https://developer.mozilla.org/docs/Web/API/Element/getElementsByTagNameNS)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-element-getelementsbytagnamens)
- **标签**: `web-features:dom`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "1", // Initially, this method was returning a `NodeList`; it was then changed to reflect the spec change.,
    chrome_android: "同主版本",
    edge: "12",
    firefox: "1",
    firefox_android: "4", // Before Firefox 19, this method was returning a `NodeList`; it was then changed to reflects the spec ...,
    ie: "9",
    oculus: "同主版本",
    opera: "≤12.1", // Initially, this method was returning a `NodeList`; it was then changed to reflect the spec change.,
    opera_android: "≤12.1", // Initially, this method was returning a `NodeList`; it was then changed to reflect the spec change.,
    safari: "1", // Initially, this method was returning a `NodeList`; it was then changed to reflect the spec change.,
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **all_elements_selector**: `getElementsByTagNameNS(namespaceURI, "*")`

