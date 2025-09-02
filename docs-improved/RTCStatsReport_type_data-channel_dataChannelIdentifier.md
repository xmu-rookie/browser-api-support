# RTCStatsReport.type_data-channel.dataChannelIdentifier API 兼容性数据

## 基本信息

- **API名称**: `RTCStatsReport.type_data-channel.dataChannelIdentifier`
- **MDN文档**: [RTCStatsReport.type_data-channel.dataChannelIdentifier](https://developer.mozilla.org/docs/Web/API/RTCDataChannelStats/dataChannelIdentifier)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-stats/#dom-rtcdatachannelstats-datachannelidentifier)
- **标签**: `web-features:webrtc-stats`
- **描述**: `dataChannelIdentifier` in 'data-channel' stats

## 使用示例

### 基本用法

```javascript
// RTCStatsReport.type_data-channel.dataChannelIdentifier 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCStatsReport.type_data-channel.dataChannelIdentifier API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 85 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 79 |  |
| Firefox Android | 不支持 |  |
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

- **支持版本**: 85

### Firefox

- **支持版本**: 79

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCStatsReport.type_data-channel.dataChannelIdentifier是否支持
function isRTCStatsReportType_data-channelSupported() {
    return 'type_data-channel' in rtcstatsreport && typeof rtcstatsreport.type_data-channel === 'function';
}

if (isRTCStatsReportType_data-channelSupported()) {
    console.log('RTCStatsReport.type_data-channel.dataChannelIdentifier 支持');
    // 使用RTCStatsReport.type_data-channel.dataChannelIdentifier
} else {
    console.log('RTCStatsReport.type_data-channel.dataChannelIdentifier 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCStatsReport.type_data-channel.dataChannelIdentifier polyfill
if (!rtcstatsreport.type_data-channel) {
    // 在这里添加polyfill实现
    console.log('加载RTCStatsReport.type_data-channel.dataChannelIdentifier polyfill');
}
```

