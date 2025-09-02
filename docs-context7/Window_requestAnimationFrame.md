# Window.requestAnimationFrame API 兼容性数据

## 基本信息

- **API名称**: `Window.requestAnimationFrame`
- **MDN文档**: [Window.requestAnimationFrame](https://developer.mozilla.org/docs/Web/API/Window/requestAnimationFrame)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#dom-animationframeprovider-requestanimationframe)
- **标签**: `web-features:request-animation-frame`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "24",
    chrome_android: "同主版本",
    deno: false,
    edge: "12", // Before version 17, Edge does not reliably fire `requestAnimationFrame` before the paint cycle.,
    firefox: "23", // Callback parameter is a `DOMHighResTimestamp`. This means ten microsecond precision and zero time as...,
    firefox_android: "23",
    ie: "10", // Internet Explorer does not reliably fire `requestAnimationFrame` before the paint cycle.,
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "7",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

