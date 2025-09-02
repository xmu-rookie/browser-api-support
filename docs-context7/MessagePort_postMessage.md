# MessagePort.postMessage API 兼容性数据

## 基本信息

- **API名称**: `MessagePort.postMessage`
- **MDN文档**: [MessagePort.postMessage](https://developer.mozilla.org/docs/Web/API/MessagePort/postMessage)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/web-messaging.html#dom-messageport-postmessage-dev)
- **标签**: `web-features:channel-messaging`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    bun: "1.0.0",
    chrome: "2",
    chrome_android: "同主版本",
    deno: "1.14", // The `message` parameter does not support cloning `Blob` values.,
    edge: "12",
    firefox: "41",
    firefox_android: "同主版本",
    ie: "10",
    nodejs: "11.7.0",
    oculus: "同主版本",
    opera: "10.6",
    opera_android: "11",
    safari: "5",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **options_includeUserActivation_parameter**: `options.includeUserActivation` parameter

