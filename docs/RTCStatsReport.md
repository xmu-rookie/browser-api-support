# RTCStatsReport API 兼容性数据

## 基本信息

- **API名称**: `RTCStatsReport`
- **MDN文档**: [RTCStatsReport](https://developer.mozilla.org/docs/Web/API/RTCStatsReport)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#rtcstatsreport-object)
- **标签**: `web-features:webrtc-stats`

## 使用示例

### 基本用法

```javascript
// RTCStatsReport 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCStatsReport API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 58 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 27 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
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

- **支持版本**: 27

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCStatsReport是否支持
function isRTCStatsReportSupported() {
    return 'RTCStatsReport' in window || typeof RTCStatsReport !== 'undefined';
}

if (isRTCStatsReportSupported()) {
    console.log('RTCStatsReport 支持');
    // 使用RTCStatsReport
} else {
    console.log('RTCStatsReport 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCStatsReport polyfill
if (!window.RTCStatsReport) {
    // 在这里添加polyfill实现
    console.log('加载RTCStatsReport polyfill');
}
```

