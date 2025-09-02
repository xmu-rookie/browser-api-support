# SpeechRecognitionResultList.length API 兼容性数据

## 基本信息

- **API名称**: `SpeechRecognitionResultList.length`
- **MDN文档**: [SpeechRecognitionResultList.length](https://developer.mozilla.org/docs/Web/API/SpeechRecognitionResultList/length)
- **规范文档**: [查看规范](https://webaudio.github.io/web-speech-api/#dom-speechrecognitionresultlist-length)
- **标签**: `web-features:speech-recognition`

## 使用示例

### 基本用法

```javascript
// SpeechRecognitionResultList.length 使用示例
// 请查阅MDN文档了解具体用法
console.log('SpeechRecognitionResultList.length API');
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
// 检查SpeechRecognitionResultList.length是否支持
function isSpeechRecognitionResultListLengthSupported() {
    return 'length' in speechrecognitionresultlist && typeof speechrecognitionresultlist.length === 'function';
}

if (isSpeechRecognitionResultListLengthSupported()) {
    console.log('SpeechRecognitionResultList.length 支持');
    // 使用SpeechRecognitionResultList.length
} else {
    console.log('SpeechRecognitionResultList.length 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SpeechRecognitionResultList.length polyfill
if (!speechrecognitionresultlist.length) {
    // 在这里添加polyfill实现
    console.log('加载SpeechRecognitionResultList.length polyfill');
}
```

