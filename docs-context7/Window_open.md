# Window.open API 兼容性数据

## 基本信息

- **API名称**: `Window.open`
- **MDN文档**: [Window.open](https://developer.mozilla.org/docs/Web/API/Window/open)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-open-dev,https://drafts.csswg.org/cssom-view/#the-features-argument-to-the-open()-method)
- **标签**: `web-features:window`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "1",
    chrome_android: "同主版本",
    deno: false,
    edge: "12",
    firefox: "1",
    firefox_android: "同主版本",
    ie: "4",
    oculus: "同主版本",
    opera: "3",
    opera_android: "10.1",
    safari: "1",
    safari_ios: "1", // This method will not function if the `target` parameter is unspecified or set to `_blank`.,
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **features_parameter_attributionsrc**: `features` parameter accepts `"attributionsrc"` value
- **features_parameter_popup**: `features` parameter accepts `"popup"` value
- **once_per_event**: One `Window.open()` call per event
- **relative-multi-screen**: Opened relative to the [Multi-screen origin](https://developer.mozilla.org/docs/Web/API/Window_Management_API/Multi-screen_origin)

