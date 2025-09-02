# OfflineAudioContext.complete_event API 兼容性数据

## 基本信息

- **API名称**: `OfflineAudioContext.complete_event`
- **MDN文档**: [OfflineAudioContext.complete_event](https://developer.mozilla.org/docs/Web/API/OfflineAudioContext/complete_event)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#OfflineAudioCompletionEvent,https://webaudio.github.io/web-audio-api/#dom-offlineaudiocontext-oncomplete)
- **标签**: `web-features:offline-audio-context`
- **描述**: `complete` event

## 使用示例

### 基本用法

```javascript
// OfflineAudioContext.complete_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('OfflineAudioContext.complete_event API');
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
// 检查OfflineAudioContext.complete_event是否支持
function isOfflineAudioContextComplete_eventSupported() {
    return 'complete_event' in offlineaudiocontext && typeof offlineaudiocontext.complete_event === 'function';
}

if (isOfflineAudioContextComplete_eventSupported()) {
    console.log('OfflineAudioContext.complete_event 支持');
    // 使用OfflineAudioContext.complete_event
} else {
    console.log('OfflineAudioContext.complete_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// OfflineAudioContext.complete_event polyfill
if (!offlineaudiocontext.complete_event) {
    // 在这里添加polyfill实现
    console.log('加载OfflineAudioContext.complete_event polyfill');
}
```

