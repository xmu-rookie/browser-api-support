# setInterval API 兼容性数据

## 基本信息

- **API名称**: `setInterval`
- **MDN文档**: [setInterval](https://developer.mozilla.org/docs/Web/API/Window/setInterval)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval-dev)
- **标签**: `web-features:setinterval`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    bun: "1.0.0",
    chrome: "1",
    chrome_android: "同主版本",
    deno: "1.0",
    edge: "12",
    firefox: "1",
    firefox_android: "同主版本",
    ie: "4",
    nodejs: "0.10.0", // Returns a `Timeout` object instead of the `intervalID`.; Does not support passing a `code` string an...,
    oculus: "同主版本",
    opera: "4",
    opera_android: "10.1",
    safari: "1",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

