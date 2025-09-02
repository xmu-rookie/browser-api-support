# SpeechRecognitionErrorEvent.message API 兼容性数据

## 基本信息

- **API名称**: `SpeechRecognitionErrorEvent.message`
- **MDN文档**: [SpeechRecognitionErrorEvent.message](https://developer.mozilla.org/docs/Web/API/SpeechRecognitionErrorEvent/message)
- **规范文档**: [查看规范](https://webaudio.github.io/web-speech-api/#dom-speechrecognitionerrorevent-message)
- **标签**: `web-features:speech-recognition`

## 使用示例

### 基本用法

```javascript
// SpeechRecognitionErrorEvent.message 使用示例
// 请查阅MDN文档了解具体用法
console.log('SpeechRecognitionErrorEvent.message API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 77 |  |
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

- **支持版本**: 77

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查SpeechRecognitionErrorEvent.message是否支持
function isSpeechRecognitionErrorEventMessageSupported() {
    return 'message' in speechrecognitionerrorevent && typeof speechrecognitionerrorevent.message === 'function';
}

if (isSpeechRecognitionErrorEventMessageSupported()) {
    console.log('SpeechRecognitionErrorEvent.message 支持');
    // 使用SpeechRecognitionErrorEvent.message
} else {
    console.log('SpeechRecognitionErrorEvent.message 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SpeechRecognitionErrorEvent.message polyfill
if (!speechrecognitionerrorevent.message) {
    // 在这里添加polyfill实现
    console.log('加载SpeechRecognitionErrorEvent.message polyfill');
}
```

