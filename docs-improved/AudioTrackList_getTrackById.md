# AudioTrackList.getTrackById API 兼容性数据

## 基本信息

- **API名称**: `AudioTrackList.getTrackById`
- **MDN文档**: [AudioTrackList.getTrackById](https://developer.mozilla.org/docs/Web/API/AudioTrackList/getTrackById)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#dom-audiotracklist-gettrackbyid-dev)
- **标签**: `web-features:audio-video-tracks`

## 使用示例

### 基本用法

```javascript
// AudioTrackList.getTrackById 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioTrackList.getTrackById API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 37 |  |
| Chrome Android | 同主版本 |  |
| Edge | 79 |  |
| Firefox | 33 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 37
- **需要标志**: 
  - enable-experimental-web-platform-features: enabled

### Edge

- **支持版本**: 79
- **需要标志**: 
  - enable-experimental-web-platform-features: enabled
- **支持版本**: 12
- **移除版本**: 79

### Firefox

- **支持版本**: 33
- **需要标志**: 
  - media.track.enabled: true

### Internet Explorer

- **支持版本**: 10

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioTrackList.getTrackById是否支持
function isAudioTrackListGetTrackByIdSupported() {
    return 'getTrackById' in audiotracklist && typeof audiotracklist.getTrackById === 'function';
}

if (isAudioTrackListGetTrackByIdSupported()) {
    console.log('AudioTrackList.getTrackById 支持');
    // 使用AudioTrackList.getTrackById
} else {
    console.log('AudioTrackList.getTrackById 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioTrackList.getTrackById polyfill
if (!audiotracklist.getTrackById) {
    // 在这里添加polyfill实现
    console.log('加载AudioTrackList.getTrackById polyfill');
}
```

