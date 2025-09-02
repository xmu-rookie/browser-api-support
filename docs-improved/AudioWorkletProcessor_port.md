# AudioWorkletProcessor.port API 兼容性数据

## 基本信息

- **API名称**: `AudioWorkletProcessor.port`
- **MDN文档**: [AudioWorkletProcessor.port](https://developer.mozilla.org/docs/Web/API/AudioWorkletProcessor/port)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audioworkletprocessor-port)
- **标签**: `web-features:audio-worklet`

## 使用示例

### 基本用法

```javascript
// AudioWorkletProcessor.port 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioWorkletProcessor.port API');
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
// 检查AudioWorkletProcessor.port是否支持
function isAudioWorkletProcessorPortSupported() {
    return 'port' in audioworkletprocessor && typeof audioworkletprocessor.port === 'function';
}

if (isAudioWorkletProcessorPortSupported()) {
    console.log('AudioWorkletProcessor.port 支持');
    // 使用AudioWorkletProcessor.port
} else {
    console.log('AudioWorkletProcessor.port 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioWorkletProcessor.port polyfill
if (!audioworkletprocessor.port) {
    // 在这里添加polyfill实现
    console.log('加载AudioWorkletProcessor.port polyfill');
}
```

