# Document.domain API 兼容性数据

## 基本信息

- **API名称**: `Document.domain`
- **MDN文档**: [Document.domain](https://developer.mozilla.org/docs/Web/API/Document/domain)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/browsers.html#relaxing-the-same-origin-restriction)

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "1", // Since Chrome 115, setting `domain` has no effect, unless the website has opted into [origin-keyed ag...,
    chrome_android: "同主版本",
    edge: "12",
    firefox: "69", // From Firefox 62, if the domain cannot be identified, `domain` returns an empty string instead of `nu...,
    firefox_android: "同主版本",
    ie: "4",
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

