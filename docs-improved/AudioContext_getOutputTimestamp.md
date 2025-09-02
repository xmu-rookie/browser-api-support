# AudioContext.getOutputTimestamp API 兼容性数据

## 基本信息

- **API名称**: `AudioContext.getOutputTimestamp`
- **MDN文档**: [AudioContext.getOutputTimestamp](https://developer.mozilla.org/docs/Web/API/AudioContext/getOutputTimestamp)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audiocontext-getoutputtimestamp)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AudioContext.getOutputTimestamp 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioContext.getOutputTimestamp API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 57 |  |
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

- **支持版本**: 57

### Firefox

- **支持版本**: 70

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioContext.getOutputTimestamp是否支持
function isAudioContextGetOutputTimestampSupported() {
    return 'getOutputTimestamp' in audiocontext && typeof audiocontext.getOutputTimestamp === 'function';
}

if (isAudioContextGetOutputTimestampSupported()) {
    console.log('AudioContext.getOutputTimestamp 支持');
    // 使用AudioContext.getOutputTimestamp
} else {
    console.log('AudioContext.getOutputTimestamp 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioContext.getOutputTimestamp polyfill
if (!audiocontext.getOutputTimestamp) {
    // 在这里添加polyfill实现
    console.log('加载AudioContext.getOutputTimestamp polyfill');
}
```

