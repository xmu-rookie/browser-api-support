# SharedWorkerGlobalScope.connect_event API 兼容性数据

## 基本信息

- **API名称**: `SharedWorkerGlobalScope.connect_event`
- **MDN文档**: [SharedWorkerGlobalScope.connect_event](https://developer.mozilla.org/docs/Web/API/SharedWorkerGlobalScope/connect_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-workerglobalscope-connect,https://html.spec.whatwg.org/multipage/workers.html#handler-sharedworkerglobalscope-onconnect)
- **标签**: `web-features:shared-workers`
- **描述**: `connect` event

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "4",
    chrome_android: false,
    edge: "同主版本",
    firefox: "29", // Before version 65 the `data` property of the event object was `null`; it is now initialized to an em...,
    firefox_android: "同主版本",
    oculus: "同主版本",
    opera: "10.6",
    opera_android: "11",
    safari: "16",
    safari_ios: "16",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

