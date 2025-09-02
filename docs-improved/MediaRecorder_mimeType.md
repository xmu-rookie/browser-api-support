# MediaRecorder.mimeType API 兼容性数据

## 基本信息

- **API名称**: `MediaRecorder.mimeType`
- **MDN文档**: [MediaRecorder.mimeType](https://developer.mozilla.org/docs/Web/API/MediaRecorder/mimeType)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-record/#dom-mediarecorder-mimetype)
- **标签**: `web-features:mediastream-recording`

## 使用示例

### 基本用法

```javascript
// MediaRecorder.mimeType 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaRecorder.mimeType API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 25 | Starting with Firefox 71, the behavior of `mimeType` is more consistent. For example, it now returns... |
| Firefox Android | 25 |  |
| Oculus | 同主版本 |  |
| Opera | 36 |  |
| Opera Android | 36 |  |
| Safari | 14.1 |  |
| Safari iOS | 14 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 49
- **支持版本**: 47
- **移除版本**: 49
- **部分实现**: 是
- **注意事项**:
  - Before Chrome 49, only video is supported, not audio.

### Firefox

- **支持版本**: 25
- **注意事项**:
  - Starting with Firefox 71, the behavior of `mimeType` is more consistent. For example, it now returns the media type even after recording has stopped.

### Firefox Android

- **支持版本**: 25

### Opera

- **支持版本**: 36

### Opera Android

- **支持版本**: 36

### Safari

- **支持版本**: 14.1

### Safari iOS

- **支持版本**: 14

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaRecorder.mimeType是否支持
function isMediaRecorderMimeTypeSupported() {
    return 'mimeType' in mediarecorder && typeof mediarecorder.mimeType === 'function';
}

if (isMediaRecorderMimeTypeSupported()) {
    console.log('MediaRecorder.mimeType 支持');
    // 使用MediaRecorder.mimeType
} else {
    console.log('MediaRecorder.mimeType 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaRecorder.mimeType polyfill
if (!mediarecorder.mimeType) {
    // 在这里添加polyfill实现
    console.log('加载MediaRecorder.mimeType polyfill');
}
```

