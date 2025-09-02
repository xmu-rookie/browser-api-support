# RTCStatsReport.type_media-source API 兼容性数据

## 基本信息

- **API名称**: `RTCStatsReport.type_media-source`
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-stats/#dom-rtcstatstype-media-source)
- **标签**: `web-features:webrtc-stats`
- **描述**: `media-source` stats

## 使用示例

### 基本用法

```javascript
// RTCStatsReport.type_media-source 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCStatsReport.type_media-source API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 80 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 113 |  |
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

- **支持版本**: 113

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCStatsReport.type_media-source是否支持
function isRTCStatsReportType_media-sourceSupported() {
    return 'type_media-source' in rtcstatsreport && typeof rtcstatsreport.type_media-source === 'function';
}

if (isRTCStatsReportType_media-sourceSupported()) {
    console.log('RTCStatsReport.type_media-source 支持');
    // 使用RTCStatsReport.type_media-source
} else {
    console.log('RTCStatsReport.type_media-source 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCStatsReport.type_media-source polyfill
if (!rtcstatsreport.type_media-source) {
    // 在这里添加polyfill实现
    console.log('加载RTCStatsReport.type_media-source polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **audioLevel**: `audioLevel` in 'media-source' stats
- **frames**: `frames` in 'media-source' stats for video
- **framesPerSecond**: `framesPerSecond` in 'media-source' stats for video
- **height**: `height` in 'media-source' stats for video
- **id**: `id` in 'media-source' stats
- **kind**: `kind` in 'media-source' stats
- **timestamp**: `timestamp` in 'media-source' stats
- **totalAudioEnergy**: `totalAudioEnergy` in 'media-source' stats
- **totalSamplesDuration**: `totalSamplesDuration` in 'media-source' stats
- **trackIdentifier**: `trackIdentifier` in 'media-source' stats
- **type**: `type` in 'media-source' stats
- **width**: `width` in 'media-source' stats for video

