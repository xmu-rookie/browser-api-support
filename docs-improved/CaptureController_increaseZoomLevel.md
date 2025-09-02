# CaptureController.increaseZoomLevel API 兼容性数据

## 基本信息

- **API名称**: `CaptureController.increaseZoomLevel`
- **MDN文档**: [CaptureController.increaseZoomLevel](https://developer.mozilla.org/docs/Web/API/CaptureController/increaseZoomLevel)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-surface-control/#dom-capturecontroller-increasezoomlevel)

## 使用示例

### 基本用法

```javascript
// CaptureController.increaseZoomLevel 使用示例
// 请查阅MDN文档了解具体用法
console.log('CaptureController.increaseZoomLevel API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 136 |  |
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

- **支持版本**: 136

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查CaptureController.increaseZoomLevel是否支持
function isCaptureControllerIncreaseZoomLevelSupported() {
    return 'increaseZoomLevel' in capturecontroller && typeof capturecontroller.increaseZoomLevel === 'function';
}

if (isCaptureControllerIncreaseZoomLevelSupported()) {
    console.log('CaptureController.increaseZoomLevel 支持');
    // 使用CaptureController.increaseZoomLevel
} else {
    console.log('CaptureController.increaseZoomLevel 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CaptureController.increaseZoomLevel polyfill
if (!capturecontroller.increaseZoomLevel) {
    // 在这里添加polyfill实现
    console.log('加载CaptureController.increaseZoomLevel polyfill');
}
```

