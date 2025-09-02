# Window.unhandledrejection_event API 兼容性数据

## 基本信息

- **API名称**: `Window.unhandledrejection_event`
- **MDN文档**: [Window.unhandledrejection_event](https://developer.mozilla.org/docs/Web/API/Window/unhandledrejection_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-unhandledrejection,https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onunhandledrejection)
- **描述**: `unhandledrejection` event

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "49",
    chrome_android: "同主版本",
    deno: "1.24",
    edge: "同主版本",
    firefox: "69", // `event.preventDefault()` does not prevent Firefox from logging the error message in the console, see...,
    firefox_android: "同主版本",
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "11",
    safari_ios: "11.3",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

