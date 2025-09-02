# AudioContext.outputLatency API 兼容性数据

## 基本信息

- **API名称**: `AudioContext.outputLatency`
- **MDN文档**: [AudioContext.outputLatency](https://developer.mozilla.org/docs/Web/API/AudioContext/outputLatency)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audiocontext-outputlatency)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AudioContext.outputLatency 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioContext.outputLatency API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 102 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 70 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 102

### Firefox

- **支持版本**: 70

### Safari

- **支持版本**: 18.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioContext.outputLatency是否支持
function isAudioContextOutputLatencySupported() {
    return 'outputLatency' in audiocontext && typeof audiocontext.outputLatency === 'function';
}

if (isAudioContextOutputLatencySupported()) {
    console.log('AudioContext.outputLatency 支持');
    // 使用AudioContext.outputLatency
} else {
    console.log('AudioContext.outputLatency 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioContext.outputLatency polyfill
if (!audiocontext.outputLatency) {
    // 在这里添加polyfill实现
    console.log('加载AudioContext.outputLatency polyfill');
}
```

