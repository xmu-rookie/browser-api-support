# DedicatedWorkerGlobalScope.requestAnimationFrame API 兼容性数据

## 基本信息

- **API名称**: `DedicatedWorkerGlobalScope.requestAnimationFrame`
- **MDN文档**: [DedicatedWorkerGlobalScope.requestAnimationFrame](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#dom-animationframeprovider-requestanimationframe)
- **标签**: `web-features:request-animation-frame-workers`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "69", // Not supported in nested Web Workers. See [bug 41483010](https://crbug.com/41483010).,
    chrome_android: "同主版本",
    edge: "同主版本",
    firefox: "99",
    firefox_android: "同主版本",
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "16.4",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "67",
    webview_ios: "同主版本",
};

```

