# Window.open.relative-multi-screen API 兼容性数据

## 基本信息

- **API名称**: `Window.open.relative-multi-screen`
- **标签**: `web-features:window-management`
- **描述**: Opened relative to the [Multi-screen origin](https://developer.mozilla.org/docs/Web/API/Window_Management_API/Multi-screen_origin)

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "100", // Without the `window-management` permission, multi-screen coordinates are used, but windows are clamp...,
    chrome_android: "同主版本",
    deno: false,
    edge: "同主版本",
    firefox: "1",
    firefox_android: "同主版本",
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "1", // Coordinate origin used is inconsistent/unreliable.,
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

