# Element.outerHTML API 兼容性数据

## 基本信息

- **API名称**: `Element.outerHTML`
- **MDN文档**: [Element.outerHTML](https://developer.mozilla.org/docs/Web/API/Element/outerHTML)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-element-outerhtml)
- **标签**: `web-features:dom`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "1",
    chrome_android: "同主版本",
    edge: "12",
    firefox: "11",
    firefox_android: "同主版本",
    ie: "4",
    oculus: "同主版本",
    opera: "8",
    opera_android: "10.1",
    safari: "1.3",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "1",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **enforces_trusted_types**: Requires `TrustedHTML` instance when trusted types are enforced
- **escapes_lt_gt_in_attributes**: Serializes `<` and `>` in attributes as `&amp;lt;` and `&amp;gt;` (see [this spec issue](https://github.com/whatwg/html/issues/6235))

