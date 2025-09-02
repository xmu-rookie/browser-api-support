# AudioTrack.sourceBuffer API 兼容性数据

## 基本信息

- **API名称**: `AudioTrack.sourceBuffer`
- **MDN文档**: [AudioTrack.sourceBuffer](https://developer.mozilla.org/docs/Web/API/AudioTrack/sourceBuffer)
- **规范文档**: [查看规范](https://w3c.github.io/media-source/#dom-audiotrack-sourcebuffer)
- **标签**: `web-features:media-source`

## 使用示例

### 基本用法

```javascript
// AudioTrack.sourceBuffer 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioTrack.sourceBuffer API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 51 |  |
| Chrome Android | 同主版本 |  |
| Edge | 79 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 13 | Exposed in Mobile Safari on iPad but not on iPhone. |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 51
- **需要标志**: 
  - enable-experimental-web-platform-features: enabled

### Edge

- **支持版本**: 79
- **需要标志**: 
  - enable-experimental-web-platform-features: enabled
- **支持版本**: 12
- **移除版本**: 79

### Firefox

- **支持版本**: 不支持

### Internet Explorer

- **支持版本**: 11

### Safari

- **支持版本**: 8

### Safari iOS

- **支持版本**: 13
- **部分实现**: 是
- **注意事项**:
  - Exposed in Mobile Safari on iPad but not on iPhone.

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioTrack.sourceBuffer是否支持
function isAudioTrackSourceBufferSupported() {
    return 'sourceBuffer' in audiotrack && typeof audiotrack.sourceBuffer === 'function';
}

if (isAudioTrackSourceBufferSupported()) {
    console.log('AudioTrack.sourceBuffer 支持');
    // 使用AudioTrack.sourceBuffer
} else {
    console.log('AudioTrack.sourceBuffer 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioTrack.sourceBuffer polyfill
if (!audiotrack.sourceBuffer) {
    // 在这里添加polyfill实现
    console.log('加载AudioTrack.sourceBuffer polyfill');
}
```

