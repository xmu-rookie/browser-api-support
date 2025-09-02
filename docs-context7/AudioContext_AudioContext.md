# AudioContext.AudioContext API 兼容性数据

## 基本信息

- **API名称**: `AudioContext.AudioContext`
- **MDN文档**: [AudioContext.AudioContext](https://developer.mozilla.org/docs/Web/API/AudioContext/AudioContext)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audiocontext-audiocontext)
- **标签**: `web-features:web-audio`
- **描述**: `AudioContext()` constructor

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "35",
    chrome_android: "同主版本",
    edge: "12",
    firefox: "25",
    firefox_android: "同主版本",
    oculus: "同主版本",
    opera: "22",
    opera_android: "22",
    safari: "14.1", // New audio contexts are suspended until the `resume()` method is called via user action, such as the ...,
    safari_ios: "同主版本",
    samsunginternet_android: "3.0",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **options_latencyHint_parameter**: `options.latencyHint` parameter
- **options_sampleRate_parameter**: `options.sampleRate` parameter
- **options_sinkId_parameter**: `options.sinkId` parameter

