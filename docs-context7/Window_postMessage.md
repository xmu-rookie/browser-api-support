# Window.postMessage API 兼容性数据

## 基本信息

- **API名称**: `Window.postMessage`
- **MDN文档**: [Window.postMessage](https://developer.mozilla.org/docs/Web/API/Window/postMessage)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/web-messaging.html#dom-window-postmessage-options-dev)
- **标签**: `web-features:postmessage`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "2",
    chrome_android: "同主版本",
    deno: false,
    edge: "12",
    firefox: "3",
    firefox_android: "同主版本",
    ie: "10", // IE10 had an important limitation: see this [article](https://stackoverflow.com/questions/16226924/is...,
    oculus: "同主版本",
    opera: "9.5",
    opera_android: "10.1",
    safari: "4",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **options_delegate_parameter**: `options.delegate` parameter
- **options_includeUserActivation_parameter**: `options.includeUserActivation` parameter
- **transfer_parameter**: `transfer` parameter

