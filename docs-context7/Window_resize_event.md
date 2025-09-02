# Window.resize_event API 兼容性数据

## 基本信息

- **API名称**: `Window.resize_event`
- **MDN文档**: [Window.resize_event](https://developer.mozilla.org/docs/Web/API/Window/resize_event)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#eventdef-window-resize)
- **标签**: `web-features:window`
- **描述**: `resize` event

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "1", // Chrome does not fire a `resize` event on page load.,
    chrome_android: "同主版本",
    deno: false,
    edge: "12", // Before Edge 79, Edge fired a `resize` event on page load. This is no longer the case.,
    firefox: "1", // Before Firefox 68, Firefox fired a `resize` event on page load. This is no longer the case.,
    firefox_android: "同主版本",
    ie: "4",
    oculus: "同主版本",
    opera: "7", // Opera does not fire a `resize` event on page load.,
    opera_android: "10.1", // Opera does not fire a `resize` event on page load.,
    safari: "1.1",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "1", // WebView does not fire a `resize` event on page load.,
    webview_ios: "同主版本",
};

```

