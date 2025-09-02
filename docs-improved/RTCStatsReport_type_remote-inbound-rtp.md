# RTCStatsReport.type_remote-inbound-rtp API 兼容性数据

## 基本信息

- **API名称**: `RTCStatsReport.type_remote-inbound-rtp`
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-stats/#dom-rtcstatstype-remote-inbound-rtp)
- **标签**: `web-features:webrtc-stats`
- **描述**: `remote-inbound-rtp` stats

## 使用示例

### 基本用法

```javascript
// RTCStatsReport.type_remote-inbound-rtp 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCStatsReport.type_remote-inbound-rtp API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 80 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 27 |  |
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

- **支持版本**: 80

### Firefox

- **支持版本**: 27

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCStatsReport.type_remote-inbound-rtp是否支持
function isRTCStatsReportType_remote-inbound-rtpSupported() {
    return 'type_remote-inbound-rtp' in rtcstatsreport && typeof rtcstatsreport.type_remote-inbound-rtp === 'function';
}

if (isRTCStatsReportType_remote-inbound-rtpSupported()) {
    console.log('RTCStatsReport.type_remote-inbound-rtp 支持');
    // 使用RTCStatsReport.type_remote-inbound-rtp
} else {
    console.log('RTCStatsReport.type_remote-inbound-rtp 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCStatsReport.type_remote-inbound-rtp polyfill
if (!rtcstatsreport.type_remote-inbound-rtp) {
    // 在这里添加polyfill实现
    console.log('加载RTCStatsReport.type_remote-inbound-rtp polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **codecId**: `codecId` in 'remote-inbound-rtp' stats
- **fractionLost**: `fractionLost` in 'remote-inbound-rtp' stats
- **id**: `id` in 'remote-inbound-rtp' stats
- **jitter**: `jitter` in 'remote-inbound-rtp' stats
- **kind**: `kind` in 'remote-inbound-rtp' stats
- **localId**: `localId` in 'remote-inbound-rtp' stats
- **packetsLost**: `packetsLost` in 'remote-inbound-rtp' stats
- **packetsReceived**: `packetsReceived` in 'remote-inbound-rtp' stats
- **roundTripTime**: `roundTripTime` in 'remote-inbound-rtp' stats
- **roundTripTimeMeasurements**: `roundTripTimeMeasurements` in 'remote-inbound-rtp' stats
- **ssrc**: `ssrc` in 'remote-inbound-rtp' stats
- **timestamp**: `timestamp` in 'remote-inbound-rtp' stats
- **totalRoundTripTime**: `totalRoundTripTime` in 'remote-inbound-rtp' stats
- **transportId**: `transportId` in 'remote-inbound-rtp' stats
- **type**: `type` in 'remote-inbound-rtp' stats

