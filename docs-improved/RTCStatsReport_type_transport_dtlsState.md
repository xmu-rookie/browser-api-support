# RTCStatsReport.type_transport.dtlsState API 兼容性数据

## 基本信息

- **API名称**: `RTCStatsReport.type_transport.dtlsState`
- **MDN文档**: [RTCStatsReport.type_transport.dtlsState](https://developer.mozilla.org/docs/Web/API/RTCTransportStats/dtlsState)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-stats/#dom-rtctransportstats-dtlsstate)
- **标签**: `web-features:webrtc-stats`
- **描述**: `dtlsState` in 'transport' stats

## 使用示例

### 基本用法

```javascript
// RTCStatsReport.type_transport.dtlsState 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCStatsReport.type_transport.dtlsState API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 80 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 不支持

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCStatsReport.type_transport.dtlsState是否支持
function isRTCStatsReportType_transportSupported() {
    return 'type_transport' in rtcstatsreport && typeof rtcstatsreport.type_transport === 'function';
}

if (isRTCStatsReportType_transportSupported()) {
    console.log('RTCStatsReport.type_transport.dtlsState 支持');
    // 使用RTCStatsReport.type_transport.dtlsState
} else {
    console.log('RTCStatsReport.type_transport.dtlsState 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCStatsReport.type_transport.dtlsState polyfill
if (!rtcstatsreport.type_transport) {
    // 在这里添加polyfill实现
    console.log('加载RTCStatsReport.type_transport.dtlsState polyfill');
}
```

