# Element.requestPointerLock API 兼容性数据

## 基本信息

- **API名称**: `Element.requestPointerLock`
- **MDN文档**: [Element.requestPointerLock](https://developer.mozilla.org/docs/Web/API/Element/requestPointerLock)
- **规范文档**: [查看规范](https://w3c.github.io/pointerlock/#dom-element-requestpointerlock)
- **标签**: `web-features:pointer-lock`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "37", // From version 92, returns a promise instead of `undefined`. The behavior reflects [a specification ch...,
    chrome_android: false,
    edge: "13", // From version 92, returns a promise instead of `undefined`. The behavior reflects [a specification ch...,
    firefox: "50",
    firefox_android: "同主版本",
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "10.1", // From version 18.4, returns a promise instead of `undefined`. The behavior reflects [a specification ...,
    safari_ios: false,
    samsunginternet_android: "3.0", // From version 16, returns a promise instead of `undefined`. The behavior reflects [a specification ch...,
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **options_unadjustedMovement_parameter**: `options.unadjustedMovement` parameter

