# Fence.setReportEventDataForAutomaticBeacons.start_commit_eventType API 兼容性数据

## 基本信息

- **API名称**: `Fence.setReportEventDataForAutomaticBeacons.start_commit_eventType`
- **标签**: `web-features:fencedframe`
- **描述**: Separate `reserved.top_navigation_start` and `reserved.top_navigation_commit` `eventType` values

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "126", // Previously only a single `eventType` was available, `reserved.top_navigation`, but this has been rep...,
    chrome_android: "同主版本",
    edge: "同主版本",
    firefox: false,
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

