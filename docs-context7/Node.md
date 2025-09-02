# Node API 兼容性数据

## 基本信息

- **API名称**: `Node`
- **MDN文档**: [Node](https://developer.mozilla.org/docs/Web/API/Node)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#interface-node)
- **标签**: `web-features:dom`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "1", // WebKit and old versions of Blink incorrectly do not make `Node` inherit from `EventTarget`.,
    chrome_android: "同主版本",
    edge: "12",
    firefox: "1",
    firefox_android: "同主版本",
    ie: "5",
    oculus: "同主版本",
    opera: "7", // WebKit and old versions of Blink incorrectly do not make `Node` inherit from `EventTarget`.,
    opera_android: "10.1", // WebKit and old versions of Blink incorrectly do not make `Node` inherit from `EventTarget`.,
    safari: "1", // WebKit and old versions of Blink incorrectly do not make `Node` inherit from `EventTarget`.,
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

