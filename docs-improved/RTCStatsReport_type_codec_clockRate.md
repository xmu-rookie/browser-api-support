# RTCStatsReport.type_codec.clockRate API 兼容性数据

## 基本信息

- **API名称**: `RTCStatsReport.type_codec.clockRate`
- **MDN文档**: [RTCStatsReport.type_codec.clockRate](https://developer.mozilla.org/docs/Web/API/RTCCodecStats/clockRate)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-stats/#dom-rtccodecstats-clockrate)
- **标签**: `web-features:webrtc-stats`
- **描述**: `clockRate` in 'codec' stats

## 使用示例

### 基本用法

```javascript
// RTCStatsReport.type_codec.clockRate 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCStatsReport.type_codec.clockRate API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 80 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 98 |  |
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

- **支持版本**: 98

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCStatsReport.type_codec.clockRate是否支持
function isRTCStatsReportType_codecSupported() {
    return 'type_codec' in rtcstatsreport && typeof rtcstatsreport.type_codec === 'function';
}

if (isRTCStatsReportType_codecSupported()) {
    console.log('RTCStatsReport.type_codec.clockRate 支持');
    // 使用RTCStatsReport.type_codec.clockRate
} else {
    console.log('RTCStatsReport.type_codec.clockRate 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCStatsReport.type_codec.clockRate polyfill
if (!rtcstatsreport.type_codec) {
    // 在这里添加polyfill实现
    console.log('加载RTCStatsReport.type_codec.clockRate polyfill');
}
```

