# UIEvent.which API 兼容性数据

## 基本信息

- **API名称**: `UIEvent.which`
- **MDN文档**: [UIEvent.which](https://developer.mozilla.org/docs/Web/API/UIEvent/which)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#dom-uievent-which)

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "1",
    chrome_android: "同主版本",
    edge: "79",
    firefox: "1", // On `mousemove` events, the `which` property is incorrectly always set to `1`.,
    firefox_android: "同主版本",
    ie: "9", // Only supported for [`KeyboardEvent`](https://developer.mozilla.org/docs/Web/API/KeyboardEvent) and [...,
    oculus: "同主版本",
    opera: "15",
    opera_android: "14",
    safari: "1",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

