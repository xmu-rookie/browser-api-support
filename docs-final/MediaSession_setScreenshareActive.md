# MediaSession.setScreenshareActive API 兼容性数据

## 基本信息

- **API名称**: `MediaSession.setScreenshareActive`
- **MDN文档**: [MediaSession.setScreenshareActive](https://developer.mozilla.org/docs/Web/API/MediaSession/setScreenshareActive)
- **规范文档**: [查看规范](https://w3c.github.io/mediasession/#dom-mediasession-setscreenshareactive)
- **标签**: `web-features:media-session`

## 使用示例

### 基本用法

```javascript
// 使用Web Share API
navigator.share({
    title: '分享标题',
    text: '分享内容',
    url: 'https://example.com'
}).then(() => {
    console.log('分享成功');
}).catch(err => {
    console.error('分享失败:', err);
});
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 18.4

