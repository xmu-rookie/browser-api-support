# AudioWorkletProcessor API 兼容性数据

## 基本信息

- **API名称**: `AudioWorkletProcessor`
- **MDN文档**: [AudioWorkletProcessor](https://developer.mozilla.org/docs/Web/API/AudioWorkletProcessor)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#AudioWorkletProcessor)
- **标签**: `web-features:audio-worklet`

## 使用示例

### 基本用法

```javascript
// AudioWorkletProcessor 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioWorkletProcessor API');
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
// 检查AudioWorkletProcessor是否支持
function isAudioWorkletProcessorSupported() {
    return 'AudioWorkletProcessor' in window || typeof AudioWorkletProcessor !== 'undefined';
}

if (isAudioWorkletProcessorSupported()) {
    console.log('AudioWorkletProcessor 支持');
    // 使用AudioWorkletProcessor
} else {
    console.log('AudioWorkletProcessor 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioWorkletProcessor polyfill
if (!window.AudioWorkletProcessor) {
    // 在这里添加polyfill实现
    console.log('加载AudioWorkletProcessor polyfill');
}
```

