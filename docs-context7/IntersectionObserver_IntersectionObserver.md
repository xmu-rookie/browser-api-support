# IntersectionObserver.IntersectionObserver API 兼容性数据

## 基本信息

- **API名称**: `IntersectionObserver.IntersectionObserver`
- **MDN文档**: [IntersectionObserver.IntersectionObserver](https://developer.mozilla.org/docs/Web/API/IntersectionObserver/IntersectionObserver)
- **规范文档**: [查看规范](https://w3c.github.io/IntersectionObserver/#dom-intersectionobserver-intersectionobserver)
- **标签**: `web-features:intersection-observer`
- **描述**: `IntersectionObserver()` constructor

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "51",
    chrome_android: "同主版本",
    edge: "15",
    firefox: "55", // Before version 96, the constructor throws a `DOMException` if the `options.rootMargin` option is pas...,
    firefox_android: "55",
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "12.1",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **options_root_parameter_Document**: `options.root` parameter can be a `Document`

