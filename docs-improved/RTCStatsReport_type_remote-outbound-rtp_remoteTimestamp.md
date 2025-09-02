# RTCStatsReport.type_remote-outbound-rtp.remoteTimestamp API 兼容性数据

## 基本信息

- **API名称**: `RTCStatsReport.type_remote-outbound-rtp.remoteTimestamp`
- **MDN文档**: [RTCStatsReport.type_remote-outbound-rtp.remoteTimestamp](https://developer.mozilla.org/docs/Web/API/RTCRemoteOutboundRtpStreamStats/remoteTimestamp)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-stats/#dom-rtcremoteoutboundrtpstreamstats-remotetimestamp)
- **标签**: `web-features:webrtc-stats`
- **描述**: `remoteTimestamp` in 'remote-outbound-rtp' stats

## 使用示例

### 基本用法

```javascript
// RTCStatsReport.type_remote-outbound-rtp.remoteTimestamp 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCStatsReport.type_remote-outbound-rtp.remoteTimestamp API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 91 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 79 |  |
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

- **支持版本**: 91

### Firefox

- **支持版本**: 79

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCStatsReport.type_remote-outbound-rtp.remoteTimestamp是否支持
function isRTCStatsReportType_remote-outbound-rtpSupported() {
    return 'type_remote-outbound-rtp' in rtcstatsreport && typeof rtcstatsreport.type_remote-outbound-rtp === 'function';
}

if (isRTCStatsReportType_remote-outbound-rtpSupported()) {
    console.log('RTCStatsReport.type_remote-outbound-rtp.remoteTimestamp 支持');
    // 使用RTCStatsReport.type_remote-outbound-rtp.remoteTimestamp
} else {
    console.log('RTCStatsReport.type_remote-outbound-rtp.remoteTimestamp 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCStatsReport.type_remote-outbound-rtp.remoteTimestamp polyfill
if (!rtcstatsreport.type_remote-outbound-rtp) {
    // 在这里添加polyfill实现
    console.log('加载RTCStatsReport.type_remote-outbound-rtp.remoteTimestamp polyfill');
}
```

