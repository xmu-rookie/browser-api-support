# OfflineAudioContext.suspend API 兼容性数据

## 基本信息

- **API名称**: `OfflineAudioContext.suspend`
- **MDN文档**: [OfflineAudioContext.suspend](https://developer.mozilla.org/docs/Web/API/OfflineAudioContext/suspend)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-offlineaudiocontext-suspend)
- **标签**: `web-features:offline-audio-context`

## 使用示例

### 基本用法

```javascript
// OfflineAudioContext.suspend 使用示例
// 请查阅MDN文档了解具体用法
console.log('OfflineAudioContext.suspend API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 41 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 不支持

### Safari

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查OfflineAudioContext.suspend是否支持
function isOfflineAudioContextSuspendSupported() {
    return 'suspend' in offlineaudiocontext && typeof offlineaudiocontext.suspend === 'function';
}

if (isOfflineAudioContextSuspendSupported()) {
    console.log('OfflineAudioContext.suspend 支持');
    // 使用OfflineAudioContext.suspend
} else {
    console.log('OfflineAudioContext.suspend 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// OfflineAudioContext.suspend polyfill
if (!offlineaudiocontext.suspend) {
    // 在这里添加polyfill实现
    console.log('加载OfflineAudioContext.suspend polyfill');
}
```

