# RTCStatsReport.type_candidate-pair.timestamp API 兼容性数据

## 基本信息

- **API名称**: `RTCStatsReport.type_candidate-pair.timestamp`
- **MDN文档**: [RTCStatsReport.type_candidate-pair.timestamp](https://developer.mozilla.org/docs/Web/API/RTCIceCandidatePairStats/timestamp)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-stats/#dom-rtcstats-timestamp)
- **标签**: `web-features:webrtc-stats`
- **描述**: `timestamp` in 'candidate-pair' stats

## 使用示例

### 基本用法

```javascript
// RTCStatsReport.type_candidate-pair.timestamp 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCStatsReport.type_candidate-pair.timestamp API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 80 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 72 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 80

### Firefox

- **支持版本**: 72

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCStatsReport.type_candidate-pair.timestamp是否支持
function isRTCStatsReportType_candidate-pairSupported() {
    return 'type_candidate-pair' in rtcstatsreport && typeof rtcstatsreport.type_candidate-pair === 'function';
}

if (isRTCStatsReportType_candidate-pairSupported()) {
    console.log('RTCStatsReport.type_candidate-pair.timestamp 支持');
    // 使用RTCStatsReport.type_candidate-pair.timestamp
} else {
    console.log('RTCStatsReport.type_candidate-pair.timestamp 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCStatsReport.type_candidate-pair.timestamp polyfill
if (!rtcstatsreport.type_candidate-pair) {
    // 在这里添加polyfill实现
    console.log('加载RTCStatsReport.type_candidate-pair.timestamp polyfill');
}
```

