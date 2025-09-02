# clearInterval API 兼容性数据

## 基本信息

- **API名称**: `clearInterval`
- **MDN文档**: [clearInterval](https://developer.mozilla.org/docs/Web/API/Window/clearInterval)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-clearinterval-dev)
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
    ie: "4", // From Internet Explorer 4 through 8, `clearInterval` is an Object rather than a Function. This behavi...,
    nodejs: "0.10.0", // Takes a `Timeout` object instead of the `intervalID`.,
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

