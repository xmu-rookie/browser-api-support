# RTCStatsReport.type_candidate-pair.packetsReceived API 兼容性数据

## 基本信息

- **API名称**: `RTCStatsReport.type_candidate-pair.packetsReceived`
- **MDN文档**: [RTCStatsReport.type_candidate-pair.packetsReceived](https://developer.mozilla.org/docs/Web/API/RTCIceCandidatePairStats/packetsReceived)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-stats/#dom-rtcicecandidatepairstats-packetsreceived)
- **标签**: `web-features:webrtc-stats`
- **描述**: `packetsReceived` in 'candidate-pair' stats

## 使用示例

### 基本用法

```javascript
// RTCStatsReport.type_candidate-pair.packetsReceived 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCStatsReport.type_candidate-pair.packetsReceived API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 96 |  |
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

- **支持版本**: 96

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCStatsReport.type_candidate-pair.packetsReceived是否支持
function isRTCStatsReportType_candidate-pairSupported() {
    return 'type_candidate-pair' in rtcstatsreport && typeof rtcstatsreport.type_candidate-pair === 'function';
}

if (isRTCStatsReportType_candidate-pairSupported()) {
    console.log('RTCStatsReport.type_candidate-pair.packetsReceived 支持');
    // 使用RTCStatsReport.type_candidate-pair.packetsReceived
} else {
    console.log('RTCStatsReport.type_candidate-pair.packetsReceived 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCStatsReport.type_candidate-pair.packetsReceived polyfill
if (!rtcstatsreport.type_candidate-pair) {
    // 在这里添加polyfill实现
    console.log('加载RTCStatsReport.type_candidate-pair.packetsReceived polyfill');
}
```

