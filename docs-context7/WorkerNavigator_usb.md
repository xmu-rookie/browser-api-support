# WorkerNavigator.usb API 兼容性数据

## 基本信息

- **API名称**: `WorkerNavigator.usb`
- **MDN文档**: [WorkerNavigator.usb](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/usb)
- **规范文档**: [查看规范](https://wicg.github.io/webusb/#dom-workernavigator-usb)
- **标签**: `web-features:webusb`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "118", // Available in dedicated workers and WebExtension service workers, not available in shared workers and...,
    chrome_android: "同主版本",
    edge: "同主版本",
    firefox: false,
    firefox_android: "同主版本",
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: false,
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: false, // WebView exposes `navigator.usb`, but does not support WebUSB.,
    webview_ios: "同主版本",
};

```

