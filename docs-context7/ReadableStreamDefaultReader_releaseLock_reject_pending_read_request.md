# ReadableStreamDefaultReader.releaseLock.reject_pending_read_request API 兼容性数据

## 基本信息

- **API名称**: `ReadableStreamDefaultReader.releaseLock.reject_pending_read_request`
- **标签**: `web-features:streams`
- **描述**: `releaseLock()` rejects pending read requests

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "105", // Before version 105, `releaseLock()` throws instead of rejecting.,
    chrome_android: "同主版本",
    deno: "1.18",
    edge: "同主版本",
    firefox: "102",
    firefox_android: "同主版本",
    nodejs: "18.9.0",
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "17",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

