# RTCStatsReport.keys API 兼容性数据

## 基本信息

- **API名称**: `RTCStatsReport.keys`
- **MDN文档**: [RTCStatsReport.keys](https://developer.mozilla.org/docs/Web/API/RTCStatsReport/keys)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcstatsreport)
- **标签**: `web-features:webrtc-stats`

## 使用示例

### 基本用法

```javascript
// RTCStatsReport.keys 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCStatsReport.keys API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 58 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 48 |  |
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

- **支持版本**: 48

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCStatsReport.keys是否支持
function isRTCStatsReportKeysSupported() {
    return 'keys' in rtcstatsreport && typeof rtcstatsreport.keys === 'function';
}

if (isRTCStatsReportKeysSupported()) {
    console.log('RTCStatsReport.keys 支持');
    // 使用RTCStatsReport.keys
} else {
    console.log('RTCStatsReport.keys 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCStatsReport.keys polyfill
if (!rtcstatsreport.keys) {
    // 在这里添加polyfill实现
    console.log('加载RTCStatsReport.keys polyfill');
}
```

