# Element.getElementsByTagName API 兼容性数据

## 基本信息

- **API名称**: `Element.getElementsByTagName`
- **MDN文档**: [Element.getElementsByTagName](https://developer.mozilla.org/docs/Web/API/Element/getElementsByTagName)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-element-getelementsbytagname)
- **标签**: `web-features:dom`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "1", // Initially, this method was returning a `NodeList`; it was then changed to reflect the spec change.,
    chrome_android: "同主版本",
    edge: "12",
    firefox: "1", // Before Firefox 19, this method was returning a `NodeList`; it was then changed to reflect the change...,
    firefox_android: "同主版本",
    ie: "5.5",
    oculus: "同主版本",
    opera: "8", // Initially, this method was returning a `NodeList`; it was then changed to reflect the spec change.,
    opera_android: "10.1",
    safari: "1", // Initially, this method was returning a `NodeList`; it was then changed to reflect the spec change.,
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **all_elements_selector**: `getElementsByTagName("*")`

