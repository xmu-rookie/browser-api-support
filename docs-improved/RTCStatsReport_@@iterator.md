# RTCStatsReport.@@iterator API 兼容性数据

## 基本信息

- **API名称**: `RTCStatsReport.@@iterator`
- **MDN文档**: [RTCStatsReport.@@iterator](https://developer.mozilla.org/docs/Web/API/RTCStatsReport/Symbol.iterator)
- **标签**: `web-features:webrtc-stats`
- **描述**: [Symbol.iterator]

## 使用示例

### 基本用法

```javascript
// RTCStatsReport.@@iterator 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCStatsReport.@@iterator API');
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
// 检查RTCStatsReport.@@iterator是否支持
function isRTCStatsReport@@iteratorSupported() {
    return '@@iterator' in rtcstatsreport && typeof rtcstatsreport.@@iterator === 'function';
}

if (isRTCStatsReport@@iteratorSupported()) {
    console.log('RTCStatsReport.@@iterator 支持');
    // 使用RTCStatsReport.@@iterator
} else {
    console.log('RTCStatsReport.@@iterator 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCStatsReport.@@iterator polyfill
if (!rtcstatsreport.@@iterator) {
    // 在这里添加polyfill实现
    console.log('加载RTCStatsReport.@@iterator polyfill');
}
```

