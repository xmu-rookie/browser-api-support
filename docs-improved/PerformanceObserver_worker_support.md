# PerformanceObserver.worker_support API 兼容性数据

## 基本信息

- **API名称**: `PerformanceObserver.worker_support`
- **标签**: `web-features:performance`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// PerformanceObserver.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceObserver.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 62 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 57 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 11.7.0 |  |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: 57

### Node.js

- **支持版本**: 11.7.0

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceObserver.worker_support是否支持
function isPerformanceObserverWorker_supportSupported() {
    return 'worker_support' in performanceobserver && typeof performanceobserver.worker_support === 'function';
}

if (isPerformanceObserverWorker_supportSupported()) {
    console.log('PerformanceObserver.worker_support 支持');
    // 使用PerformanceObserver.worker_support
} else {
    console.log('PerformanceObserver.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceObserver.worker_support polyfill
if (!performanceobserver.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceObserver.worker_support polyfill');
}
```

