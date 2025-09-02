# ScreenOrientation.unlock API 兼容性数据

## 基本信息

- **API名称**: `ScreenOrientation.unlock`
- **MDN文档**: [ScreenOrientation.unlock](https://developer.mozilla.org/docs/Web/API/ScreenOrientation/unlock)
- **规范文档**: [查看规范](https://w3c.github.io/screen-orientation/#dom-screenorientation-unlock)
- **标签**: `web-features:screen-orientation-lock`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "38", // Always throws `NotSupportedError`.,
    chrome_android: "38",
    edge: "同主版本",
    firefox: "43", // Always throws `NotSupportedError`.,
    firefox_android: "79", // The API exists but returns `NS_ERROR_UNEXPECTED`.,
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: false,
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

