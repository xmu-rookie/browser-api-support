# SpeechRecognitionEvent API 兼容性数据

## 基本信息

- **API名称**: `SpeechRecognitionEvent`
- **MDN文档**: [SpeechRecognitionEvent](https://developer.mozilla.org/docs/Web/API/SpeechRecognitionEvent)
- **规范文档**: [查看规范](https://webaudio.github.io/web-speech-api/#speechreco-event)
- **标签**: `web-features:speech-recognition`

## 使用示例

### 基本用法

```javascript
// SpeechRecognitionEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('SpeechRecognitionEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 未知 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | ❌ 不支持 |  |
| Opera Android | ❌ 不支持 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome


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
// 检查SpeechRecognitionEvent是否支持
function isSpeechRecognitionEventSupported() {
    return 'SpeechRecognitionEvent' in window || typeof SpeechRecognitionEvent !== 'undefined';
}

if (isSpeechRecognitionEventSupported()) {
    console.log('SpeechRecognitionEvent 支持');
    // 使用SpeechRecognitionEvent
} else {
    console.log('SpeechRecognitionEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SpeechRecognitionEvent polyfill
if (!window.SpeechRecognitionEvent) {
    // 在这里添加polyfill实现
    console.log('加载SpeechRecognitionEvent polyfill');
}
```

