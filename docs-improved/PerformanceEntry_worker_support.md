# PerformanceEntry.worker_support API 兼容性数据

## 基本信息

- **API名称**: `PerformanceEntry.worker_support`
- **标签**: `web-features:performance`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// PerformanceEntry.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceEntry.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 62 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.2 |  |
| Edge | 15 |  |
| Firefox | 60 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 19.0.0 |  |
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

- **支持版本**: 62

### Deno

- **支持版本**: 1.2

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 60

### Node.js

- **支持版本**: 19.0.0
- **支持版本**: 11.7.0
- **移除版本**: 19.0.0
- **部分实现**: 是
- **注意事项**:
  - Available as a part of the `perf_hooks` module.

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceEntry.worker_support是否支持
function isPerformanceEntryWorker_supportSupported() {
    return 'worker_support' in performanceentry && typeof performanceentry.worker_support === 'function';
}

if (isPerformanceEntryWorker_supportSupported()) {
    console.log('PerformanceEntry.worker_support 支持');
    // 使用PerformanceEntry.worker_support
} else {
    console.log('PerformanceEntry.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceEntry.worker_support polyfill
if (!performanceentry.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceEntry.worker_support polyfill');
}
```

