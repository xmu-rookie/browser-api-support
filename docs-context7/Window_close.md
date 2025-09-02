# Window.close API 兼容性数据

## 基本信息

- **API名称**: `Window.close`
- **MDN文档**: [Window.close](https://developer.mozilla.org/docs/Web/API/Window/close)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-window-close-dev)
- **标签**: `web-features:window`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "1",
    chrome_android: "同主版本",
    deno: "1.0",
    edge: "12", // Before Edge 79, scripts can close windows that weren't opened by the same script.,
    firefox: "1", // Before Firefox 46, scripts can close windows that weren't opened by the same script.,
    firefox_android: "同主版本",
    ie: "4",
    oculus: "同主版本",
    opera: "3",
    opera_android: "10.1",
    safari: "1",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

