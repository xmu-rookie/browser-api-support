# PerformanceResourceTiming.firstInterimResponseStart API 兼容性数据

## 基本信息

- **API名称**: `PerformanceResourceTiming.firstInterimResponseStart`
- **MDN文档**: [PerformanceResourceTiming.firstInterimResponseStart](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart)
- **规范文档**: [查看规范](https://w3c.github.io/resource-timing/#dom-performanceresourcetiming-firstinterimresponsestart)
- **标签**: `web-features:resource-timing`

## 使用示例

### 基本用法

```javascript
// PerformanceResourceTiming.firstInterimResponseStart 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceResourceTiming.firstInterimResponseStart API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 115 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
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

- **支持版本**: 115

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceResourceTiming.firstInterimResponseStart是否支持
function isPerformanceResourceTimingFirstInterimResponseStartSupported() {
    return 'firstInterimResponseStart' in performanceresourcetiming && typeof performanceresourcetiming.firstInterimResponseStart === 'function';
}

if (isPerformanceResourceTimingFirstInterimResponseStartSupported()) {
    console.log('PerformanceResourceTiming.firstInterimResponseStart 支持');
    // 使用PerformanceResourceTiming.firstInterimResponseStart
} else {
    console.log('PerformanceResourceTiming.firstInterimResponseStart 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceResourceTiming.firstInterimResponseStart polyfill
if (!performanceresourcetiming.firstInterimResponseStart) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceResourceTiming.firstInterimResponseStart polyfill');
}
```

