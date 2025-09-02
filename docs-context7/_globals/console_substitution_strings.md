# console.substitution_strings API 兼容性数据

## 基本信息

- **API名称**: `console.substitution_strings`
- **标签**: `web-features:console`
- **描述**: Substitution strings

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "1", // In version 28, if a negative value is passed to %d, it will be rounded down to the closest negative ...,
    chrome_android: "同主版本",
    deno: "1.0", // Before Deno 1.4, `%c` is not supported.; `%c` only supports CSS properties `color`, `background-colo...,
    edge: "12", // Before Edge 79, `%c` is not supported.; Before Edge 79, `%d` outputs a 0 if the specified value isn'...,
    firefox: "9",
    firefox_android: "同主版本",
    ie: "10", // `%c` is not supported.; `%d` outputs a 0 if the specified value isn't a number.,
    nodejs: "0.10.0",
    oculus: "同主版本",
    opera: "15",
    opera_android: "14",
    safari: "3",
    safari_ios: "1",
    samsunginternet_android: "1.0", // In Samsung Internet 1.5, if a negative value is passed to %d, it will be rounded down to the closest...,
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

