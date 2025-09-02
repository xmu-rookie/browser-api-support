# GPUDevice.createBindGroup API 兼容性数据

## 基本信息

- **API名称**: `GPUDevice.createBindGroup`
- **MDN文档**: [GPUDevice.createBindGroup](https://developer.mozilla.org/docs/Web/API/GPUDevice/createBindGroup)
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/#dom-gpudevice-createbindgroup)
- **标签**: `web-features:webgpu`

## 浏览器兼容性数据

```javascript
// 浏览器兼容性数据
const browserSupport = {
    chrome: "113", // Currently supported on ChromeOS, macOS, and Windows only.,
    chrome_android: "121",
    deno: "1.39",
    edge: "同主版本",
    firefox: "141", // Currently supported on Windows only, in all contexts except for service workers.,
    firefox_android: false,
    oculus: "同主版本",
    opera: "同主版本",
    opera_android: "同主版本",
    safari: "26",
    safari_ios: "同主版本",
    samsunginternet_android: "同主版本",
    webview_android: "同主版本",
    webview_ios: "同主版本",
};

```

## 相关子API

该API包含以下子功能：

- **descriptor_entries_option_accepts_GPUTextureView_resource**: Bind `GPUTextureView` (2D, single subresource) in place of a `GPUExternalTexture`.

