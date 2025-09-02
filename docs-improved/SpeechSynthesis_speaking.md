# SpeechSynthesis.speaking API 兼容性数据

## 基本信息

- **API名称**: `SpeechSynthesis.speaking`
- **MDN文档**: [SpeechSynthesis.speaking](https://developer.mozilla.org/docs/Web/API/SpeechSynthesis/speaking)
- **规范文档**: [查看规范](https://webaudio.github.io/web-speech-api/#dom-speechsynthesis-speaking)
- **标签**: `web-features:speech-synthesis`

## 使用示例

### 基本用法

```javascript
// SpeechSynthesis.speaking 使用示例
// 请查阅MDN文档了解具体用法
console.log('SpeechSynthesis.speaking API');
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
| Safari | 7 |  |
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

- **支持版本**: 7

### Samsung Internet

- **支持版本**: 3.0

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SpeechSynthesis.speaking是否支持
function isSpeechSynthesisSpeakingSupported() {
    return 'speaking' in speechsynthesis && typeof speechsynthesis.speaking === 'function';
}

if (isSpeechSynthesisSpeakingSupported()) {
    console.log('SpeechSynthesis.speaking 支持');
    // 使用SpeechSynthesis.speaking
} else {
    console.log('SpeechSynthesis.speaking 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SpeechSynthesis.speaking polyfill
if (!speechsynthesis.speaking) {
    // 在这里添加polyfill实现
    console.log('加载SpeechSynthesis.speaking polyfill');
}
```

