# MediaSession.setCameraActive API 兼容性数据

## 基本信息

- **API名称**: `MediaSession.setCameraActive`
- **MDN文档**: [MediaSession.setCameraActive](https://developer.mozilla.org/docs/Web/API/MediaSession/setCameraActive)
- **规范文档**: [查看规范](https://w3c.github.io/mediasession/#dom-mediasession-setcameraactive)
- **标签**: `web-features:media-session`
- **描述**: `setCameraActive()`

## 使用示例

### 基本用法

```javascript
// MediaSession.setCameraActive 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaSession.setCameraActive API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 93 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 93

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 18.4

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaSession.setCameraActive是否支持
function isMediaSessionSetCameraActiveSupported() {
    return 'setCameraActive' in mediasession && typeof mediasession.setCameraActive === 'function';
}

if (isMediaSessionSetCameraActiveSupported()) {
    console.log('MediaSession.setCameraActive 支持');
    // 使用MediaSession.setCameraActive
} else {
    console.log('MediaSession.setCameraActive 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaSession.setCameraActive polyfill
if (!mediasession.setCameraActive) {
    // 在这里添加polyfill实现
    console.log('加载MediaSession.setCameraActive polyfill');
}
```

