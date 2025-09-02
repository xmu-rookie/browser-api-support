# SpeechRecognitionEvent.interpretation API 兼容性数据

## 基本信息

- **API名称**: `SpeechRecognitionEvent.interpretation`
- **MDN文档**: [SpeechRecognitionEvent.interpretation](https://developer.mozilla.org/docs/Web/API/SpeechRecognitionEvent/interpretation)

## 使用示例

### 基本用法

```javascript
// SpeechRecognitionEvent.interpretation 使用示例
// 请查阅MDN文档了解具体用法
console.log('SpeechRecognitionEvent.interpretation API');
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
| Safari | 不支持 |  |
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

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SpeechRecognitionEvent.interpretation是否支持
function isSpeechRecognitionEventInterpretationSupported() {
    return 'interpretation' in speechrecognitionevent && typeof speechrecognitionevent.interpretation === 'function';
}

if (isSpeechRecognitionEventInterpretationSupported()) {
    console.log('SpeechRecognitionEvent.interpretation 支持');
    // 使用SpeechRecognitionEvent.interpretation
} else {
    console.log('SpeechRecognitionEvent.interpretation 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SpeechRecognitionEvent.interpretation polyfill
if (!speechrecognitionevent.interpretation) {
    // 在这里添加polyfill实现
    console.log('加载SpeechRecognitionEvent.interpretation polyfill');
}
```

