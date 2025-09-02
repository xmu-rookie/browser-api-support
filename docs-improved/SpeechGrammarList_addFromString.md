# SpeechGrammarList.addFromString API 兼容性数据

## 基本信息

- **API名称**: `SpeechGrammarList.addFromString`
- **MDN文档**: [SpeechGrammarList.addFromString](https://developer.mozilla.org/docs/Web/API/SpeechGrammarList/addFromString)
- **规范文档**: [查看规范](https://webaudio.github.io/web-speech-api/#dom-speechgrammarlist-addfromstring)
- **标签**: `web-features:speech-recognition-grammar`

## 使用示例

### 基本用法

```javascript
// SpeechGrammarList.addFromString 使用示例
// 请查阅MDN文档了解具体用法
console.log('SpeechGrammarList.addFromString API');
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
// 检查SpeechGrammarList.addFromString是否支持
function isSpeechGrammarListAddFromStringSupported() {
    return 'addFromString' in speechgrammarlist && typeof speechgrammarlist.addFromString === 'function';
}

if (isSpeechGrammarListAddFromStringSupported()) {
    console.log('SpeechGrammarList.addFromString 支持');
    // 使用SpeechGrammarList.addFromString
} else {
    console.log('SpeechGrammarList.addFromString 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SpeechGrammarList.addFromString polyfill
if (!speechgrammarlist.addFromString) {
    // 在这里添加polyfill实现
    console.log('加载SpeechGrammarList.addFromString polyfill');
}
```

