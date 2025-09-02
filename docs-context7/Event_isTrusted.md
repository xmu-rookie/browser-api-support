# Event.isTrusted API 兼容性数据

## 基本信息

- **API名称**: `Event.isTrusted`
- **MDN文档**: [Event.isTrusted](https://developer.mozilla.org/docs/Web/API/Event/isTrusted)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-event-istrusted①)
- **标签**: `web-features:events`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    bun: "1.0.0",
    chrome: "46", // Starting with Chrome 53 and Opera 40, untrusted events do not invoke the default action.,
    chrome_android: "同主版本",
    deno: "1.0",
    edge: "12",
    firefox: "1.5",
    firefox_android: "同主版本",
    ie: "9", // In Internet Explorer, all events are trusted except those that are created with the `createEvent()` ...,
    nodejs: "14.5.0",
    oculus: "同主版本",
    opera: "33", // Starting with Chrome 53 and Opera 40, untrusted events do not invoke the default action.,
    opera_android: "33", // Starting with Chrome 53 and Opera 40, untrusted events do not invoke the default action.,
    safari: "10",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "46", // Starting with version 53, untrusted events do not invoke the default action.,
    webview_ios: "同主版本",
};

```

