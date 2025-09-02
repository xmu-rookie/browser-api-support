# MediaRecorder.stream API 兼容性数据

## 基本信息

- **API名称**: `MediaRecorder.stream`
- **MDN文档**: [MediaRecorder.stream](https://developer.mozilla.org/docs/Web/API/MediaRecorder/stream)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-record/#dom-mediarecorder-stream)
- **标签**: `web-features:mediastream-recording`

## 使用示例

### 基本用法

```javascript
// MediaRecorder.stream 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaRecorder.stream API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 25 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 36 |  |
| Opera Android | 36 |  |
| Safari | 14.1 |  |
| Safari iOS | 14 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 49 |  |
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

### Opera

- **支持版本**: 36

### Opera Android

- **支持版本**: 36

### Safari

- **支持版本**: 14.1

### Safari iOS

- **支持版本**: 14

### WebView Android

- **支持版本**: 49

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaRecorder.stream是否支持
function isMediaRecorderStreamSupported() {
    return 'stream' in mediarecorder && typeof mediarecorder.stream === 'function';
}

if (isMediaRecorderStreamSupported()) {
    console.log('MediaRecorder.stream 支持');
    // 使用MediaRecorder.stream
} else {
    console.log('MediaRecorder.stream 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaRecorder.stream polyfill
if (!mediarecorder.stream) {
    // 在这里添加polyfill实现
    console.log('加载MediaRecorder.stream polyfill');
}
```

