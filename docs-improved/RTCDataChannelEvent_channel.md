# RTCDataChannelEvent.channel API 兼容性数据

## 基本信息

- **API名称**: `RTCDataChannelEvent.channel`
- **MDN文档**: [RTCDataChannelEvent.channel](https://developer.mozilla.org/docs/Web/API/RTCDataChannelEvent/channel)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-datachannelevent-channel)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCDataChannelEvent.channel 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCDataChannelEvent.channel API');
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
| Opera | ≤15 |  |
| Opera Android | ≤14 |  |
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

### Opera

- **支持版本**: ≤15

### Opera Android

- **支持版本**: ≤14

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCDataChannelEvent.channel是否支持
function isRTCDataChannelEventChannelSupported() {
    return 'channel' in rtcdatachannelevent && typeof rtcdatachannelevent.channel === 'function';
}

if (isRTCDataChannelEventChannelSupported()) {
    console.log('RTCDataChannelEvent.channel 支持');
    // 使用RTCDataChannelEvent.channel
} else {
    console.log('RTCDataChannelEvent.channel 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCDataChannelEvent.channel polyfill
if (!rtcdatachannelevent.channel) {
    // 在这里添加polyfill实现
    console.log('加载RTCDataChannelEvent.channel polyfill');
}
```

