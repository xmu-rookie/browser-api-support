# EncodedAudioChunk.duration API 兼容性数据

## 基本信息

- **API名称**: `EncodedAudioChunk.duration`
- **MDN文档**: [EncodedAudioChunk.duration](https://developer.mozilla.org/docs/Web/API/EncodedAudioChunk/duration)
- **规范文档**: [查看规范](https://w3c.github.io/webcodecs/#dom-encodedaudiochunk-duration)
- **标签**: `web-features:webcodecs`

## 使用示例

### 基本用法

```javascript
// EncodedAudioChunk.duration 使用示例
// 请查阅MDN文档了解具体用法
console.log('EncodedAudioChunk.duration API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 94 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 130 |  |
| Firefox Android | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 94

### Firefox

- **支持版本**: 130

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查EncodedAudioChunk.duration是否支持
function isEncodedAudioChunkDurationSupported() {
    return 'duration' in encodedaudiochunk && typeof encodedaudiochunk.duration === 'function';
}

if (isEncodedAudioChunkDurationSupported()) {
    console.log('EncodedAudioChunk.duration 支持');
    // 使用EncodedAudioChunk.duration
} else {
    console.log('EncodedAudioChunk.duration 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EncodedAudioChunk.duration polyfill
if (!encodedaudiochunk.duration) {
    // 在这里添加polyfill实现
    console.log('加载EncodedAudioChunk.duration polyfill');
}
```

