# RTCRtpReceiver.getContributingSources.timestamp API 兼容性数据

## 基本信息

- **API名称**: `RTCRtpReceiver.getContributingSources.timestamp`
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcrtpcontributingsource-timestamp)
- **标签**: `web-features:webrtc`
- **描述**: `timestamp` property in returned object

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "59",
    chrome_android: "同主版本",
    edge: "同主版本",
    firefox: "59", // Starting in version 60, the `timestamp` is correctly computed based on the window's `Performance` ti...,
    firefox_android: "同主版本",
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "12.1",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

