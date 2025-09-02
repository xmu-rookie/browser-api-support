# SpeechSynthesisUtterance.boundary_event API 兼容性数据

## 基本信息

- **API名称**: `SpeechSynthesisUtterance.boundary_event`
- **MDN文档**: [SpeechSynthesisUtterance.boundary_event](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/boundary_event)
- **规范文档**: [查看规范](https://webaudio.github.io/web-speech-api/#eventdef-speechsynthesisutterance-boundary,https://webaudio.github.io/web-speech-api/#dom-speechsynthesisutterance-onboundary)
- **标签**: `web-features:speech-synthesis`
- **描述**: `boundary` event

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "33", // The `boundary` event does not fire as expected. See [bug 40715888](https://crbug.com/40715888).,
    chrome_android: "同主版本",
    edge: "14",
    firefox: "49",
    firefox_android: "62",
    oculus: "同主版本",
    opera: "21",
    opera_android: false,
    safari: "7",
    safari_ios: "同主版本",
    samsunginternet_android: "3.0",
    webview_android: false,
    webview_ios: "同主版本",
};

```

