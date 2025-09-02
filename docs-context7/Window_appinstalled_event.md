# Window.appinstalled_event API 兼容性数据

## 基本信息

- **API名称**: `Window.appinstalled_event`
- **MDN文档**: [Window.appinstalled_event](https://developer.mozilla.org/docs/Web/API/Window/appinstalled_event)
- **规范文档**: [查看规范](https://wicg.github.io/manifest-incubations/#dom-window-onappinstalled)
- **标签**: `web-features:beforeinstallprompt`
- **描述**: `appinstalled` event

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "64",
    chrome_android: "57",
    deno: false,
    edge: "同主版本",
    firefox: false,
    firefox_android: "同主版本",
    oculus: "同主版本",
    opera: false, // Opera exposes the `onappinstalled` event handler, but the event is never fired.,
    opera_android: false, // Opera exposes the `onappinstalled` event handler, but the event is never fired.,
    safari: false,
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

