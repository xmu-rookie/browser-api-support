# MediaDevices.getDisplayMedia API 兼容性数据

## 基本信息

- **API名称**: `MediaDevices.getDisplayMedia`
- **MDN文档**: [MediaDevices.getDisplayMedia](https://developer.mozilla.org/docs/Web/API/MediaDevices/getDisplayMedia)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-screen-share/#dom-mediadevices-getdisplaymedia)
- **标签**: `web-features:screen-capture`
- **描述**: `getDisplayMedia()`

## 使用示例

### 基本用法

```javascript
// MediaDevices.getDisplayMedia 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaDevices.getDisplayMedia API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 72 |  |
| Chrome Android | 不支持 | From Chrome Android 72 to 88, this method was exposed, but always failed with `NotAllowedError`. See... |
| Edge | 79 |  |
| Firefox | 66 |  |
| Firefox Android | 不支持 | From Firefox Android 66 to 79, this method was exposed, but always failed with `NotAllowedError`. |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13 |  |
| Safari iOS | 不支持 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 72

### Chrome Android

- **支持版本**: 不支持
- **注意事项**:
  - From Chrome Android 72 to 88, this method was exposed, but always failed with `NotAllowedError`. See [bug 40418135](https://crbug.com/40418135).

### Edge

- **支持版本**: 79
- **支持版本**: 17
- **移除版本**: 79
- **部分实现**: 是
- **注意事项**:
  - Available as a member of `Navigator` instead of `MediaDevices`.

### Firefox

- **支持版本**: 66
- **支持版本**: 33
- **移除版本**: 66
- **注意事项**:
  - Since Firefox 33 you can capture screen data using [`getUserMedia()`](https://developer.mozilla.org/docs/Web/API/MediaDevices/getUserMedia), with a `video` constraint called `mediaSource`. Before 52 it relied on a client-configurable list of allowed sites.

### Firefox Android

- **支持版本**: 不支持
- **注意事项**:
  - From Firefox Android 66 to 79, this method was exposed, but always failed with `NotAllowedError`.

### Safari

- **支持版本**: 13

### Safari iOS

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaDevices.getDisplayMedia是否支持
function isMediaDevicesGetDisplayMediaSupported() {
    return 'getDisplayMedia' in mediadevices && typeof mediadevices.getDisplayMedia === 'function';
}

if (isMediaDevicesGetDisplayMediaSupported()) {
    console.log('MediaDevices.getDisplayMedia 支持');
    // 使用MediaDevices.getDisplayMedia
} else {
    console.log('MediaDevices.getDisplayMedia 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaDevices.getDisplayMedia polyfill
if (!mediadevices.getDisplayMedia) {
    // 在这里添加polyfill实现
    console.log('加载MediaDevices.getDisplayMedia polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **audio_capture_support**: Audio capture support
- **controller_option**: `controller` option
- **monitorTypeSurfaces_option**: `monitorTypeSurfaces` option
- **preferCurrentTab_option**: `preferCurrentTab` option
- **selfBrowserSurface_option**: `selfBrowserSurface` option
- **surfaceSwitching_option**: `surfaceSwitching` option
- **systemAudio_option**: `systemAudio` option

