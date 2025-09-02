# RTCDataChannel.message_event API 兼容性数据

## 基本信息

- **API名称**: `RTCDataChannel.message_event`
- **MDN文档**: [RTCDataChannel.message_event](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/message_event)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#event-datachannel-message,https://w3c.github.io/webrtc-pc/#dom-rtcdatachannel-onmessage)
- **标签**: `web-features:webrtc`
- **描述**: `message` event

## 使用示例

### 基本用法

```javascript
// RTCDataChannel.message_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCDataChannel.message_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 24 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 22 |  |
| Firefox Android | 24 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 24

### Firefox

- **支持版本**: 22

### Firefox Android

- **支持版本**: 24

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCDataChannel.message_event是否支持
function isRTCDataChannelMessage_eventSupported() {
    return 'message_event' in rtcdatachannel && typeof rtcdatachannel.message_event === 'function';
}

if (isRTCDataChannelMessage_eventSupported()) {
    console.log('RTCDataChannel.message_event 支持');
    // 使用RTCDataChannel.message_event
} else {
    console.log('RTCDataChannel.message_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCDataChannel.message_event polyfill
if (!rtcdatachannel.message_event) {
    // 在这里添加polyfill实现
    console.log('加载RTCDataChannel.message_event polyfill');
}
```

