# CaptureController.zoomlevelchange_event API 兼容性数据

## 基本信息

- **API名称**: `CaptureController.zoomlevelchange_event`
- **MDN文档**: [CaptureController.zoomlevelchange_event](https://developer.mozilla.org/docs/Web/API/CaptureController/zoomlevelchange_event)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-surface-control/#dom-capturecontroller-onzoomlevelchange)
- **描述**: `zoomlevelchange` event

## 使用示例

### 基本用法

```javascript
// CaptureController.zoomlevelchange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('CaptureController.zoomlevelchange_event API');
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
// 检查CaptureController.zoomlevelchange_event是否支持
function isCaptureControllerZoomlevelchange_eventSupported() {
    return 'zoomlevelchange_event' in capturecontroller && typeof capturecontroller.zoomlevelchange_event === 'function';
}

if (isCaptureControllerZoomlevelchange_eventSupported()) {
    console.log('CaptureController.zoomlevelchange_event 支持');
    // 使用CaptureController.zoomlevelchange_event
} else {
    console.log('CaptureController.zoomlevelchange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CaptureController.zoomlevelchange_event polyfill
if (!capturecontroller.zoomlevelchange_event) {
    // 在这里添加polyfill实现
    console.log('加载CaptureController.zoomlevelchange_event polyfill');
}
```

