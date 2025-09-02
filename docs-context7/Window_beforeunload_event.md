# Window.beforeunload_event API 兼容性数据

## 基本信息

- **API名称**: `Window.beforeunload_event`
- **MDN文档**: [Window.beforeunload_event](https://developer.mozilla.org/docs/Web/API/Window/beforeunload_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-beforeunload,https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onbeforeunload)
- **标签**: `web-features:beforeunload`
- **描述**: `beforeunload` event

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "1",
    chrome_android: "同主版本",
    deno: "1.27",
    edge: "12",
    firefox: "1",
    firefox_android: "同主版本",
    ie: "4",
    oculus: "同主版本",
    opera: "12",
    opera_android: "12",
    safari: "3",
    safari_ios: false,
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **event_returnvalue_activation**: Activation by setting `event.returnValue` to any truthy value
- **generic_string_displayed**: Dialog displays a generic string, not event handler return value
- **preventdefault_activation**: Activation using `event.preventDefault()`
- **return_string_activation**: Activation by returning a string

