# MediaRecorder.error_event API 兼容性数据

## 基本信息

- **API名称**: `MediaRecorder.error_event`
- **MDN文档**: [MediaRecorder.error_event](https://developer.mozilla.org/docs/Web/API/MediaRecorder/error_event)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-record/#dom-mediarecorder-onerror)
- **标签**: `web-features:mediastream-recording`
- **描述**: `error` event

## 使用示例

### 基本用法

```javascript
// MediaRecorder.error_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaRecorder.error_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 49 | The interface for this event is a plain [`Event`](https://developer.mozilla.org/docs/Web/API/Event),... |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 25 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 14 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 49
- **部分实现**: 是
- **注意事项**:
  - The interface for this event is a plain [`Event`](https://developer.mozilla.org/docs/Web/API/Event), not [`ErrorEvent`](https://developer.mozilla.org/docs/Web/API/ErrorEvent). See [bug 40791876](https://crbug.com/40791876).

### Firefox

- **支持版本**: 25

### Safari

- **支持版本**: 14.1

### Safari iOS

- **支持版本**: 14

