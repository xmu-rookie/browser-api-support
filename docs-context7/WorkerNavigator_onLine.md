# WorkerNavigator.onLine API 兼容性数据

## 基本信息

- **API名称**: `WorkerNavigator.onLine`
- **MDN文档**: [WorkerNavigator.onLine](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/onLine)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-online-dev)
- **标签**: `web-features:online`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "4",
    chrome_android: "同主版本",
    edge: "12",
    firefox: "3.5",
    firefox_android: "4",
    ie: "10",
    oculus: "同主版本",
    opera: "10.6", // From Opera 11.1 until Opera 12.1, the browser returns `true` when 'Work Offline' mode is disabled an...,
    opera_android: "11", // From Opera 11.1 until Opera 12.1, the browser returns `true` when 'Work Offline' mode is disabled an...,
    safari: "4",
    safari_ios: "5",
    samsunginternet_android: "同主版本",
    webview_android: "4.4", // Can incorrectly return true, see [bug 41369933](https://crbug.com/41369933).,
    webview_ios: "同主版本",
};

```

