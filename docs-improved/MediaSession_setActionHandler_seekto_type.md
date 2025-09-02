# MediaSession.setActionHandler.seekto_type API 兼容性数据

## 基本信息

- **API名称**: `MediaSession.setActionHandler.seekto_type`
- **标签**: `web-features:media-session`
- **描述**: `"seekto"` type

## 使用示例

### 基本用法

```javascript
// MediaSession.setActionHandler.seekto_type 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaSession.setActionHandler.seekto_type API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 78 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 82 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 78

### Firefox

- **支持版本**: 82

### Safari

- **支持版本**: 15

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaSession.setActionHandler.seekto_type是否支持
function isMediaSessionSetActionHandlerSupported() {
    return 'setActionHandler' in mediasession && typeof mediasession.setActionHandler === 'function';
}

if (isMediaSessionSetActionHandlerSupported()) {
    console.log('MediaSession.setActionHandler.seekto_type 支持');
    // 使用MediaSession.setActionHandler.seekto_type
} else {
    console.log('MediaSession.setActionHandler.seekto_type 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaSession.setActionHandler.seekto_type polyfill
if (!mediasession.setActionHandler) {
    // 在这里添加polyfill实现
    console.log('加载MediaSession.setActionHandler.seekto_type polyfill');
}
```

