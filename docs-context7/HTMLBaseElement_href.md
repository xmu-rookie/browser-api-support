# HTMLBaseElement.href API 兼容性数据

## 基本信息

- **API名称**: `HTMLBaseElement.href`
- **MDN文档**: [HTMLBaseElement.href](https://developer.mozilla.org/docs/Web/API/HTMLBaseElement/href)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/semantics.html#dom-base-href)
- **标签**: `web-features:base`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "1",
    chrome_android: "同主版本",
    edge: "12",
    firefox: "1",
    firefox_android: "同主版本",
    ie: "5.5",
    oculus: "同主版本",
    opera: "≤12.1",
    opera_android: "≤12.1",
    safari: "3",
    safari_ios: "1",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **forbid_data_javascript_urls**: `data:` and `javascript:` urls are not allowed
- **forbid_special_characters**: tab, newline, and &lt; are not allowed (dangling markup prevention)

