# EventTarget.addEventListener API 兼容性数据

## 基本信息

- **API名称**: `EventTarget.addEventListener`
- **MDN文档**: [EventTarget.addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-eventtarget-addeventlistener③)
- **标签**: `web-features:events`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    bun: "1.0.0",
    chrome: "1", // Before Chrome 49, the `type` and `listener` parameters were optional.,
    chrome_android: "同主版本",
    deno: "1.0",
    edge: "12",
    firefox: "1",
    firefox_android: "同主版本",
    ie: "9",
    nodejs: "14.5.0",
    oculus: "同主版本",
    opera: "7",
    opera_android: "10.1",
    safari: "1",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "1", // Before Chrome 49, the `type` and `listener` parameters were optional.,
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **options_parameter**: Form with `options` object supported (third parameter can be either options or a `Boolean`, for backwards compatibility)
- **useCapture_parameter_optional**: `useCapture` parameter is optional

