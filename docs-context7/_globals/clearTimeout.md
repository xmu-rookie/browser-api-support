# clearTimeout API 兼容性数据

## 基本信息

- **API名称**: `clearTimeout`
- **MDN文档**: [clearTimeout](https://developer.mozilla.org/docs/Web/API/Window/clearTimeout)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-cleartimeout-dev)
- **标签**: `web-features:settimeout`

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
    ie: "4", // From Internet Explorer 4 through 8, `clearTimeout` is an Object rather than a Function. This behavio...,
    nodejs: "0.10.0", // Takes a `Timeout` object instead of the `timeoutID`.,
    oculus: "同主版本",
    opera: "4",
    opera_android: "10.1",
    safari: "4",
    safari_ios: "1",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

