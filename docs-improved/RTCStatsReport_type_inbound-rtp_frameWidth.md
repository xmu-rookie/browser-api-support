# RTCStatsReport.type_inbound-rtp.frameWidth API 兼容性数据

## 基本信息

- **API名称**: `RTCStatsReport.type_inbound-rtp.frameWidth`
- **MDN文档**: [RTCStatsReport.type_inbound-rtp.frameWidth](https://developer.mozilla.org/docs/Web/API/RTCInboundRtpStreamStats/frameWidth)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-stats/#dom-rtcinboundrtpstreamstats-framewidth)
- **标签**: `web-features:webrtc-stats`
- **描述**: `frameWidth` in 'inbound-rtp' stats

## 使用示例

### 基本用法

```javascript
// RTCStatsReport.type_inbound-rtp.frameWidth 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCStatsReport.type_inbound-rtp.frameWidth API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 86 |  |
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

- **支持版本**: 86

### Firefox

- **支持版本**: 101

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCStatsReport.type_inbound-rtp.frameWidth是否支持
function isRTCStatsReportType_inbound-rtpSupported() {
    return 'type_inbound-rtp' in rtcstatsreport && typeof rtcstatsreport.type_inbound-rtp === 'function';
}

if (isRTCStatsReportType_inbound-rtpSupported()) {
    console.log('RTCStatsReport.type_inbound-rtp.frameWidth 支持');
    // 使用RTCStatsReport.type_inbound-rtp.frameWidth
} else {
    console.log('RTCStatsReport.type_inbound-rtp.frameWidth 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCStatsReport.type_inbound-rtp.frameWidth polyfill
if (!rtcstatsreport.type_inbound-rtp) {
    // 在这里添加polyfill实现
    console.log('加载RTCStatsReport.type_inbound-rtp.frameWidth polyfill');
}
```

