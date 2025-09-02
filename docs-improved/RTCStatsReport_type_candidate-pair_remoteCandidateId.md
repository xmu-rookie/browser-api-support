# RTCStatsReport.type_candidate-pair.remoteCandidateId API 兼容性数据

## 基本信息

- **API名称**: `RTCStatsReport.type_candidate-pair.remoteCandidateId`
- **MDN文档**: [RTCStatsReport.type_candidate-pair.remoteCandidateId](https://developer.mozilla.org/docs/Web/API/RTCIceCandidatePairStats/remoteCandidateId)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-stats/#dom-rtcicecandidatepairstats-remotecandidateid)
- **标签**: `web-features:webrtc-stats`
- **描述**: `remoteCandidateId` in 'candidate-pair' stats

## 使用示例

### 基本用法

```javascript
// RTCStatsReport.type_candidate-pair.remoteCandidateId 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCStatsReport.type_candidate-pair.remoteCandidateId API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 58 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 29 |  |
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

- **支持版本**: 58

### Firefox

- **支持版本**: 29

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCStatsReport.type_candidate-pair.remoteCandidateId是否支持
function isRTCStatsReportType_candidate-pairSupported() {
    return 'type_candidate-pair' in rtcstatsreport && typeof rtcstatsreport.type_candidate-pair === 'function';
}

if (isRTCStatsReportType_candidate-pairSupported()) {
    console.log('RTCStatsReport.type_candidate-pair.remoteCandidateId 支持');
    // 使用RTCStatsReport.type_candidate-pair.remoteCandidateId
} else {
    console.log('RTCStatsReport.type_candidate-pair.remoteCandidateId 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCStatsReport.type_candidate-pair.remoteCandidateId polyfill
if (!rtcstatsreport.type_candidate-pair) {
    // 在这里添加polyfill实现
    console.log('加载RTCStatsReport.type_candidate-pair.remoteCandidateId polyfill');
}
```

