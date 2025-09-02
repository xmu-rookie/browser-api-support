# AudioContext.baseLatency API 兼容性数据

## 基本信息

- **API名称**: `AudioContext.baseLatency`
- **MDN文档**: [AudioContext.baseLatency](https://developer.mozilla.org/docs/Web/API/AudioContext/baseLatency)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audiocontext-baselatency)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AudioContext.baseLatency 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioContext.baseLatency API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 58 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 70 |  |
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

- **支持版本**: 58

### Firefox

- **支持版本**: 70

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioContext.baseLatency是否支持
function isAudioContextBaseLatencySupported() {
    return 'baseLatency' in audiocontext && typeof audiocontext.baseLatency === 'function';
}

if (isAudioContextBaseLatencySupported()) {
    console.log('AudioContext.baseLatency 支持');
    // 使用AudioContext.baseLatency
} else {
    console.log('AudioContext.baseLatency 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioContext.baseLatency polyfill
if (!audiocontext.baseLatency) {
    // 在这里添加polyfill实现
    console.log('加载AudioContext.baseLatency polyfill');
}
```

