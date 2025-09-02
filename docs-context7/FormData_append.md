# FormData.append API 兼容性数据

## 基本信息

- **API名称**: `FormData.append`
- **MDN文档**: [FormData.append](https://developer.mozilla.org/docs/Web/API/FormData/append)
- **规范文档**: [查看规范](https://xhr.spec.whatwg.org/#dom-formdata-append)
- **标签**: `web-features:xhr`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    bun: "1.0.0",
    chrome: "5",
    chrome_android: "同主版本",
    deno: "1.0",
    edge: "12",
    firefox: "4",
    firefox_android: "同主版本",
    ie: "10",
    nodejs: "18.0.0",
    oculus: "同主版本",
    opera: "12",
    opera_android: "12",
    safari: "5",
    safari_ios: "5",
    samsunginternet_android: "同主版本",
    webview_android: "3", // XHR in Android 4.0 sends empty content for `FormData` with `blob`.,
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **filename_parameter**: `filename` parameter

