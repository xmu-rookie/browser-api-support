# WorkerNavigator.languages API 兼容性数据

## 基本信息

- **API名称**: `WorkerNavigator.languages`
- **MDN文档**: [WorkerNavigator.languages](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/languages)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-languages-dev)
- **标签**: `web-features:language`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "37", // Before Chrome 65, `navigator.languages[0]` is not guaranteed to equal `navigator.language`.,
    chrome_android: "同主版本",
    edge: "16",
    firefox: "32", // In Firefox, the `navigator.languages` property's value is taken from the `intl.accept_languages` pre...,
    firefox_android: "同主版本",
    ie: false, // Closest available (non-standard) properties are `userLanguage` and `browserLanguage`.,
    oculus: "同主版本",
    opera: "24",
    opera_android: "24",
    safari: "10.1",
    safari_ios: "同主版本",
    samsunginternet_android: "3.0",
    webview_android: "37", // Before version 65, `navigator.languages[0]` is not guaranteed to equal `navigator.language`.,
    webview_ios: "同主版本",
};

```

