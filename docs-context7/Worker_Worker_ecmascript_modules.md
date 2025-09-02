# Worker.Worker.ecmascript_modules API 兼容性数据

## 基本信息

- **API名称**: `Worker.Worker.ecmascript_modules`
- **标签**: `web-features:js-modules-workers`
- **描述**: Support for ECMAScript modules

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "80",
    chrome_android: "同主版本",
    deno: "1.0",
    edge: "同主版本",
    firefox: "114",
    firefox_android: "同主版本",
    nodejs: "12.17.0", // ECMAScript modules are enabled for files ending with `.mjs` and for files ending with `.js` when the...,
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "15", // Nested workers support was introduced in Safari 15.5.; Script loading in nested workers was introduc...,
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

