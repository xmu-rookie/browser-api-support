# Navigator.doNotTrack API 兼容性数据

## 基本信息

- **API名称**: `Navigator.doNotTrack`
- **MDN文档**: [Navigator.doNotTrack](https://developer.mozilla.org/docs/Web/API/Navigator/doNotTrack)

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "23",
    chrome_android: "同主版本",
    edge: "17", // Before version 17, Edge implemented `window.doNotTrack`.,
    firefox: "9", // In Firefox, `navigator.doNotTrack` returns `\"unspecified\"` instead of `null`.; Before Firefox 32, ...,
    firefox_android: "同主版本",
    ie: "9", // For IE11 and subsequent versions, use `window.doNotTrack`,
    nodejs: false,
    oculus: "同主版本",
    opera: "12",
    opera_android: "12",
    safari: "5.1",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

