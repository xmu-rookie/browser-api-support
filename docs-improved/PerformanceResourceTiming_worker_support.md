# PerformanceResourceTiming.worker_support API 兼容性数据

## 基本信息

- **API名称**: `PerformanceResourceTiming.worker_support`
- **标签**: `web-features:resource-timing`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// PerformanceResourceTiming.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceResourceTiming.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 43 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 15 |  |
| Firefox | 60 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.2.0 |  |
| Oculus | 同主版本 |  |
| Opera | 32 |  |
| Opera Android | 32 |  |
| Safari | 12 |  |
| Safari iOS | 不支持 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 43

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 60

### Node.js

- **支持版本**: 18.2.0
- **支持版本**: 16.17.0
- **移除版本**: 17.0.0

### Opera

- **支持版本**: 32

### Opera Android

- **支持版本**: 32

### Safari

- **支持版本**: 12

### Safari iOS

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceResourceTiming.worker_support是否支持
function isPerformanceResourceTimingWorker_supportSupported() {
    return 'worker_support' in performanceresourcetiming && typeof performanceresourcetiming.worker_support === 'function';
}

if (isPerformanceResourceTimingWorker_supportSupported()) {
    console.log('PerformanceResourceTiming.worker_support 支持');
    // 使用PerformanceResourceTiming.worker_support
} else {
    console.log('PerformanceResourceTiming.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceResourceTiming.worker_support polyfill
if (!performanceresourcetiming.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceResourceTiming.worker_support polyfill');
}
```

