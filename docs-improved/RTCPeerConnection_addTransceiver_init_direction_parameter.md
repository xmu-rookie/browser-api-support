# RTCPeerConnection.addTransceiver.init_direction_parameter API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.addTransceiver.init_direction_parameter`
- **标签**: `web-features:webrtc`
- **描述**: `init.direction` parameter

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.addTransceiver.init_direction_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.addTransceiver.init_direction_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 59 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 69

### Firefox

- **支持版本**: 59

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection.addTransceiver.init_direction_parameter是否支持
function isRTCPeerConnectionAddTransceiverSupported() {
    return 'addTransceiver' in rtcpeerconnection && typeof rtcpeerconnection.addTransceiver === 'function';
}

if (isRTCPeerConnectionAddTransceiverSupported()) {
    console.log('RTCPeerConnection.addTransceiver.init_direction_parameter 支持');
    // 使用RTCPeerConnection.addTransceiver.init_direction_parameter
} else {
    console.log('RTCPeerConnection.addTransceiver.init_direction_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.addTransceiver.init_direction_parameter polyfill
if (!rtcpeerconnection.addTransceiver) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.addTransceiver.init_direction_parameter polyfill');
}
```

