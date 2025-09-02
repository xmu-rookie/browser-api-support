# RTCStatsReport.type_outbound-rtp.frameHeight API 兼容性数据

## 基本信息

- **API名称**: `RTCStatsReport.type_outbound-rtp.frameHeight`
- **MDN文档**: [RTCStatsReport.type_outbound-rtp.frameHeight](https://developer.mozilla.org/docs/Web/API/RTCOutboundRtpStreamStats/frameHeight)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-stats/#dom-rtcoutboundrtpstreamstats-frameheight)
- **标签**: `web-features:webrtc-stats`
- **描述**: `frameHeight` in 'outbound-rtp' stats

## 使用示例

### 基本用法

```javascript
// RTCStatsReport.type_outbound-rtp.frameHeight 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCStatsReport.type_outbound-rtp.frameHeight API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 84 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 101 |  |
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

- **支持版本**: 84

### Firefox

- **支持版本**: 101

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCStatsReport.type_outbound-rtp.frameHeight是否支持
function isRTCStatsReportType_outbound-rtpSupported() {
    return 'type_outbound-rtp' in rtcstatsreport && typeof rtcstatsreport.type_outbound-rtp === 'function';
}

if (isRTCStatsReportType_outbound-rtpSupported()) {
    console.log('RTCStatsReport.type_outbound-rtp.frameHeight 支持');
    // 使用RTCStatsReport.type_outbound-rtp.frameHeight
} else {
    console.log('RTCStatsReport.type_outbound-rtp.frameHeight 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCStatsReport.type_outbound-rtp.frameHeight polyfill
if (!rtcstatsreport.type_outbound-rtp) {
    // 在这里添加polyfill实现
    console.log('加载RTCStatsReport.type_outbound-rtp.frameHeight polyfill');
}
```

