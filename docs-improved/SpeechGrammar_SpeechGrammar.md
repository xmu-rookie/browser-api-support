# SpeechGrammar.SpeechGrammar API 兼容性数据

## 基本信息

- **API名称**: `SpeechGrammar.SpeechGrammar`
- **MDN文档**: [SpeechGrammar.SpeechGrammar](https://developer.mozilla.org/docs/Web/API/SpeechGrammar/SpeechGrammar)
- **描述**: `SpeechGrammar()` constructor

## 使用示例

### 基本用法

```javascript
// SpeechGrammar.SpeechGrammar 使用示例
// 请查阅MDN文档了解具体用法
console.log('SpeechGrammar.SpeechGrammar API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 25 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 44 | Note that currently only the speech synthesis part is available in Firefox Desktop - the speech reco... |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 25
- **前缀**: webkit

### Firefox

- **支持版本**: 44
- **需要标志**: 
  - media.webspeech.recognition.enable: true
- **注意事项**:
  - Note that currently only the speech synthesis part is available in Firefox Desktop - the speech recognition part will be available soon, once the required internal permissions are sorted out.

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SpeechGrammar.SpeechGrammar是否支持
function isSpeechGrammarSpeechGrammarSupported() {
    return 'SpeechGrammar' in speechgrammar && typeof speechgrammar.SpeechGrammar === 'function';
}

if (isSpeechGrammarSpeechGrammarSupported()) {
    console.log('SpeechGrammar.SpeechGrammar 支持');
    // 使用SpeechGrammar.SpeechGrammar
} else {
    console.log('SpeechGrammar.SpeechGrammar 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SpeechGrammar.SpeechGrammar polyfill
if (!speechgrammar.SpeechGrammar) {
    // 在这里添加polyfill实现
    console.log('加载SpeechGrammar.SpeechGrammar polyfill');
}
```

