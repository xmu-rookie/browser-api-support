# MediaDevices.getDisplayMedia.audio_capture_support API 兼容性数据

## 基本信息

- **API名称**: `MediaDevices.getDisplayMedia.audio_capture_support`
- **MDN文档**: [MediaDevices.getDisplayMedia.audio_capture_support](https://developer.mozilla.org/docs/Web/API/Screen_Capture_API/Using_Screen_Capture#capturing_shared_audio)
- **标签**: `web-features:screen-capture`
- **描述**: Audio capture support

## 使用示例

### 基本用法

```javascript
// MediaDevices.getDisplayMedia.audio_capture_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaDevices.getDisplayMedia.audio_capture_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 74 | On Windows and ChromeOS, the entire system audio can be captured when sharing an entire screen. On L... |
| Chrome Android | 不支持 |  |
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

- **支持版本**: 74
- **注意事项**:
  - On Windows and ChromeOS, the entire system audio can be captured when sharing an entire screen. On Linux and macOS, only the audio of a tab can be captured.

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaDevices.getDisplayMedia.audio_capture_support是否支持
function isMediaDevicesGetDisplayMediaSupported() {
    return 'getDisplayMedia' in mediadevices && typeof mediadevices.getDisplayMedia === 'function';
}

if (isMediaDevicesGetDisplayMediaSupported()) {
    console.log('MediaDevices.getDisplayMedia.audio_capture_support 支持');
    // 使用MediaDevices.getDisplayMedia.audio_capture_support
} else {
    console.log('MediaDevices.getDisplayMedia.audio_capture_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaDevices.getDisplayMedia.audio_capture_support polyfill
if (!mediadevices.getDisplayMedia) {
    // 在这里添加polyfill实现
    console.log('加载MediaDevices.getDisplayMedia.audio_capture_support polyfill');
}
```

