# Selection.containsNode API 兼容性数据

## 基本信息

- **API名称**: `Selection.containsNode`
- **MDN文档**: [Selection.containsNode](https://developer.mozilla.org/docs/Web/API/Selection/containsNode)
- **规范文档**: [查看规范](https://w3c.github.io/selection-api/#dom-selection-containsnode)
- **标签**: `web-features:selection-api`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "1",
    chrome_android: "同主版本",
    edge: "12",
    firefox: "1", // Before Firefox 35, the method didn't throw if `node` was `null`.,
    firefox_android: "同主版本",
    oculus: "同主版本",
    opera: "≤12.1",
    opera_android: "≤12.1",
    safari: "3.1",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **partialContainment_parameter_optional**: `partialContainment` parameter is optional

