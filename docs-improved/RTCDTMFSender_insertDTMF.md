# RTCDTMFSender.insertDTMF API 兼容性数据

## 基本信息

- **API名称**: `RTCDTMFSender.insertDTMF`
- **MDN文档**: [RTCDTMFSender.insertDTMF](https://developer.mozilla.org/docs/Web/API/RTCDTMFSender/insertDTMF)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-RTCDTMFSender-insertDTMF)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCDTMFSender.insertDTMF 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCDTMFSender.insertDTMF API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 27 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 52 |  |
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

- **支持版本**: 52

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCDTMFSender.insertDTMF是否支持
function isRTCDTMFSenderInsertDTMFSupported() {
    return 'insertDTMF' in rtcdtmfsender && typeof rtcdtmfsender.insertDTMF === 'function';
}

if (isRTCDTMFSenderInsertDTMFSupported()) {
    console.log('RTCDTMFSender.insertDTMF 支持');
    // 使用RTCDTMFSender.insertDTMF
} else {
    console.log('RTCDTMFSender.insertDTMF 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCDTMFSender.insertDTMF polyfill
if (!rtcdtmfsender.insertDTMF) {
    // 在这里添加polyfill实现
    console.log('加载RTCDTMFSender.insertDTMF polyfill');
}
```

