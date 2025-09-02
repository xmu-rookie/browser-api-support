# MediaStreamTrack.applyConstraints.deviceId_constraint API 兼容性数据

## 基本信息

- **API名称**: `MediaStreamTrack.applyConstraints.deviceId_constraint`
- **MDN文档**: [MediaStreamTrack.applyConstraints.deviceId_constraint](https://developer.mozilla.org/docs/Web/API/MediaTrackConstraints/deviceId)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#dom-mediatrackconstraintset-deviceid)
- **标签**: `web-features:media-capture`
- **描述**: `deviceId` constraint

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "59",
    chrome_android: "同主版本",
    edge: "12",
    firefox: "43", // Before Firefox 69, Firefox only supported `deviceId` in constraints passed into `getUserMedia()`.,
    firefox_android: "43", // Firefox for Android only supports `deviceId` when used in constraints passed into `getUserMedia()`.,
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "11",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

