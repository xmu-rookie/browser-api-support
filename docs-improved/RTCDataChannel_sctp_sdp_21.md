# RTCDataChannel.sctp_sdp_21 API 兼容性数据

## 基本信息

- **API名称**: `RTCDataChannel.sctp_sdp_21`
- **标签**: `web-features:webrtc`
- **描述**: Support for sctp-sdp-21 format

## 使用示例

### 基本用法

```javascript
// RTCDataChannel.sctp_sdp_21 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCDataChannel.sctp_sdp_21 API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 58 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 63 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 58

### Firefox

- **支持版本**: 63

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCDataChannel.sctp_sdp_21是否支持
function isRTCDataChannelSctp_sdp_21Supported() {
    return 'sctp_sdp_21' in rtcdatachannel && typeof rtcdatachannel.sctp_sdp_21 === 'function';
}

if (isRTCDataChannelSctp_sdp_21Supported()) {
    console.log('RTCDataChannel.sctp_sdp_21 支持');
    // 使用RTCDataChannel.sctp_sdp_21
} else {
    console.log('RTCDataChannel.sctp_sdp_21 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCDataChannel.sctp_sdp_21 polyfill
if (!rtcdatachannel.sctp_sdp_21) {
    // 在这里添加polyfill实现
    console.log('加载RTCDataChannel.sctp_sdp_21 polyfill');
}
```

