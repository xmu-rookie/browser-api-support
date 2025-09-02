# AudioContext.AudioContext API 兼容性数据

## 基本信息

- **API名称**: `AudioContext.AudioContext`
- **MDN文档**: [AudioContext.AudioContext](https://developer.mozilla.org/docs/Web/API/AudioContext/AudioContext)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audiocontext-audiocontext)
- **标签**: `web-features:web-audio`
- **描述**: `AudioContext()` constructor

## 使用示例

### 基本用法

```javascript
// AudioContext.AudioContext 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioContext.AudioContext API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 35 | Before Chrome 66, each tab is limited to 6 audio contexts in Chrome; attempting to create more will ... |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 25 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 22 | Before Opera 53, each tab is limited to 6 audio contexts in Opera; attempting to create more will th... |
| Opera Android | 22 | Before Opera Android 47, each tab is limited to 6 audio contexts in Opera; attempting to create more... |
| Safari | 14.1 | New audio contexts are suspended until the `resume()` method is called via user action, such as the ... |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 3.0 | Before Samsung Internet 9.0, each tab is limited to 6 audio contexts in Samsung Internet; attempting... |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 35
- **注意事项**:
  - Before Chrome 66, each tab is limited to 6 audio contexts in Chrome; attempting to create more will throw a `DOMException`. For details see [Per-tab audio context limitation in Chrome](https://developer.mozilla.org/docs/Web/API/AudioContext/AudioContext#Per-tab_audio_context_limitation_in_Chrome).
  - If `latencyHint` isn't valid, Chrome throws a `TypeError` exception. See [Non-standard exceptions in Chrome](https://developer.mozilla.org/docs/Web/API/AudioContext/AudioContext#Non-standard_exceptions_in_Chrome) for details.
- **支持版本**: 14
- **移除版本**: 57
- **前缀**: webkit

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 25

### Opera

- **支持版本**: 22
- **注意事项**:
  - Before Opera 53, each tab is limited to 6 audio contexts in Opera; attempting to create more will throw a `DOMException`. For details see [Per-tab audio context limitation in Chrome](https://developer.mozilla.org/docs/Web/API/AudioContext/AudioContext#Per-tab_audio_context_limitation_in_Chrome).
  - If `latencyHint` isn't valid, Opera throws a `TypeError` exception. See [Non-standard exceptions in Chrome](https://developer.mozilla.org/docs/Web/API/AudioContext/AudioContext#Non-standard_exceptions_in_Chrome) for details.
- **支持版本**: 15
- **移除版本**: 44
- **前缀**: webkit

### Opera Android

- **支持版本**: 22
- **注意事项**:
  - Before Opera Android 47, each tab is limited to 6 audio contexts in Opera; attempting to create more will throw a `DOMException`. For details see [Per-tab audio context limitation in Chrome](https://developer.mozilla.org/docs/Web/API/AudioContext/AudioContext#Per-tab_audio_context_limitation_in_Chrome).
  - If `latencyHint` isn't valid, Opera throws a `TypeError` exception. See [Non-standard exceptions in Chrome](https://developer.mozilla.org/docs/Web/API/AudioContext/AudioContext#Non-standard_exceptions_in_Chrome) for details.
- **支持版本**: 14
- **移除版本**: 43
- **前缀**: webkit

### Safari

- **支持版本**: 14.1
- **注意事项**:
  - New audio contexts are suspended until the `resume()` method is called via user action, such as the `click` event.
- **支持版本**: 6
- **前缀**: webkit

### Samsung Internet

- **支持版本**: 3.0
- **注意事项**:
  - Before Samsung Internet 9.0, each tab is limited to 6 audio contexts in Samsung Internet; attempting to create more will throw a `DOMException`. For details see [Per-tab audio context limitation in Chrome](https://developer.mozilla.org/docs/Web/API/AudioContext/AudioContext#Per-tab_audio_context_limitation_in_Chrome).
  - If `latencyHint` isn't valid, Samsung Internet throws a `TypeError` exception. See [Non-standard exceptions in Chrome](https://developer.mozilla.org/docs/Web/API/AudioContext/AudioContext#Non-standard_exceptions_in_Chrome) for details.
- **支持版本**: 1.0
- **移除版本**: 7.0
- **前缀**: webkit

## 相关子API

该API包含以下子功能：

- **options_latencyHint_parameter**: `options.latencyHint` parameter
- **options_sampleRate_parameter**: `options.sampleRate` parameter
- **options_sinkId_parameter**: `options.sinkId` parameter

