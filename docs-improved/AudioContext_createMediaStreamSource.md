# AudioContext.createMediaStreamSource API 兼容性数据

## 基本信息

- **API名称**: `AudioContext.createMediaStreamSource`
- **MDN文档**: [AudioContext.createMediaStreamSource](https://developer.mozilla.org/docs/Web/API/AudioContext/createMediaStreamSource)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audiocontext-createmediastreamsource)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AudioContext.createMediaStreamSource 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioContext.createMediaStreamSource API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 22 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 25 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 22

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 25

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioContext.createMediaStreamSource是否支持
function isAudioContextCreateMediaStreamSourceSupported() {
    return 'createMediaStreamSource' in audiocontext && typeof audiocontext.createMediaStreamSource === 'function';
}

if (isAudioContextCreateMediaStreamSourceSupported()) {
    console.log('AudioContext.createMediaStreamSource 支持');
    // 使用AudioContext.createMediaStreamSource
} else {
    console.log('AudioContext.createMediaStreamSource 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioContext.createMediaStreamSource polyfill
if (!audiocontext.createMediaStreamSource) {
    // 在这里添加polyfill实现
    console.log('加载AudioContext.createMediaStreamSource polyfill');
}
```

