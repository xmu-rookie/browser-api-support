# MediaSession.setMicrophoneActive API 兼容性数据

## 基本信息

- **API名称**: `MediaSession.setMicrophoneActive`
- **MDN文档**: [MediaSession.setMicrophoneActive](https://developer.mozilla.org/docs/Web/API/MediaSession/setMicrophoneActive)
- **规范文档**: [查看规范](https://w3c.github.io/mediasession/#dom-mediasession-setmicrophoneactive)
- **标签**: `web-features:media-session`
- **描述**: `setMicrophoneActive()`

## 使用示例

### 基本用法

```javascript
// MediaSession.setMicrophoneActive 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaSession.setMicrophoneActive API');
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
// 检查MediaSession.setMicrophoneActive是否支持
function isMediaSessionSetMicrophoneActiveSupported() {
    return 'setMicrophoneActive' in mediasession && typeof mediasession.setMicrophoneActive === 'function';
}

if (isMediaSessionSetMicrophoneActiveSupported()) {
    console.log('MediaSession.setMicrophoneActive 支持');
    // 使用MediaSession.setMicrophoneActive
} else {
    console.log('MediaSession.setMicrophoneActive 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaSession.setMicrophoneActive polyfill
if (!mediasession.setMicrophoneActive) {
    // 在这里添加polyfill实现
    console.log('加载MediaSession.setMicrophoneActive polyfill');
}
```

