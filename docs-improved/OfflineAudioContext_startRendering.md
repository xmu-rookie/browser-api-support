# OfflineAudioContext.startRendering API 兼容性数据

## 基本信息

- **API名称**: `OfflineAudioContext.startRendering`
- **MDN文档**: [OfflineAudioContext.startRendering](https://developer.mozilla.org/docs/Web/API/OfflineAudioContext/startRendering)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-offlineaudiocontext-startrendering)
- **标签**: `web-features:offline-audio-context`

## 使用示例

### 基本用法

```javascript
// OfflineAudioContext.startRendering 使用示例
// 请查阅MDN文档了解具体用法
console.log('OfflineAudioContext.startRendering API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 25 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 25 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 25

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 25

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查OfflineAudioContext.startRendering是否支持
function isOfflineAudioContextStartRenderingSupported() {
    return 'startRendering' in offlineaudiocontext && typeof offlineaudiocontext.startRendering === 'function';
}

if (isOfflineAudioContextStartRenderingSupported()) {
    console.log('OfflineAudioContext.startRendering 支持');
    // 使用OfflineAudioContext.startRendering
} else {
    console.log('OfflineAudioContext.startRendering 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// OfflineAudioContext.startRendering polyfill
if (!offlineaudiocontext.startRendering) {
    // 在这里添加polyfill实现
    console.log('加载OfflineAudioContext.startRendering polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **returns_promise**: Returns a `Promise`

