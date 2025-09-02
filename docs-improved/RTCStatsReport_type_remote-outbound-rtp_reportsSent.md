# RTCStatsReport.type_remote-outbound-rtp.reportsSent API 兼容性数据

## 基本信息

- **API名称**: `RTCStatsReport.type_remote-outbound-rtp.reportsSent`
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-stats/#dom-rtcremoteoutboundrtpstreamstats-reportssent)
- **标签**: `web-features:webrtc-stats`
- **描述**: `reportsSent` in 'remote-outbound-rtp' stats

## 使用示例

### 基本用法

```javascript
// RTCStatsReport.type_remote-outbound-rtp.reportsSent 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCStatsReport.type_remote-outbound-rtp.reportsSent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 91 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCStatsReport.type_remote-outbound-rtp.reportsSent是否支持
function isRTCStatsReportType_remote-outbound-rtpSupported() {
    return 'type_remote-outbound-rtp' in rtcstatsreport && typeof rtcstatsreport.type_remote-outbound-rtp === 'function';
}

if (isRTCStatsReportType_remote-outbound-rtpSupported()) {
    console.log('RTCStatsReport.type_remote-outbound-rtp.reportsSent 支持');
    // 使用RTCStatsReport.type_remote-outbound-rtp.reportsSent
} else {
    console.log('RTCStatsReport.type_remote-outbound-rtp.reportsSent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCStatsReport.type_remote-outbound-rtp.reportsSent polyfill
if (!rtcstatsreport.type_remote-outbound-rtp) {
    // 在这里添加polyfill实现
    console.log('加载RTCStatsReport.type_remote-outbound-rtp.reportsSent polyfill');
}
```

