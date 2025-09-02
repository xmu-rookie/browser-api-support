# SourceBuffer.audioTracks.worker_support API 兼容性数据

## 基本信息

- **API名称**: `SourceBuffer.audioTracks.worker_support`
- **标签**: `web-features:media-source`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// SourceBuffer.audioTracks.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('SourceBuffer.audioTracks.worker_support API');
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

