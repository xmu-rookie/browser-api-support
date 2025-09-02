# PerformanceResourceTiming.serverTiming API 兼容性数据

## 基本信息

- **API名称**: `PerformanceResourceTiming.serverTiming`
- **MDN文档**: [PerformanceResourceTiming.serverTiming](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/serverTiming)
- **规范文档**: [查看规范](https://w3c.github.io/server-timing/#servertiming-attribute)
- **标签**: `web-features:server-timing`

## 使用示例

### 基本用法

```javascript
// PerformanceResourceTiming.serverTiming 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceResourceTiming.serverTiming API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 65 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 61 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 65

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 61

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceResourceTiming.serverTiming是否支持
function isPerformanceResourceTimingServerTimingSupported() {
    return 'serverTiming' in performanceresourcetiming && typeof performanceresourcetiming.serverTiming === 'function';
}

if (isPerformanceResourceTimingServerTimingSupported()) {
    console.log('PerformanceResourceTiming.serverTiming 支持');
    // 使用PerformanceResourceTiming.serverTiming
} else {
    console.log('PerformanceResourceTiming.serverTiming 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceResourceTiming.serverTiming polyfill
if (!performanceresourcetiming.serverTiming) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceResourceTiming.serverTiming polyfill');
}
```

