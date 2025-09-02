# MediaDevices.getDisplayMedia.controller_option API 兼容性数据

## 基本信息

- **API名称**: `MediaDevices.getDisplayMedia.controller_option`
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-screen-share/#dom-displaymediastreamoptions-controller)
- **标签**: `web-features:screen-capture`
- **描述**: `controller` option

## 使用示例

### 基本用法

```javascript
// MediaDevices.getDisplayMedia.controller_option 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaDevices.getDisplayMedia.controller_option API');
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
// 检查MediaDevices.getDisplayMedia.controller_option是否支持
function isMediaDevicesGetDisplayMediaSupported() {
    return 'getDisplayMedia' in mediadevices && typeof mediadevices.getDisplayMedia === 'function';
}

if (isMediaDevicesGetDisplayMediaSupported()) {
    console.log('MediaDevices.getDisplayMedia.controller_option 支持');
    // 使用MediaDevices.getDisplayMedia.controller_option
} else {
    console.log('MediaDevices.getDisplayMedia.controller_option 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaDevices.getDisplayMedia.controller_option polyfill
if (!mediadevices.getDisplayMedia) {
    // 在这里添加polyfill实现
    console.log('加载MediaDevices.getDisplayMedia.controller_option polyfill');
}
```

