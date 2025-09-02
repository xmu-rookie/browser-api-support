# MediaSession.setActionHandler API 兼容性数据

## 基本信息

- **API名称**: `MediaSession.setActionHandler`
- **MDN文档**: [MediaSession.setActionHandler](https://developer.mozilla.org/docs/Web/API/MediaSession/setActionHandler)
- **规范文档**: [查看规范](https://w3c.github.io/mediasession/#dom-mediasession-setactionhandler)
- **标签**: `web-features:media-session`
- **描述**: `setActionHandler()`

## 使用示例

### 基本用法

```javascript
// MediaSession.setActionHandler 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaSession.setActionHandler API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 73 |  |
| Chrome Android | 57 |  |
| Edge | 同主版本 |  |
| Firefox | 82 |  |
| Firefox Android | 82 | Firefox exposes the API, but does not provide a corresponding user-facing media control interface. |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 73

### Chrome Android

- **支持版本**: 57

### Firefox

- **支持版本**: 82

### Firefox Android

- **支持版本**: 82
- **部分实现**: 是
- **注意事项**:
  - Firefox exposes the API, but does not provide a corresponding user-facing media control interface.

### Safari

- **支持版本**: 15

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaSession.setActionHandler是否支持
function isMediaSessionSetActionHandlerSupported() {
    return 'setActionHandler' in mediasession && typeof mediasession.setActionHandler === 'function';
}

if (isMediaSessionSetActionHandlerSupported()) {
    console.log('MediaSession.setActionHandler 支持');
    // 使用MediaSession.setActionHandler
} else {
    console.log('MediaSession.setActionHandler 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaSession.setActionHandler polyfill
if (!mediasession.setActionHandler) {
    // 在这里添加polyfill实现
    console.log('加载MediaSession.setActionHandler polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **hangup_type**: `"hangup"` type
- **nextslide_type**: `"nextslide"` type
- **nexttrack_type**: `"nexttrack"` type
- **pause_type**: `"pause"` type
- **play_type**: `"play"` type
- **previousslide_type**: `"previousslide"` type
- **previoustrack_type**: `"previoustrack"` type
- **seekbackward_type**: `"seekbackward"` type
- **seekforward_type**: `"seekforward"` type
- **seekto_type**: `"seekto"` type
- **skipad_type**: `"skipad"` type
- **stop_type**: `"stop"` type
- **togglecamera_type**: `"togglecamera"` type
- **togglemicrophone_type**: `"togglemicrophone"` type

