# AudioWorkletProcessor.AudioWorkletProcessor API 兼容性数据

## 基本信息

- **API名称**: `AudioWorkletProcessor.AudioWorkletProcessor`
- **MDN文档**: [AudioWorkletProcessor.AudioWorkletProcessor](https://developer.mozilla.org/docs/Web/API/AudioWorkletProcessor/AudioWorkletProcessor)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audioworkletprocessor-audioworkletprocessor)
- **标签**: `web-features:audio-worklet`
- **描述**: `AudioWorkletProcessor()` constructor

## 使用示例

### 基本用法

```javascript
// AudioWorkletProcessor.AudioWorkletProcessor 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioWorkletProcessor.AudioWorkletProcessor API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 64 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 76 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 64

### Firefox

- **支持版本**: 76

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioWorkletProcessor.AudioWorkletProcessor是否支持
function isAudioWorkletProcessorAudioWorkletProcessorSupported() {
    return 'AudioWorkletProcessor' in audioworkletprocessor && typeof audioworkletprocessor.AudioWorkletProcessor === 'function';
}

if (isAudioWorkletProcessorAudioWorkletProcessorSupported()) {
    console.log('AudioWorkletProcessor.AudioWorkletProcessor 支持');
    // 使用AudioWorkletProcessor.AudioWorkletProcessor
} else {
    console.log('AudioWorkletProcessor.AudioWorkletProcessor 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioWorkletProcessor.AudioWorkletProcessor polyfill
if (!audioworkletprocessor.AudioWorkletProcessor) {
    // 在这里添加polyfill实现
    console.log('加载AudioWorkletProcessor.AudioWorkletProcessor polyfill');
}
```

