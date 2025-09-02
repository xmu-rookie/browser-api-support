# CaptureController.zoomLevel API 兼容性数据

## 基本信息

- **API名称**: `CaptureController.zoomLevel`
- **MDN文档**: [CaptureController.zoomLevel](https://developer.mozilla.org/docs/Web/API/CaptureController/zoomLevel)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-surface-control/#dom-capturecontroller-zoomlevel)

## 使用示例

### 基本用法

```javascript
// CaptureController.zoomLevel 使用示例
// 请查阅MDN文档了解具体用法
console.log('CaptureController.zoomLevel API');
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
// 检查CaptureController.zoomLevel是否支持
function isCaptureControllerZoomLevelSupported() {
    return 'zoomLevel' in capturecontroller && typeof capturecontroller.zoomLevel === 'function';
}

if (isCaptureControllerZoomLevelSupported()) {
    console.log('CaptureController.zoomLevel 支持');
    // 使用CaptureController.zoomLevel
} else {
    console.log('CaptureController.zoomLevel 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CaptureController.zoomLevel polyfill
if (!capturecontroller.zoomLevel) {
    // 在这里添加polyfill实现
    console.log('加载CaptureController.zoomLevel polyfill');
}
```

