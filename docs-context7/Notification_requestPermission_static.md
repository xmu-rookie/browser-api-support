# Notification.requestPermission_static API 兼容性数据

## 基本信息

- **API名称**: `Notification.requestPermission_static`
- **MDN文档**: [Notification.requestPermission_static](https://developer.mozilla.org/docs/Web/API/Notification/requestPermission_static)
- **规范文档**: [查看规范](https://notifications.spec.whatwg.org/#dom-notification-requestpermission)
- **标签**: `web-features:notifications`
- **描述**: `requestPermission()` static method

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "20",
    chrome_android: "42",
    edge: "14",
    firefox: "22", // From Firefox 70 onwards, cannot be called from a cross-origin `iframe`.; From Firefox 72 onwards, ca...,
    firefox_android: "22", // From Firefox Android 79 onwards, cannot be called from a cross-origin `iframe`.; From Firefox Androi...,
    oculus: "同主版本",
    opera: "23",
    opera_android: "同主版本",
    safari: "15",
    safari_ios: "16.4", // The parent <code>Notification</code> interface is undefined unless the page is a web app saved to th...,
    samsunginternet_android: "同主版本",
    webview_android: false,
    webview_ios: false,
};

```

## 相关子API

该API包含以下子功能：

- **returns_promise**: Returns a `Promise`

