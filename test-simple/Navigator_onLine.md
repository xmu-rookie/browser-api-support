# Navigator.onLine API 兼容性数据

## 基本信息

- **API名称**: `Navigator.onLine`
- **MDN文档**: [Navigator.onLine](https://developer.mozilla.org/docs/Web/API/Navigator/onLine)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-online-dev)
- **标签**: `web-features:online`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "2",
    chrome_android: "18",
    edge: "12",
    firefox: "1.5",
    firefox_android: "4",
    ie: "4", // in Internet Explorer 8 'online' and 'offline' events are raised on the `document.body`; under IE 9 t...,
    nodejs: false,
    oculus: "同主版本",
    opera: "3", // From Opera 11.1 until Opera 12.1, the browser returns `true` when 'Work Offline' mode is disabled an...,
    opera_android: "10.1", // From Opera 11.1 until Opera 12.1, the browser returns `true` when 'Work Offline' mode is disabled an...,
    safari: "4",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "4.4", // Can incorrectly return true, see [bug 41369933](https://crbug.com/41369933).,
    webview_ios: "同主版本",
};

```

