# Navigator.setAppBadge API 兼容性数据

## 基本信息

- **API名称**: `Navigator.setAppBadge`
- **MDN文档**: [Navigator.setAppBadge](https://developer.mozilla.org/docs/Web/API/Navigator/setAppBadge)
- **规范文档**: [查看规范](https://w3c.github.io/badging/#setappbadge-method)
- **标签**: `web-features:badging`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "81", // Windows and macOS since Chrome 81.; ChromeOS since Chrome 91.; Linux offers no universal badging API...,
    chrome_android: false,
    edge: "同主版本",
    firefox: false,
    firefox_android: "同主版本",
    nodejs: false,
    oculus: "同主版本",
    opera: false,
    opera_android: "同主版本",
    safari: "17", // Badging is supported for installed web apps on macOS Sonoma and higher.; Passing `0` as an argument ...,
    safari_ios: "16.4", // Badging is supported for web apps saved to the home screen.; Passing `0` as an argument will clear t...,
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: false, // Badging is supported for web apps saved to the home screen.,
};

```

