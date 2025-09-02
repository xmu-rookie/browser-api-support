# MediaStreamAudioSourceNode.mediaStream API 兼容性数据

## 基本信息

- **API名称**: `MediaStreamAudioSourceNode.mediaStream`
- **MDN文档**: [MediaStreamAudioSourceNode.mediaStream](https://developer.mozilla.org/docs/Web/API/MediaStreamAudioSourceNode/mediaStream)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-mediastreamaudiosourcenode-mediastream)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// MediaStreamAudioSourceNode.mediaStream 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaStreamAudioSourceNode.mediaStream API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 22 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 70 |  |
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

### Firefox

- **支持版本**: 70

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaStreamAudioSourceNode.mediaStream是否支持
function isMediaStreamAudioSourceNodeMediaStreamSupported() {
    return 'mediaStream' in mediastreamaudiosourcenode && typeof mediastreamaudiosourcenode.mediaStream === 'function';
}

if (isMediaStreamAudioSourceNodeMediaStreamSupported()) {
    console.log('MediaStreamAudioSourceNode.mediaStream 支持');
    // 使用MediaStreamAudioSourceNode.mediaStream
} else {
    console.log('MediaStreamAudioSourceNode.mediaStream 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaStreamAudioSourceNode.mediaStream polyfill
if (!mediastreamaudiosourcenode.mediaStream) {
    // 在这里添加polyfill实现
    console.log('加载MediaStreamAudioSourceNode.mediaStream polyfill');
}
```

