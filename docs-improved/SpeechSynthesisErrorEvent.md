# SpeechSynthesisErrorEvent API 兼容性数据

## 基本信息

- **API名称**: `SpeechSynthesisErrorEvent`
- **MDN文档**: [SpeechSynthesisErrorEvent](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisErrorEvent)
- **规范文档**: [查看规范](https://webaudio.github.io/web-speech-api/#speechsynthesiserrorevent)
- **标签**: `web-features:speech-synthesis`

## 使用示例

### 基本用法

```javascript
// SpeechSynthesisErrorEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('SpeechSynthesisErrorEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 33 |  |
| Chrome Android | 同主版本 |  |
| Edge | ≤18 |  |
| Firefox | 49 |  |
| Firefox Android | 62 |  |
| Oculus | 同主版本 |  |
| Opera | 21 |  |
| Opera Android | 不支持 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 3.0 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 33

### Edge

- **支持版本**: ≤18

### Firefox

- **支持版本**: 49

### Firefox Android

- **支持版本**: 62

### Opera

- **支持版本**: 21

### Opera Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 7

### Samsung Internet

- **支持版本**: 3.0

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SpeechSynthesisErrorEvent是否支持
function isSpeechSynthesisErrorEventSupported() {
    return 'SpeechSynthesisErrorEvent' in window || typeof SpeechSynthesisErrorEvent !== 'undefined';
}

if (isSpeechSynthesisErrorEventSupported()) {
    console.log('SpeechSynthesisErrorEvent 支持');
    // 使用SpeechSynthesisErrorEvent
} else {
    console.log('SpeechSynthesisErrorEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SpeechSynthesisErrorEvent polyfill
if (!window.SpeechSynthesisErrorEvent) {
    // 在这里添加polyfill实现
    console.log('加载SpeechSynthesisErrorEvent polyfill');
}
```

