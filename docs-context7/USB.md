# USB API 兼容性数据

## 基本信息

- **API名称**: `USB`
- **MDN文档**: [USB](https://developer.mozilla.org/docs/Web/API/USB)
- **规范文档**: [查看规范](https://wicg.github.io/webusb/#usb)
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
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: false,
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: false, // WebView exposes this interface, but does not support WebUSB. See [bug 41441927](https://crbug.com/41...,
    webview_ios: "同主版本",
};

```

