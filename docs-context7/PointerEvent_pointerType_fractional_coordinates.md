# PointerEvent.pointerType.fractional_coordinates API 兼容性数据

## 基本信息

- **API名称**: `PointerEvent.pointerType.fractional_coordinates`
- **标签**: `web-features:pointer-events-api`
- **描述**: Fractional coordinates for `mouse`.

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "64", // `movementX` and `movementY` are not fractional, see [bug 41364801](https://crbug.com/41364801).,
    chrome_android: "同主版本",
    edge: "79", // `movementX` and `movementY` are not fractional, see [bug 41364801](https://crbug.com/41364801).,
    firefox: "135",
    firefox_android: "同主版本",
    ie: "11", // Only `clientX`, `clientY`, `pageX` and `pageY` are fractional.,
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: false,
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

