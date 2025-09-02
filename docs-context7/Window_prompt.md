# Window.prompt API 兼容性数据

## 基本信息

- **API名称**: `Window.prompt`
- **MDN文档**: [Window.prompt](https://developer.mozilla.org/docs/Web/API/Window/prompt)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-prompt-dev)
- **标签**: `web-features:alerts`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "1", // Starting with Chrome 46, this method is blocked inside an `<iframe>` unless its sandbox attribute ha...,
    chrome_android: "同主版本",
    deno: "1.5",
    edge: "12",
    firefox: "1", // Firefox strips newline characters from the prompt response; see [bug 1716229](https://bugzil.la/1716...,
    firefox_android: "同主版本",
    ie: "4",
    oculus: "同主版本",
    opera: "3", // Starting with Opera 33, this method is blocked inside an `<iframe>` unless its sandbox attribute has...,
    opera_android: "10.1", // Starting with Opera 33, this method is blocked inside an `<iframe>` unless its sandbox attribute has...,
    safari: "1",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

