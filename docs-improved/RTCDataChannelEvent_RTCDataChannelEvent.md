# RTCDataChannelEvent.RTCDataChannelEvent API 兼容性数据

## 基本信息

- **API名称**: `RTCDataChannelEvent.RTCDataChannelEvent`
- **MDN文档**: [RTCDataChannelEvent.RTCDataChannelEvent](https://developer.mozilla.org/docs/Web/API/RTCDataChannelEvent/RTCDataChannelEvent)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcdatachannelevent-constructor)
- **标签**: `web-features:webrtc`
- **描述**: `RTCDataChannelEvent()` constructor

## 使用示例

### 基本用法

```javascript
// RTCDataChannelEvent.RTCDataChannelEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCDataChannelEvent.RTCDataChannelEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 56 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 22 |  |
| Firefox Android | 24 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 7.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 56

### Firefox

- **支持版本**: 22

### Firefox Android

- **支持版本**: 24

### Safari

- **支持版本**: 11

### Samsung Internet

- **支持版本**: 7.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCDataChannelEvent.RTCDataChannelEvent是否支持
function isRTCDataChannelEventRTCDataChannelEventSupported() {
    return 'RTCDataChannelEvent' in rtcdatachannelevent && typeof rtcdatachannelevent.RTCDataChannelEvent === 'function';
}

if (isRTCDataChannelEventRTCDataChannelEventSupported()) {
    console.log('RTCDataChannelEvent.RTCDataChannelEvent 支持');
    // 使用RTCDataChannelEvent.RTCDataChannelEvent
} else {
    console.log('RTCDataChannelEvent.RTCDataChannelEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCDataChannelEvent.RTCDataChannelEvent polyfill
if (!rtcdatachannelevent.RTCDataChannelEvent) {
    // 在这里添加polyfill实现
    console.log('加载RTCDataChannelEvent.RTCDataChannelEvent polyfill');
}
```

