# RTCDtlsTransport.statechange_event API 兼容性数据

## 基本信息

- **API名称**: `RTCDtlsTransport.statechange_event`
- **标签**: `web-features:webrtc`
- **描述**: `statechange` event

## 使用示例

### 基本用法

```javascript
// RTCDtlsTransport.statechange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCDtlsTransport.statechange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 72 |  |
| Chrome Android | 同主版本 |  |
| Edge | 79 |  |
| Firefox | 82 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 50 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 72

### Edge

- **支持版本**: 79
- **支持版本**: 12
- **移除版本**: 79

### Firefox

- **支持版本**: 82

### Opera Android

- **支持版本**: 50

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCDtlsTransport.statechange_event是否支持
function isRTCDtlsTransportStatechange_eventSupported() {
    return 'statechange_event' in rtcdtlstransport && typeof rtcdtlstransport.statechange_event === 'function';
}

if (isRTCDtlsTransportStatechange_eventSupported()) {
    console.log('RTCDtlsTransport.statechange_event 支持');
    // 使用RTCDtlsTransport.statechange_event
} else {
    console.log('RTCDtlsTransport.statechange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCDtlsTransport.statechange_event polyfill
if (!rtcdtlstransport.statechange_event) {
    // 在这里添加polyfill实现
    console.log('加载RTCDtlsTransport.statechange_event polyfill');
}
```

