# SpeechRecognition API 兼容性数据

## 基本信息

- **API名称**: `SpeechRecognition`
- **MDN文档**: [SpeechRecognition](https://developer.mozilla.org/docs/Web/API/SpeechRecognition)
- **规范文档**: [查看规范](https://webaudio.github.io/web-speech-api/#speechreco-section)
- **标签**: `web-features:speech-recognition`

## 使用示例

### 基本用法

```javascript
// SpeechRecognition 使用示例
// 请查阅MDN文档了解具体用法
console.log('SpeechRecognition API');
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
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome


### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查SpeechRecognition是否支持
function isSpeechRecognitionSupported() {
    return 'SpeechRecognition' in window || typeof SpeechRecognition !== 'undefined';
}

if (isSpeechRecognitionSupported()) {
    console.log('SpeechRecognition 支持');
    // 使用SpeechRecognition
} else {
    console.log('SpeechRecognition 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SpeechRecognition polyfill
if (!window.SpeechRecognition) {
    // 在这里添加polyfill实现
    console.log('加载SpeechRecognition polyfill');
}
```

