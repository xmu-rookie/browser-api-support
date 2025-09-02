# RTCStatsReport.type_outbound-rtp.nackCount API 兼容性数据

## 基本信息

- **API名称**: `RTCStatsReport.type_outbound-rtp.nackCount`
- **MDN文档**: [RTCStatsReport.type_outbound-rtp.nackCount](https://developer.mozilla.org/docs/Web/API/RTCOutboundRtpStreamStats/nackCount)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-stats/#dom-rtcoutboundrtpstreamstats-nackcount)
- **标签**: `web-features:webrtc-stats`
- **描述**: `nackCount` in 'outbound-rtp' stats

## 使用示例

### 基本用法

```javascript
// RTCStatsReport.type_outbound-rtp.nackCount 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCStatsReport.type_outbound-rtp.nackCount API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 93 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 55 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 93

### Firefox

- **支持版本**: 55

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCStatsReport.type_outbound-rtp.nackCount是否支持
function isRTCStatsReportType_outbound-rtpSupported() {
    return 'type_outbound-rtp' in rtcstatsreport && typeof rtcstatsreport.type_outbound-rtp === 'function';
}

if (isRTCStatsReportType_outbound-rtpSupported()) {
    console.log('RTCStatsReport.type_outbound-rtp.nackCount 支持');
    // 使用RTCStatsReport.type_outbound-rtp.nackCount
} else {
    console.log('RTCStatsReport.type_outbound-rtp.nackCount 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCStatsReport.type_outbound-rtp.nackCount polyfill
if (!rtcstatsreport.type_outbound-rtp) {
    // 在这里添加polyfill实现
    console.log('加载RTCStatsReport.type_outbound-rtp.nackCount polyfill');
}
```

