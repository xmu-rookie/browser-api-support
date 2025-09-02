# AudioContext.createMediaStreamDestination API 兼容性数据

## 基本信息

- **API名称**: `AudioContext.createMediaStreamDestination`
- **MDN文档**: [AudioContext.createMediaStreamDestination](https://developer.mozilla.org/docs/Web/API/AudioContext/createMediaStreamDestination)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audiocontext-createmediastreamdestination)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AudioContext.createMediaStreamDestination 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioContext.createMediaStreamDestination API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 25 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
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

- **支持版本**: 25

### Firefox

- **支持版本**: 25

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioContext.createMediaStreamDestination是否支持
function isAudioContextCreateMediaStreamDestinationSupported() {
    return 'createMediaStreamDestination' in audiocontext && typeof audiocontext.createMediaStreamDestination === 'function';
}

if (isAudioContextCreateMediaStreamDestinationSupported()) {
    console.log('AudioContext.createMediaStreamDestination 支持');
    // 使用AudioContext.createMediaStreamDestination
} else {
    console.log('AudioContext.createMediaStreamDestination 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioContext.createMediaStreamDestination polyfill
if (!audiocontext.createMediaStreamDestination) {
    // 在这里添加polyfill实现
    console.log('加载AudioContext.createMediaStreamDestination polyfill');
}
```

