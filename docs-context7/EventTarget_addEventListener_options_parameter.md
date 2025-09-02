# EventTarget.addEventListener.options_parameter API 兼容性数据

## 基本信息

- **API名称**: `EventTarget.addEventListener.options_parameter`
- **标签**: `web-features:events`
- **描述**: Form with `options` object supported (third parameter can be either options or a `Boolean`, for backwards compatibility)

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    bun: "1.0.0",
    chrome: "49",
    chrome_android: "同主版本",
    deno: "1.0",
    edge: "16",
    firefox: "49",
    firefox_android: "同主版本",
    nodejs: "14.5.0",
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "10",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **options_capture_parameter**: `options.capture` parameter
- **options_once_parameter**: `options.once` parameter
- **options_passive_parameter**: `options.passive` parameter
- **options_passive_parameter_default_true_touch**: `options.passive` parameter defaults to `true` for `touchstart` and `touchmove` events
- **options_passive_parameter_default_true_wheel**: `options.passive` parameter defaults to `true` for `wheel` and `mousewheel` events
- **options_signal_parameter**: `options.signal` parameter

