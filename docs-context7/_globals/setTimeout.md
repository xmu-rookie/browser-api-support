# setTimeout API 兼容性数据

## 基本信息

- **API名称**: `setTimeout`
- **MDN文档**: [setTimeout](https://developer.mozilla.org/docs/Web/API/Window/setTimeout)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout-dev)
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
    ie: "4",
    nodejs: "0.10.0", // Returns a `Timeout` object instead of the `timeoutID`.; Does not support passing a `code` string and...,
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

