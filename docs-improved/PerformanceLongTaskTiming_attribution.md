# PerformanceLongTaskTiming.attribution API 兼容性数据

## 基本信息

- **API名称**: `PerformanceLongTaskTiming.attribution`
- **MDN文档**: [PerformanceLongTaskTiming.attribution](https://developer.mozilla.org/docs/Web/API/PerformanceLongTaskTiming/attribution)
- **规范文档**: [查看规范](https://w3c.github.io/longtasks/#dom-performancelongtasktiming-attribution)
- **标签**: `web-features:longtasks`

## 使用示例

### 基本用法

```javascript
// PerformanceLongTaskTiming.attribution 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceLongTaskTiming.attribution API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 58 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 58

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceLongTaskTiming.attribution是否支持
function isPerformanceLongTaskTimingAttributionSupported() {
    return 'attribution' in performancelongtasktiming && typeof performancelongtasktiming.attribution === 'function';
}

if (isPerformanceLongTaskTimingAttributionSupported()) {
    console.log('PerformanceLongTaskTiming.attribution 支持');
    // 使用PerformanceLongTaskTiming.attribution
} else {
    console.log('PerformanceLongTaskTiming.attribution 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceLongTaskTiming.attribution polyfill
if (!performancelongtasktiming.attribution) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceLongTaskTiming.attribution polyfill');
}
```

