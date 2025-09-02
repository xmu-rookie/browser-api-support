# RTCDataChannel.protocol API 兼容性数据

## 基本信息

- **API名称**: `RTCDataChannel.protocol`
- **MDN文档**: [RTCDataChannel.protocol](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/protocol)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-datachannel-protocol)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCDataChannel.protocol 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCDataChannel.protocol API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 30 |  |
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

- **支持版本**: 30

### Firefox

- **支持版本**: 22

### Firefox Android

- **支持版本**: 24

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCDataChannel.protocol是否支持
function isRTCDataChannelProtocolSupported() {
    return 'protocol' in rtcdatachannel && typeof rtcdatachannel.protocol === 'function';
}

if (isRTCDataChannelProtocolSupported()) {
    console.log('RTCDataChannel.protocol 支持');
    // 使用RTCDataChannel.protocol
} else {
    console.log('RTCDataChannel.protocol 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCDataChannel.protocol polyfill
if (!rtcdatachannel.protocol) {
    // 在这里添加polyfill实现
    console.log('加载RTCDataChannel.protocol polyfill');
}
```

