# SpeechRecognition.audioend_event API 兼容性数据

## 基本信息

- **API名称**: `SpeechRecognition.audioend_event`
- **MDN文档**: [SpeechRecognition.audioend_event](https://developer.mozilla.org/docs/Web/API/SpeechRecognition/audioend_event)
- **规范文档**: [查看规范](https://webaudio.github.io/web-speech-api/#eventdef-speechrecognition-audioend,https://webaudio.github.io/web-speech-api/#dom-speechrecognition-onaudioend)
- **标签**: `web-features:speech-recognition`
- **描述**: `audioend` event

## 使用示例

### 基本用法

```javascript
// SpeechRecognition.audioend_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('SpeechRecognition.audioend_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 33 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 33

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查SpeechRecognition.audioend_event是否支持
function isSpeechRecognitionAudioend_eventSupported() {
    return 'audioend_event' in speechrecognition && typeof speechrecognition.audioend_event === 'function';
}

if (isSpeechRecognitionAudioend_eventSupported()) {
    console.log('SpeechRecognition.audioend_event 支持');
    // 使用SpeechRecognition.audioend_event
} else {
    console.log('SpeechRecognition.audioend_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SpeechRecognition.audioend_event polyfill
if (!speechrecognition.audioend_event) {
    // 在这里添加polyfill实现
    console.log('加载SpeechRecognition.audioend_event polyfill');
}
```

