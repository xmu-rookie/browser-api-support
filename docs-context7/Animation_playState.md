# Animation.playState API 兼容性数据

## 基本信息

- **API名称**: `Animation.playState`
- **MDN文档**: [Animation.playState](https://developer.mozilla.org/docs/Web/API/Animation/playState)
- **规范文档**: [查看规范](https://drafts.csswg.org/web-animations-1/#dom-animation-playstate)
- **标签**: `web-features:web-animations`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "75", // Before Chrome 50/Opera 37, this property returned `idle` for an animation that had not yet started. ...,
    chrome_android: "同主版本",
    edge: "79",
    firefox: "48",
    firefox_android: "同主版本",
    oculus: "同主版本",
    opera: "62", // Before Chrome 50/Opera 37, this property returned `idle` for an animation that had not yet started. ...,
    opera_android: "54", // Before Chrome 50/Opera 37, this property returned `idle` for an animation that had not yet started. ...,
    safari: "13.1",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

