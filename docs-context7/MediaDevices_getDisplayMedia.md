# MediaDevices.getDisplayMedia API 兼容性数据

## 基本信息

- **API名称**: `MediaDevices.getDisplayMedia`
- **MDN文档**: [MediaDevices.getDisplayMedia](https://developer.mozilla.org/docs/Web/API/MediaDevices/getDisplayMedia)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-screen-share/#dom-mediadevices-getdisplaymedia)
- **标签**: `web-features:screen-capture`
- **描述**: `getDisplayMedia()`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "72",
    chrome_android: false, // From Chrome Android 72 to 88, this method was exposed, but always failed with `NotAllowedError`. See...,
    edge: "79",
    firefox: "66",
    firefox_android: false, // From Firefox Android 66 to 79, this method was exposed, but always failed with `NotAllowedError`.,
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "13",
    safari_ios: false,
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **audio_capture_support**: Audio capture support
- **controller_option**: `controller` option
- **monitorTypeSurfaces_option**: `monitorTypeSurfaces` option
- **preferCurrentTab_option**: `preferCurrentTab` option
- **selfBrowserSurface_option**: `selfBrowserSurface` option
- **surfaceSwitching_option**: `surfaceSwitching` option
- **systemAudio_option**: `systemAudio` option

