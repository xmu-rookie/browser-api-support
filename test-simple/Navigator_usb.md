# Navigator.usb API 兼容性数据

## 基本信息

- **API名称**: `Navigator.usb`
- **MDN文档**: [Navigator.usb](https://developer.mozilla.org/docs/Web/API/Navigator/usb)
- **规范文档**: [查看规范](https://wicg.github.io/webusb/#dom-navigator-usb)
- **标签**: `web-features:webusb`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "61",
    chrome_android: "同主版本",
    edge: "同主版本",
    firefox: false,
    firefox_android: "同主版本",
    nodejs: false,
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: false,
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: false, // WebView exposes `navigator.usb`, but does not support WebUSB. See [bug 41441927](https://crbug.com/4...,
    webview_ios: "同主版本",
};

```

