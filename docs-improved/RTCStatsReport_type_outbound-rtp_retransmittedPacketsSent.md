# RTCStatsReport.type_outbound-rtp.retransmittedPacketsSent API 兼容性数据

## 基本信息

- **API名称**: `RTCStatsReport.type_outbound-rtp.retransmittedPacketsSent`
- **MDN文档**: [RTCStatsReport.type_outbound-rtp.retransmittedPacketsSent](https://developer.mozilla.org/docs/Web/API/RTCOutboundRtpStreamStats/retransmittedPacketsSent)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-stats/#dom-rtcoutboundrtpstreamstats-retransmittedpacketssent)
- **标签**: `web-features:webrtc-stats`
- **描述**: `retransmittedPacketsSent` in 'outbound-rtp' stats

## 使用示例

### 基本用法

```javascript
// RTCStatsReport.type_outbound-rtp.retransmittedPacketsSent 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCStatsReport.type_outbound-rtp.retransmittedPacketsSent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 80 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 100 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 80

### Firefox

- **支持版本**: 100

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCStatsReport.type_outbound-rtp.retransmittedPacketsSent是否支持
function isRTCStatsReportType_outbound-rtpSupported() {
    return 'type_outbound-rtp' in rtcstatsreport && typeof rtcstatsreport.type_outbound-rtp === 'function';
}

if (isRTCStatsReportType_outbound-rtpSupported()) {
    console.log('RTCStatsReport.type_outbound-rtp.retransmittedPacketsSent 支持');
    // 使用RTCStatsReport.type_outbound-rtp.retransmittedPacketsSent
} else {
    console.log('RTCStatsReport.type_outbound-rtp.retransmittedPacketsSent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCStatsReport.type_outbound-rtp.retransmittedPacketsSent polyfill
if (!rtcstatsreport.type_outbound-rtp) {
    // 在这里添加polyfill实现
    console.log('加载RTCStatsReport.type_outbound-rtp.retransmittedPacketsSent polyfill');
}
```

