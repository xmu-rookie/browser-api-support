# MediaDevices.getSupportedConstraints API 兼容性数据

## 基本信息

- **API名称**: `MediaDevices.getSupportedConstraints`
- **MDN文档**: [MediaDevices.getSupportedConstraints](https://developer.mozilla.org/docs/Web/API/MediaDevices/getSupportedConstraints)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#dom-mediadevices-getsupportedconstraints)
- **标签**: `web-features:media-capture`

## 使用示例

### 基本用法

```javascript
// MediaDevices.getSupportedConstraints 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaDevices.getSupportedConstraints API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 53 |  |
| Chrome Android | 52 |  |
| Edge | 12 |  |
| Firefox | 44 |  |
| Firefox Android | 50 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 53 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 53

### Chrome Android

- **支持版本**: 52

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 44

### Firefox Android

- **支持版本**: 50

### Safari

- **支持版本**: 11

### WebView Android

- **支持版本**: 53

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaDevices.getSupportedConstraints是否支持
function isMediaDevicesGetSupportedConstraintsSupported() {
    return 'getSupportedConstraints' in mediadevices && typeof mediadevices.getSupportedConstraints === 'function';
}

if (isMediaDevicesGetSupportedConstraintsSupported()) {
    console.log('MediaDevices.getSupportedConstraints 支持');
    // 使用MediaDevices.getSupportedConstraints
} else {
    console.log('MediaDevices.getSupportedConstraints 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaDevices.getSupportedConstraints polyfill
if (!mediadevices.getSupportedConstraints) {
    // 在这里添加polyfill实现
    console.log('加载MediaDevices.getSupportedConstraints polyfill');
}
```

