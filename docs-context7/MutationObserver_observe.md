# MutationObserver.observe API 兼容性数据

## 基本信息

- **API名称**: `MutationObserver.observe`
- **MDN文档**: [MutationObserver.observe](https://developer.mozilla.org/docs/Web/API/MutationObserver/observe)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-mutationobserver-observe②)
- **标签**: `web-features:mutationobserver`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "18", // Before Chrome 33, `attributes: true` is required when using `attributeFilter` or `attributeOldValue`...,
    chrome_android: "同主版本",
    edge: "12", // Before Edge 79, `attributes: true` is required when using `attributeFilter` or `attributeOldValue`. ...,
    firefox: "14", // Before Firefox 36, `attributes: true` is required when using `attributeFilter` or `attributeOldValue...,
    firefox_android: "同主版本",
    ie: "11", // Internet Explorer requires `attributes: true` when using `attributeFilter` or `attributeOldValue`. I...,
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "6", // Before Safari 10.1, `attributes: true` is required when using `attributeFilter` or `attributeOldValu...,
    safari_ios: "6", // Before Safari iOS 10.3, `attributes: true` is required when using `attributeFilter` or `attributeOld...,
    samsunginternet_android: "同主版本",
    webview_android: "4.4", // Before WebView 4.4.3, `attributes: true` is required when using `attributeFilter` or `attributeOldVa...,
    webview_ios: "同主版本",
};

```

