# MediaDevices API 兼容性数据

## 基本信息

- **API名称**: `MediaDevices`
- **MDN文档**: [MediaDevices](https://developer.mozilla.org/docs/Web/API/MediaDevices)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#mediadevices)
- **标签**: `web-features:media-capture`

## 使用示例

### 基本用法

```javascript
// MediaDevices 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaDevices API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 47 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 33 |  |
| Firefox Android | 36 |  |
| oculus | 同主版本 |  |
| Opera | 30 |  |
| Opera Android | 30 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 47

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 33

### Firefox Android

- **支持版本**: 36

### Opera

- **支持版本**: 30

### Opera Android

- **支持版本**: 30

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaDevices是否支持
function isMediaDevicesSupported() {
    return 'MediaDevices' in window || typeof MediaDevices !== 'undefined';
}

if (isMediaDevicesSupported()) {
    console.log('MediaDevices 支持');
    // 使用MediaDevices
} else {
    console.log('MediaDevices 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaDevices polyfill
if (!window.MediaDevices) {
    // 在这里添加polyfill实现
    console.log('加载MediaDevices polyfill');
}
```

