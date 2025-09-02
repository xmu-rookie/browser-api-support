# SpeechRecognitionAlternative.transcript API 兼容性数据

## 基本信息

- **API名称**: `SpeechRecognitionAlternative.transcript`
- **MDN文档**: [SpeechRecognitionAlternative.transcript](https://developer.mozilla.org/docs/Web/API/SpeechRecognitionAlternative/transcript)
- **规范文档**: [查看规范](https://webaudio.github.io/web-speech-api/#dom-speechrecognitionalternative-transcript)
- **标签**: `web-features:speech-recognition`

## 使用示例

### 基本用法

```javascript
// SpeechRecognitionAlternative.transcript 使用示例
// 请查阅MDN文档了解具体用法
console.log('SpeechRecognitionAlternative.transcript API');
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
| Opera | 不支持 |  |
| Opera Android | 不支持 |  |
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

### Opera

- **支持版本**: 不支持

### Opera Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查SpeechRecognitionAlternative.transcript是否支持
function isSpeechRecognitionAlternativeTranscriptSupported() {
    return 'transcript' in speechrecognitionalternative && typeof speechrecognitionalternative.transcript === 'function';
}

if (isSpeechRecognitionAlternativeTranscriptSupported()) {
    console.log('SpeechRecognitionAlternative.transcript 支持');
    // 使用SpeechRecognitionAlternative.transcript
} else {
    console.log('SpeechRecognitionAlternative.transcript 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SpeechRecognitionAlternative.transcript polyfill
if (!speechrecognitionalternative.transcript) {
    // 在这里添加polyfill实现
    console.log('加载SpeechRecognitionAlternative.transcript polyfill');
}
```

