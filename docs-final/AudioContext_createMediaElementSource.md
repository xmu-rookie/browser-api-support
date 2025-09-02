# AudioContext.createMediaElementSource API 兼容性数据

## 基本信息

- **API名称**: `AudioContext.createMediaElementSource`
- **MDN文档**: [AudioContext.createMediaElementSource](https://developer.mozilla.org/docs/Web/API/AudioContext/createMediaElementSource)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audiocontext-createmediaelementsource)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AudioContext.createMediaElementSource 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioContext.createMediaElementSource API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 15 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 25 | If a sample rate is specified for the audio context, it must match the sample rate of the stream, ot... |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 15

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 25
- **注意事项**:
  - If a sample rate is specified for the audio context, it must match the sample rate of the stream, otherwise this method will fail.

### Safari

- **支持版本**: 6

