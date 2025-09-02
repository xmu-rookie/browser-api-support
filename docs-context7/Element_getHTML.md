# Element.getHTML API 兼容性数据

## 基本信息

- **API名称**: `Element.getHTML`
- **MDN文档**: [Element.getHTML](https://developer.mozilla.org/docs/Web/API/Element/getHTML)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-element-gethtml)
- **标签**: `web-features:gethtml`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "125",
    chrome_android: "同主版本",
    edge: "同主版本",
    firefox: "128",
    firefox_android: "同主版本",
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "18",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **escapes_lt_gt_in_attributes**: Serializes `<` and `>` in attributes as `&amp;lt;` and `&amp;gt;` (see [this spec issue](https://github.com/whatwg/html/issues/6235))

