# Element.scrollIntoView API 兼容性数据

## 基本信息

- **API名称**: `Element.scrollIntoView`
- **MDN文档**: [Element.scrollIntoView](https://developer.mozilla.org/docs/Web/API/Element/scrollIntoView)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-element-scrollintoview)
- **标签**: `web-features:scroll-into-view`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "1",
    chrome_android: "同主版本",
    edge: "79",
    firefox: "1",
    firefox_android: "同主版本",
    ie: "5",
    oculus: "同主版本",
    opera: "≤12.1",
    opera_android: "≤12.1",
    safari: "3", // No support for `center` option.; Before Safari 15.4, there was no support for the `smooth` behavior.,
    safari_ios: "1", // No support for `center` option.; Before iOS 15.4, there was no support for the `smooth` behavior.,
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **options_container_parameter**: `options.container` parameter
- **options_parameter**: `options` parameter

