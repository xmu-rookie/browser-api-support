# RTCDTMFSender.canInsertDTMF API 兼容性数据

## 基本信息

- **API名称**: `RTCDTMFSender.canInsertDTMF`
- **MDN文档**: [RTCDTMFSender.canInsertDTMF](https://developer.mozilla.org/docs/Web/API/RTCDTMFSender/canInsertDTMF)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcdtmfsender-caninsertdtmf)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCDTMFSender.canInsertDTMF 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCDTMFSender.canInsertDTMF API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 27 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 129 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 27

### Firefox

- **支持版本**: 129

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCDTMFSender.canInsertDTMF是否支持
function isRTCDTMFSenderCanInsertDTMFSupported() {
    return 'canInsertDTMF' in rtcdtmfsender && typeof rtcdtmfsender.canInsertDTMF === 'function';
}

if (isRTCDTMFSenderCanInsertDTMFSupported()) {
    console.log('RTCDTMFSender.canInsertDTMF 支持');
    // 使用RTCDTMFSender.canInsertDTMF
} else {
    console.log('RTCDTMFSender.canInsertDTMF 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCDTMFSender.canInsertDTMF polyfill
if (!rtcdtmfsender.canInsertDTMF) {
    // 在这里添加polyfill实现
    console.log('加载RTCDTMFSender.canInsertDTMF polyfill');
}
```

