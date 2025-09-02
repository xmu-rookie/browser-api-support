# AudioContext.createMediaStreamTrackSource API 兼容性数据

## 基本信息

- **API名称**: `AudioContext.createMediaStreamTrackSource`
- **MDN文档**: [AudioContext.createMediaStreamTrackSource](https://developer.mozilla.org/docs/Web/API/AudioContext/createMediaStreamTrackSource)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audiocontext-createmediastreamtracksource)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AudioContext.createMediaStreamTrackSource 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioContext.createMediaStreamTrackSource API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 68 | Firefox 68 implements the updated standard's definition of the "first" audio track; now the first tr... |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 68
- **注意事项**:
  - Firefox 68 implements the updated standard's definition of the "first" audio track; now the first track is the one whose ID comes first lexicographically.

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioContext.createMediaStreamTrackSource是否支持
function isAudioContextCreateMediaStreamTrackSourceSupported() {
    return 'createMediaStreamTrackSource' in audiocontext && typeof audiocontext.createMediaStreamTrackSource === 'function';
}

if (isAudioContextCreateMediaStreamTrackSourceSupported()) {
    console.log('AudioContext.createMediaStreamTrackSource 支持');
    // 使用AudioContext.createMediaStreamTrackSource
} else {
    console.log('AudioContext.createMediaStreamTrackSource 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioContext.createMediaStreamTrackSource polyfill
if (!audiocontext.createMediaStreamTrackSource) {
    // 在这里添加polyfill实现
    console.log('加载AudioContext.createMediaStreamTrackSource polyfill');
}
```

