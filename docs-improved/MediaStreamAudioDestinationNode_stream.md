# MediaStreamAudioDestinationNode.stream API 兼容性数据

## 基本信息

- **API名称**: `MediaStreamAudioDestinationNode.stream`
- **MDN文档**: [MediaStreamAudioDestinationNode.stream](https://developer.mozilla.org/docs/Web/API/MediaStreamAudioDestinationNode/stream)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-mediastreamaudiodestinationnode-stream)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// MediaStreamAudioDestinationNode.stream 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaStreamAudioDestinationNode.stream API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 25 |  |
| Chrome Android | 同主版本 |  |
| Edge | 18 |  |
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

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 25

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaStreamAudioDestinationNode.stream是否支持
function isMediaStreamAudioDestinationNodeStreamSupported() {
    return 'stream' in mediastreamaudiodestinationnode && typeof mediastreamaudiodestinationnode.stream === 'function';
}

if (isMediaStreamAudioDestinationNodeStreamSupported()) {
    console.log('MediaStreamAudioDestinationNode.stream 支持');
    // 使用MediaStreamAudioDestinationNode.stream
} else {
    console.log('MediaStreamAudioDestinationNode.stream 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaStreamAudioDestinationNode.stream polyfill
if (!mediastreamaudiodestinationnode.stream) {
    // 在这里添加polyfill实现
    console.log('加载MediaStreamAudioDestinationNode.stream polyfill');
}
```

