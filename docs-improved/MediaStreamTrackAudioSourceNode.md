# MediaStreamTrackAudioSourceNode API 兼容性数据

## 基本信息

- **API名称**: `MediaStreamTrackAudioSourceNode`
- **MDN文档**: [MediaStreamTrackAudioSourceNode](https://developer.mozilla.org/docs/Web/API/MediaStreamTrackAudioSourceNode)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#MediaStreamTrackAudioSourceNode)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// MediaStreamTrackAudioSourceNode 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaStreamTrackAudioSourceNode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 68 |  |
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

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaStreamTrackAudioSourceNode是否支持
function isMediaStreamTrackAudioSourceNodeSupported() {
    return 'MediaStreamTrackAudioSourceNode' in window || typeof MediaStreamTrackAudioSourceNode !== 'undefined';
}

if (isMediaStreamTrackAudioSourceNodeSupported()) {
    console.log('MediaStreamTrackAudioSourceNode 支持');
    // 使用MediaStreamTrackAudioSourceNode
} else {
    console.log('MediaStreamTrackAudioSourceNode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaStreamTrackAudioSourceNode polyfill
if (!window.MediaStreamTrackAudioSourceNode) {
    // 在这里添加polyfill实现
    console.log('加载MediaStreamTrackAudioSourceNode polyfill');
}
```

