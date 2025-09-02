# HTMLMediaElement.volume API 兼容性数据

## 基本信息

- **API名称**: `HTMLMediaElement.volume`
- **MDN文档**: [HTMLMediaElement.volume](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volume)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#dom-media-volume-dev)
- **标签**: `web-features:video`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "3",
    chrome_android: "同主版本",
    edge: "12",
    firefox: "3.5",
    firefox_android: "同主版本",
    ie: "9",
    oculus: "同主版本",
    opera: "≤12.1",
    opera_android: "≤12.1",
    safari: "3.1",
    safari_ios: "3", // `volume` returns a value and is writable; however, the value is always 1, and setting a value has no...,
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

