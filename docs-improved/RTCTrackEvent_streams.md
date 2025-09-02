# RTCTrackEvent.streams API 兼容性数据

## 基本信息

- **API名称**: `RTCTrackEvent.streams`
- **MDN文档**: [RTCTrackEvent.streams](https://developer.mozilla.org/docs/Web/API/RTCTrackEvent/streams)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtctrackevent-streams)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCTrackEvent.streams 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCTrackEvent.streams API');
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
| Samsung Internet | 同主版本 |  |
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

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCTrackEvent.streams是否支持
function isRTCTrackEventStreamsSupported() {
    return 'streams' in rtctrackevent && typeof rtctrackevent.streams === 'function';
}

if (isRTCTrackEventStreamsSupported()) {
    console.log('RTCTrackEvent.streams 支持');
    // 使用RTCTrackEvent.streams
} else {
    console.log('RTCTrackEvent.streams 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCTrackEvent.streams polyfill
if (!rtctrackevent.streams) {
    // 在这里添加polyfill实现
    console.log('加载RTCTrackEvent.streams polyfill');
}
```

