# MediaRecorder.resume_event API 兼容性数据

## 基本信息

- **API名称**: `MediaRecorder.resume_event`
- **MDN文档**: [MediaRecorder.resume_event](https://developer.mozilla.org/docs/Web/API/MediaRecorder/resume_event)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-record/#dom-mediarecorder-onresume)
- **标签**: `web-features:mediastream-recording`
- **描述**: `resume` event

## 使用示例

### 基本用法

```javascript
// MediaRecorder.resume_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaRecorder.resume_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 65 |  |
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

- **支持版本**: 65

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaRecorder.resume_event是否支持
function isMediaRecorderResume_eventSupported() {
    return 'resume_event' in mediarecorder && typeof mediarecorder.resume_event === 'function';
}

if (isMediaRecorderResume_eventSupported()) {
    console.log('MediaRecorder.resume_event 支持');
    // 使用MediaRecorder.resume_event
} else {
    console.log('MediaRecorder.resume_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaRecorder.resume_event polyfill
if (!mediarecorder.resume_event) {
    // 在这里添加polyfill实现
    console.log('加载MediaRecorder.resume_event polyfill');
}
```

