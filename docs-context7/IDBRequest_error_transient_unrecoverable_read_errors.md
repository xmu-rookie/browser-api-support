# IDBRequest.error.transient_unrecoverable_read_errors API 兼容性数据

## 基本信息

- **API名称**: `IDBRequest.error.transient_unrecoverable_read_errors`
- **规范文档**: [查看规范](https://w3c.github.io/IndexedDB/#:~:text=NotReadableError)
- **描述**: Transient and unrecoverable read errors

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "132", // Returns a `NotReadableError` exception for unrecoverable read errors, and an `UnknownError` for tran...,
    chrome_android: "同主版本",
    edge: false,
    firefox: "14",
    firefox_android: "22",
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "8",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

