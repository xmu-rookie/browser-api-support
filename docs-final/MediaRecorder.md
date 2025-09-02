# MediaRecorder API 兼容性数据

## 基本信息

- **API名称**: `MediaRecorder`
- **MDN文档**: [MediaRecorder](https://developer.mozilla.org/docs/Web/API/MediaRecorder)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-record/#mediarecorder-api)
- **标签**: `web-features:mediastream-recording`

## 使用示例

### 基本用法

```javascript
// MediaRecorder 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaRecorder API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 47 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 25 | Before Firefox 58, using `MediaStream.addTrack()` on a stream obtained using `getUserMedia()`, then ... |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 47

### Firefox

- **支持版本**: 25
- **注意事项**:
  - Before Firefox 58, using `MediaStream.addTrack()` on a stream obtained using `getUserMedia()`, then attempting to record the resulting stream would result in only recording the original stream without the added tracks (severe bug).

### Opera

- **支持版本**: 36

### Opera Android

- **支持版本**: 36

### Safari

- **支持版本**: 14.1

### Safari iOS

- **支持版本**: 14

