# MediaSource.isTypeSupported_static API 兼容性数据

## 基本信息

- **API名称**: `MediaSource.isTypeSupported_static`
- **MDN文档**: [MediaSource.isTypeSupported_static](https://developer.mozilla.org/docs/Web/API/MediaSource/isTypeSupported_static)
- **规范文档**: [查看规范](https://w3c.github.io/media-source/#dom-mediasource-istypesupported)
- **标签**: `web-features:media-source`
- **描述**: `isTypeSupported()` static method

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "23", // `codecs` string can contain any subset of optional parameters (should be all or none).; Errors if `c...,
    chrome_android: "同主版本",
    edge: "12", // `codecs` string can contain any subset of optional parameters (should be all or none).; Errors if `c...,
    firefox: "42", // Before Firefox 101, `isTypeSupported()` ignored `codecs` parameter options for `av01` codecs (treati...,
    firefox_android: "41", // Before Firefox 101, `isTypeSupported()` ignored `codecs` parameter options for `av01` codecs (treati...,
    ie: "11", // Only works on Windows 8+.,
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "8",
    safari_ios: "13", // Exposed in Mobile Safari on iPad but not on iPhone.,
    samsunginternet_android: "同主版本",
    webview_android: "4.4.3", // `codecs` string can contain any subset of optional parameters (should be all or none).; Errors if `c...,
    webview_ios: false,
};

```

