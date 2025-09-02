# MediaStreamTrackProcessor.MediaStreamTrackProcessor API 兼容性数据

## 基本信息

- **API名称**: `MediaStreamTrackProcessor.MediaStreamTrackProcessor`
- **MDN文档**: [MediaStreamTrackProcessor.MediaStreamTrackProcessor](https://developer.mozilla.org/docs/Web/API/MediaStreamTrackProcessor/MediaStreamTrackProcessor)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-transform/#dom-mediastreamtrackprocessor-mediastreamtrackprocessor)
- **标签**: `web-features:insertable-streams`
- **描述**: `MediaStreamTrackProcessor()` constructor

## 使用示例

### 基本用法

```javascript
// MediaStreamTrackProcessor.MediaStreamTrackProcessor 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaStreamTrackProcessor.MediaStreamTrackProcessor API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 94 | Exposed on `Window` instead of `DedicatedWorker`. |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 94
- **部分实现**: 是
- **注意事项**:
  - Exposed on `Window` instead of `DedicatedWorker`.

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 18

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaStreamTrackProcessor.MediaStreamTrackProcessor是否支持
function isMediaStreamTrackProcessorMediaStreamTrackProcessorSupported() {
    return 'MediaStreamTrackProcessor' in mediastreamtrackprocessor && typeof mediastreamtrackprocessor.MediaStreamTrackProcessor === 'function';
}

if (isMediaStreamTrackProcessorMediaStreamTrackProcessorSupported()) {
    console.log('MediaStreamTrackProcessor.MediaStreamTrackProcessor 支持');
    // 使用MediaStreamTrackProcessor.MediaStreamTrackProcessor
} else {
    console.log('MediaStreamTrackProcessor.MediaStreamTrackProcessor 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaStreamTrackProcessor.MediaStreamTrackProcessor polyfill
if (!mediastreamtrackprocessor.MediaStreamTrackProcessor) {
    // 在这里添加polyfill实现
    console.log('加载MediaStreamTrackProcessor.MediaStreamTrackProcessor polyfill');
}
```

