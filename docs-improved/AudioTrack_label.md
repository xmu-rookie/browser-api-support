# AudioTrack.label API 兼容性数据

## 基本信息

- **API名称**: `AudioTrack.label`
- **MDN文档**: [AudioTrack.label](https://developer.mozilla.org/docs/Web/API/AudioTrack/label)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#dom-audiotrack-label-dev)
- **标签**: `web-features:audio-video-tracks`

## 使用示例

### 基本用法

```javascript
// AudioTrack.label 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioTrack.label API');
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
| Safari | 8 |  |
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

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioTrack.label是否支持
function isAudioTrackLabelSupported() {
    return 'label' in audiotrack && typeof audiotrack.label === 'function';
}

if (isAudioTrackLabelSupported()) {
    console.log('AudioTrack.label 支持');
    // 使用AudioTrack.label
} else {
    console.log('AudioTrack.label 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioTrack.label polyfill
if (!audiotrack.label) {
    // 在这里添加polyfill实现
    console.log('加载AudioTrack.label polyfill');
}
```

