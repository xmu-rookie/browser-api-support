# SpeechRecognitionResult.item API 兼容性数据

## 基本信息

- **API名称**: `SpeechRecognitionResult.item`
- **MDN文档**: [SpeechRecognitionResult.item](https://developer.mozilla.org/docs/Web/API/SpeechRecognitionResult/item)
- **规范文档**: [查看规范](https://webaudio.github.io/web-speech-api/#dom-speechrecognitionresult-item)
- **标签**: `web-features:speech-recognition`

## 使用示例

### 基本用法

```javascript
// SpeechRecognitionResult.item 使用示例
// 请查阅MDN文档了解具体用法
console.log('SpeechRecognitionResult.item API');
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
// 检查SpeechRecognitionResult.item是否支持
function isSpeechRecognitionResultItemSupported() {
    return 'item' in speechrecognitionresult && typeof speechrecognitionresult.item === 'function';
}

if (isSpeechRecognitionResultItemSupported()) {
    console.log('SpeechRecognitionResult.item 支持');
    // 使用SpeechRecognitionResult.item
} else {
    console.log('SpeechRecognitionResult.item 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SpeechRecognitionResult.item polyfill
if (!speechrecognitionresult.item) {
    // 在这里添加polyfill实现
    console.log('加载SpeechRecognitionResult.item polyfill');
}
```

