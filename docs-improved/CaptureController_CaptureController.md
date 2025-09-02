# CaptureController.CaptureController API 兼容性数据

## 基本信息

- **API名称**: `CaptureController.CaptureController`
- **MDN文档**: [CaptureController.CaptureController](https://developer.mozilla.org/docs/Web/API/CaptureController/CaptureController)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-screen-share/#dom-capturecontroller-constructor)
- **标签**: `web-features:screen-capture`
- **描述**: `CaptureController()` constructor

## 使用示例

### 基本用法

```javascript
// CaptureController.CaptureController 使用示例
// 请查阅MDN文档了解具体用法
console.log('CaptureController.CaptureController API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 109 |  |
| Chrome Android | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 109

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查CaptureController.CaptureController是否支持
function isCaptureControllerCaptureControllerSupported() {
    return 'CaptureController' in capturecontroller && typeof capturecontroller.CaptureController === 'function';
}

if (isCaptureControllerCaptureControllerSupported()) {
    console.log('CaptureController.CaptureController 支持');
    // 使用CaptureController.CaptureController
} else {
    console.log('CaptureController.CaptureController 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CaptureController.CaptureController polyfill
if (!capturecontroller.CaptureController) {
    // 在这里添加polyfill实现
    console.log('加载CaptureController.CaptureController polyfill');
}
```

