# Worker.worker_support API 兼容性数据

## 基本信息

- **API名称**: `Worker.worker_support`
- **标签**: `web-features:dedicated-workers`
- **描述**: Available in workers

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "69", // Not available in Shared Workers. See [bug 40695450](https://crbug.com/40695450).,
    chrome_android: "同主版本",
    edge: "同主版本",
    firefox: "34",
    firefox_android: "同主版本",
    nodejs: "11.7.0",
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "16.4", // Not available in Shared Workers. See [bug 265263](https://webkit.org/b/265263).,
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

