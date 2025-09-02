# AudioParam.value API 兼容性数据

## 基本信息

- **API名称**: `AudioParam.value`
- **MDN文档**: [AudioParam.value](https://developer.mozilla.org/docs/Web/API/AudioParam/value)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audioparam-value)
- **标签**: `web-features:web-audio`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "14", // Before version 66, the gain value of a `GainNode` would perform a smooth interpolation to prevent de...,
    chrome_android: "同主版本",
    edge: "12",
    firefox: "25",
    firefox_android: "25", // Firefox for Android does not currently take into account scheduled or gradiated changes to the param...,
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "6",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

