# MediaSession.setActionHandler API 兼容性数据

## 基本信息

- **API名称**: `MediaSession.setActionHandler`
- **MDN文档**: [MediaSession.setActionHandler](https://developer.mozilla.org/docs/Web/API/MediaSession/setActionHandler)
- **规范文档**: [查看规范](https://w3c.github.io/mediasession/#dom-mediasession-setactionhandler)
- **标签**: `web-features:media-session`
- **描述**: `setActionHandler()`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "73",
    chrome_android: "57",
    edge: "同主版本",
    firefox: "82",
    firefox_android: "82", // Firefox exposes the API, but does not provide a corresponding user-facing media control interface.,
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "15",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: false,
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **hangup_type**: `"hangup"` type
- **nextslide_type**: `"nextslide"` type
- **nexttrack_type**: `"nexttrack"` type
- **pause_type**: `"pause"` type
- **play_type**: `"play"` type
- **previousslide_type**: `"previousslide"` type
- **previoustrack_type**: `"previoustrack"` type
- **seekbackward_type**: `"seekbackward"` type
- **seekforward_type**: `"seekforward"` type
- **seekto_type**: `"seekto"` type
- **skipad_type**: `"skipad"` type
- **stop_type**: `"stop"` type
- **togglecamera_type**: `"togglecamera"` type
- **togglemicrophone_type**: `"togglemicrophone"` type

