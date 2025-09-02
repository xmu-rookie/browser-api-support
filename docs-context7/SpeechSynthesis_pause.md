# SpeechSynthesis.pause API 兼容性数据

## 基本信息

- **API名称**: `SpeechSynthesis.pause`
- **MDN文档**: [SpeechSynthesis.pause](https://developer.mozilla.org/docs/Web/API/SpeechSynthesis/pause)
- **规范文档**: [查看规范](https://webaudio.github.io/web-speech-api/#dom-speechsynthesis-pause)
- **标签**: `web-features:speech-synthesis`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "33",
    chrome_android: "33", // In Android, `pause()` ends the current utterance. `pause()` behaves the same as `cancel()`.,
    edge: "14",
    firefox: "49",
    firefox_android: "62", // In Android, `pause()` ends the current utterance. `pause()` behaves the same as `cancel()`.,
    oculus: "同主版本",
    opera: "21",
    opera_android: false,
    safari: "7",
    safari_ios: "同主版本",
    samsunginternet_android: "3.0", // In Android, `pause()` ends the current utterance. `pause()` behaves the same as `cancel()`.,
    webview_android: false,
    webview_ios: "同主版本",
};

```

