# SourceBuffer.videoTracks API 兼容性数据

## 基本信息

- **API名称**: `SourceBuffer.videoTracks`
- **MDN文档**: [SourceBuffer.videoTracks](https://developer.mozilla.org/docs/Web/API/SourceBuffer/videoTracks)
- **规范文档**: [查看规范](https://w3c.github.io/media-source/#dom-sourcebuffer-videotracks)
- **标签**: `web-features:media-source`

## 使用示例

### 基本用法

```javascript
// SourceBuffer.videoTracks 使用示例
// 请查阅MDN文档了解具体用法
console.log('SourceBuffer.videoTracks API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 70 |  |
| Chrome Android | 同主版本 |  |
| Edge | 79 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 | Only works on Windows 8+. |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 13 | Exposed in Mobile Safari on iPad but not on iPhone. |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 70
- **需要标志**: 
  - #enable-experimental-web-platform-features: Enabled

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
- **注意事项**:
  - Only works on Windows 8+.

### Safari

- **支持版本**: 8

### Safari iOS

- **支持版本**: 13
- **部分实现**: 是
- **注意事项**:
  - Exposed in Mobile Safari on iPad but not on iPhone.

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SourceBuffer.videoTracks是否支持
function isSourceBufferVideoTracksSupported() {
    return 'videoTracks' in sourcebuffer && typeof sourcebuffer.videoTracks === 'function';
}

if (isSourceBufferVideoTracksSupported()) {
    console.log('SourceBuffer.videoTracks 支持');
    // 使用SourceBuffer.videoTracks
} else {
    console.log('SourceBuffer.videoTracks 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SourceBuffer.videoTracks polyfill
if (!sourcebuffer.videoTracks) {
    // 在这里添加polyfill实现
    console.log('加载SourceBuffer.videoTracks polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **worker_support**: Available in workers

