# RemotePlayback.prompt API 兼容性数据

## 基本信息

- **API名称**: `RemotePlayback.prompt`
- **MDN文档**: [RemotePlayback.prompt](https://developer.mozilla.org/docs/Web/API/RemotePlayback/prompt)
- **规范文档**: [查看规范](https://w3c.github.io/remote-playback/#dom-remoteplayback-prompt)
- **标签**: `web-features:remote-playback`

## 使用示例

### 基本用法

```javascript
// RemotePlayback.prompt 使用示例
// 请查阅MDN文档了解具体用法
console.log('RemotePlayback.prompt API');
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
// 检查RemotePlayback.prompt是否支持
function isRemotePlaybackPromptSupported() {
    return 'prompt' in remoteplayback && typeof remoteplayback.prompt === 'function';
}

if (isRemotePlaybackPromptSupported()) {
    console.log('RemotePlayback.prompt 支持');
    // 使用RemotePlayback.prompt
} else {
    console.log('RemotePlayback.prompt 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RemotePlayback.prompt polyfill
if (!remoteplayback.prompt) {
    // 在这里添加polyfill实现
    console.log('加载RemotePlayback.prompt polyfill');
}
```

