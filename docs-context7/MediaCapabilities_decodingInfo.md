# MediaCapabilities.decodingInfo API 兼容性数据

## 基本信息

- **API名称**: `MediaCapabilities.decodingInfo`
- **MDN文档**: [MediaCapabilities.decodingInfo](https://developer.mozilla.org/docs/Web/API/MediaCapabilities/decodingInfo)
- **规范文档**: [查看规范](https://w3c.github.io/media-capabilities/#dom-mediacapabilities-decodinginfo)
- **标签**: `web-features:media-capabilities`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "66", // `codecs` string can contain any subset of optional parameters (should be all or none).; Errors if `c...,
    chrome_android: "同主版本",
    edge: "同主版本",
    firefox: "63", // The `webrtc` value of the `type` option is named `transmission`.; Before Firefox 101, `decodingInfo(...,
    firefox_android: "同主版本",
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "48", // `codecs` string can contain any subset of optional parameters (should be all or none).; Errors if `c...,
    safari: "13",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **configuration_keySystemConfiguration_parameter**: `configuration.keySystemConfiguration` parameter

