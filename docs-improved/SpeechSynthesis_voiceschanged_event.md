# SpeechSynthesis.voiceschanged_event API 兼容性数据

## 基本信息

- **API名称**: `SpeechSynthesis.voiceschanged_event`
- **MDN文档**: [SpeechSynthesis.voiceschanged_event](https://developer.mozilla.org/docs/Web/API/SpeechSynthesis/voiceschanged_event)
- **规范文档**: [查看规范](https://webaudio.github.io/web-speech-api/#eventdef-speechsynthesis-voiceschanged,https://webaudio.github.io/web-speech-api/#dom-speechsynthesis-onvoiceschanged)
- **标签**: `web-features:speech-synthesis`
- **描述**: `voiceschanged` event

## 使用示例

### 基本用法

```javascript
// SpeechSynthesis.voiceschanged_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('SpeechSynthesis.voiceschanged_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 33 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 49 |  |
| Firefox Android | 62 |  |
| Oculus | 同主版本 |  |
| Opera | 21 |  |
| Opera Android | 不支持 |  |
| Safari | 16 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 3.0 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 33

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 49

### Firefox Android

- **支持版本**: 62

### Opera

- **支持版本**: 21

### Opera Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 16

### Samsung Internet

- **支持版本**: 3.0

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SpeechSynthesis.voiceschanged_event是否支持
function isSpeechSynthesisVoiceschanged_eventSupported() {
    return 'voiceschanged_event' in speechsynthesis && typeof speechsynthesis.voiceschanged_event === 'function';
}

if (isSpeechSynthesisVoiceschanged_eventSupported()) {
    console.log('SpeechSynthesis.voiceschanged_event 支持');
    // 使用SpeechSynthesis.voiceschanged_event
} else {
    console.log('SpeechSynthesis.voiceschanged_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SpeechSynthesis.voiceschanged_event polyfill
if (!speechsynthesis.voiceschanged_event) {
    // 在这里添加polyfill实现
    console.log('加载SpeechSynthesis.voiceschanged_event polyfill');
}
```

