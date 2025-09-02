# Element.getElementsByClassName API 兼容性数据

## 基本信息

- **API名称**: `Element.getElementsByClassName`
- **MDN文档**: [Element.getElementsByClassName](https://developer.mozilla.org/docs/Web/API/Element/getElementsByClassName)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-element-getelementsbyclassname)
- **标签**: `web-features:dom`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "1",
    chrome_android: "同主版本",
    edge: "16",
    firefox: "3", // Before Firefox 19, this method was returning a `NodeList`; it was then changed to reflect the change...,
    firefox_android: "4",
    ie: "9", // Only supported for [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement), not all ...,
    oculus: "同主版本",
    opera: "9.5",
    opera_android: "10.1",
    safari: "3.1",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

