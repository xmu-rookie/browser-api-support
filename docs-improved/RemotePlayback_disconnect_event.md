# RemotePlayback.disconnect_event API 兼容性数据

## 基本信息

- **API名称**: `RemotePlayback.disconnect_event`
- **MDN文档**: [RemotePlayback.disconnect_event](https://developer.mozilla.org/docs/Web/API/RemotePlayback/disconnect_event)
- **规范文档**: [查看规范](https://w3c.github.io/remote-playback/#dom-remoteplayback-ondisconnect)
- **标签**: `web-features:remote-playback`
- **描述**: `disconnect` event

## 使用示例

### 基本用法

```javascript
// RemotePlayback.disconnect_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('RemotePlayback.disconnect_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 121 |  |
| Chrome Android | 56 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 121

### Chrome Android

- **支持版本**: 56

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 13.1

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查RemotePlayback.disconnect_event是否支持
function isRemotePlaybackDisconnect_eventSupported() {
    return 'disconnect_event' in remoteplayback && typeof remoteplayback.disconnect_event === 'function';
}

if (isRemotePlaybackDisconnect_eventSupported()) {
    console.log('RemotePlayback.disconnect_event 支持');
    // 使用RemotePlayback.disconnect_event
} else {
    console.log('RemotePlayback.disconnect_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RemotePlayback.disconnect_event polyfill
if (!remoteplayback.disconnect_event) {
    // 在这里添加polyfill实现
    console.log('加载RemotePlayback.disconnect_event polyfill');
}
```

