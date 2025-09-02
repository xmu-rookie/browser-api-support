# OfflineAudioContext.resume API 兼容性数据

## 基本信息

- **API名称**: `OfflineAudioContext.resume`
- **MDN文档**: [OfflineAudioContext.resume](https://developer.mozilla.org/docs/Web/API/OfflineAudioContext/resume)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-offlineaudiocontext-resume)
- **标签**: `web-features:offline-audio-context`

## 使用示例

### 基本用法

```javascript
// OfflineAudioContext.resume 使用示例
// 请查阅MDN文档了解具体用法
console.log('OfflineAudioContext.resume API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 41 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 40 | The method exists but always rejects with `NotSupportedError`. See [bug 1265406](https://bugzil.la/1... |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 9 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 41

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 40
- **部分实现**: 是
- **注意事项**:
  - The method exists but always rejects with `NotSupportedError`. See [bug 1265406](https://bugzil.la/1265406).

### Safari

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查OfflineAudioContext.resume是否支持
function isOfflineAudioContextResumeSupported() {
    return 'resume' in offlineaudiocontext && typeof offlineaudiocontext.resume === 'function';
}

if (isOfflineAudioContextResumeSupported()) {
    console.log('OfflineAudioContext.resume 支持');
    // 使用OfflineAudioContext.resume
} else {
    console.log('OfflineAudioContext.resume 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// OfflineAudioContext.resume polyfill
if (!offlineaudiocontext.resume) {
    // 在这里添加polyfill实现
    console.log('加载OfflineAudioContext.resume polyfill');
}
```

