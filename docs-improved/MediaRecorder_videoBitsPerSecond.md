# MediaRecorder.videoBitsPerSecond API 兼容性数据

## 基本信息

- **API名称**: `MediaRecorder.videoBitsPerSecond`
- **MDN文档**: [MediaRecorder.videoBitsPerSecond](https://developer.mozilla.org/docs/Web/API/MediaRecorder/videoBitsPerSecond)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-record/#dom-mediarecorder-videobitspersecond)
- **标签**: `web-features:mediastream-recording`

## 使用示例

### 基本用法

```javascript
// MediaRecorder.videoBitsPerSecond 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaRecorder.videoBitsPerSecond API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 71 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 49

### Firefox

- **支持版本**: 71

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaRecorder.videoBitsPerSecond是否支持
function isMediaRecorderVideoBitsPerSecondSupported() {
    return 'videoBitsPerSecond' in mediarecorder && typeof mediarecorder.videoBitsPerSecond === 'function';
}

if (isMediaRecorderVideoBitsPerSecondSupported()) {
    console.log('MediaRecorder.videoBitsPerSecond 支持');
    // 使用MediaRecorder.videoBitsPerSecond
} else {
    console.log('MediaRecorder.videoBitsPerSecond 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaRecorder.videoBitsPerSecond polyfill
if (!mediarecorder.videoBitsPerSecond) {
    // 在这里添加polyfill实现
    console.log('加载MediaRecorder.videoBitsPerSecond polyfill');
}
```

