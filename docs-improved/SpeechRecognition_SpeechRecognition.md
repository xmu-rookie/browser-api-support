# SpeechRecognition.SpeechRecognition API 兼容性数据

## 基本信息

- **API名称**: `SpeechRecognition.SpeechRecognition`
- **MDN文档**: [SpeechRecognition.SpeechRecognition](https://developer.mozilla.org/docs/Web/API/SpeechRecognition/SpeechRecognition)
- **规范文档**: [查看规范](https://webaudio.github.io/web-speech-api/#dom-speechrecognition-speechrecognition)
- **标签**: `web-features:speech-recognition`
- **描述**: `SpeechRecognition()` constructor

## 使用示例

### 基本用法

```javascript
// SpeechRecognition.SpeechRecognition 使用示例
// 请查阅MDN文档了解具体用法
console.log('SpeechRecognition.SpeechRecognition API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 139 |  |
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
| WebView Android | 37 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 139
- **支持版本**: 33
- **前缀**: webkit

### Firefox

- **支持版本**: 不支持

### Opera

- **支持版本**: 不支持

### Opera Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 14.1
- **前缀**: webkit

### WebView Android

- **支持版本**: 37
- **前缀**: webkit

## 兼容性检查代码

### 特性检测

```javascript
// 检查SpeechRecognition.SpeechRecognition是否支持
function isSpeechRecognitionSpeechRecognitionSupported() {
    return 'SpeechRecognition' in speechrecognition && typeof speechrecognition.SpeechRecognition === 'function';
}

if (isSpeechRecognitionSpeechRecognitionSupported()) {
    console.log('SpeechRecognition.SpeechRecognition 支持');
    // 使用SpeechRecognition.SpeechRecognition
} else {
    console.log('SpeechRecognition.SpeechRecognition 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SpeechRecognition.SpeechRecognition polyfill
if (!speechrecognition.SpeechRecognition) {
    // 在这里添加polyfill实现
    console.log('加载SpeechRecognition.SpeechRecognition polyfill');
}
```

