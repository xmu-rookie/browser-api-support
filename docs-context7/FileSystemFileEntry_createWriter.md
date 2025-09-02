# FileSystemFileEntry.createWriter API 兼容性数据

## 基本信息

- **API名称**: `FileSystemFileEntry.createWriter`
- **MDN文档**: [FileSystemFileEntry.createWriter](https://developer.mozilla.org/docs/Web/API/FileSystemFileEntry/createWriter)

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "8",
    chrome_android: "同主版本",
    edge: "同主版本",
    firefox: "50", // While the `createWriter()` method existed, it immediately called `errorCallback` with the `NS_ERROR_...,
    firefox_android: "同主版本",
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

