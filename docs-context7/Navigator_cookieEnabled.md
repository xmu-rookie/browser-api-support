# Navigator.cookieEnabled API 兼容性数据

## 基本信息

- **API名称**: `Navigator.cookieEnabled`
- **MDN文档**: [Navigator.cookieEnabled](https://developer.mozilla.org/docs/Web/API/Navigator/cookieEnabled)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-cookieenabled-dev)
- **标签**: `web-features:cookie-enabled`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "1",
    chrome_android: "同主版本",
    edge: "12",
    firefox: "1", // Before Firefox 8, `navigator.cookieEnabled` would report the wrong result if a site exception was in...,
    firefox_android: "同主版本",
    ie: "4", // `navigator.cookieEnabled` returns `true` even if the browser is set to block cookies (for example, i...,
    nodejs: false,
    oculus: "同主版本",
    opera: "≤12.1",
    opera_android: "≤12.1",
    safari: "18",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

