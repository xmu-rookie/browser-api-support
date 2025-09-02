# Worker.Worker API 兼容性数据

## 基本信息

- **API名称**: `Worker.Worker`
- **MDN文档**: [Worker.Worker](https://developer.mozilla.org/docs/Web/API/Worker/Worker)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/workers.html#dom-worker-dev)
- **标签**: `web-features:dedicated-workers`
- **描述**: `Worker()` constructor

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    bun: "1.0.0",
    chrome: "4",
    chrome_android: "同主版本",
    deno: "1.0",
    edge: "12",
    firefox: "3.5",
    firefox_android: "同主版本",
    ie: "10",
    nodejs: "11.7.0", // Takes entirely different options parameters.,
    oculus: "同主版本",
    opera: "10.6",
    opera_android: "11",
    safari: "4",
    safari_ios: "5",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **ecmascript_modules**: Support for ECMAScript modules
- **mime_checks**: Strict MIME type checks for worker scripts
- **options_name_parameter**: `options.name` parameter
- **options_type_parameter**: `options.type` parameter

