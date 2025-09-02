# RTCStatsReport.type_local-candidate API 兼容性数据

## 基本信息

- **API名称**: `RTCStatsReport.type_local-candidate`
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-stats/#dom-rtcstatstype-local-candidate)
- **标签**: `web-features:webrtc-stats`
- **描述**: `local-candidate` stats

## 使用示例

### 基本用法

```javascript
// RTCStatsReport.type_local-candidate 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCStatsReport.type_local-candidate API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 80 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 27 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 12.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 80

### Firefox

- **支持版本**: 27

### Safari

- **支持版本**: 12.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCStatsReport.type_local-candidate是否支持
function isRTCStatsReportType_local-candidateSupported() {
    return 'type_local-candidate' in rtcstatsreport && typeof rtcstatsreport.type_local-candidate === 'function';
}

if (isRTCStatsReportType_local-candidateSupported()) {
    console.log('RTCStatsReport.type_local-candidate 支持');
    // 使用RTCStatsReport.type_local-candidate
} else {
    console.log('RTCStatsReport.type_local-candidate 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCStatsReport.type_local-candidate polyfill
if (!rtcstatsreport.type_local-candidate) {
    // 在这里添加polyfill实现
    console.log('加载RTCStatsReport.type_local-candidate polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **address**: `address` in 'local-candidate' stats
- **candidateType**: `candidateType` in 'local-candidate' stats
- **foundation**: `foundation` in 'local-candidate' stats
- **id**: `id` in 'local-candidate' stats
- **port**: `port` in 'local-candidate' stats
- **priority**: `priority` in 'local-candidate' stats
- **protocol**: `protocol` in 'local-candidate' stats
- **timestamp**: `timestamp` in 'local-candidate' stats
- **transportId**: `transportId` in 'local-candidate' stats
- **type**: `type` in 'local-candidate' stats
- **usernameFragment**: `usernameFragment` in 'local-candidate' stats

