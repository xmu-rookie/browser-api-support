# SourceBuffer.videoTracks.worker_support API 兼容性数据

## 基本信息

- **API名称**: `SourceBuffer.videoTracks.worker_support`
- **标签**: `web-features:media-source`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// SourceBuffer.videoTracks.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('SourceBuffer.videoTracks.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 108 | Currently doesn't work, even with the flag set. If invoked from a dedicated worker, Chromium crashes... |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 108
- **需要标志**: 
  - #enable-experimental-web-platform-features: Enabled
- **注意事项**:
  - Currently doesn't work, even with the flag set. If invoked from a dedicated worker, Chromium crashes the renderer to avoid undesirable behavior (see [bug 487288](https://crbug.com/40417861#comment25)).

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SourceBuffer.videoTracks.worker_support是否支持
function isSourceBufferVideoTracksSupported() {
    return 'videoTracks' in sourcebuffer && typeof sourcebuffer.videoTracks === 'function';
}

if (isSourceBufferVideoTracksSupported()) {
    console.log('SourceBuffer.videoTracks.worker_support 支持');
    // 使用SourceBuffer.videoTracks.worker_support
} else {
    console.log('SourceBuffer.videoTracks.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SourceBuffer.videoTracks.worker_support polyfill
if (!sourcebuffer.videoTracks) {
    // 在这里添加polyfill实现
    console.log('加载SourceBuffer.videoTracks.worker_support polyfill');
}
```

