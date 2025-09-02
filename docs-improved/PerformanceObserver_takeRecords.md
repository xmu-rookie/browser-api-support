# PerformanceObserver.takeRecords API 兼容性数据

## 基本信息

- **API名称**: `PerformanceObserver.takeRecords`
- **MDN文档**: [PerformanceObserver.takeRecords](https://developer.mozilla.org/docs/Web/API/PerformanceObserver/takeRecords)
- **规范文档**: [查看规范](https://w3c.github.io/performance-timeline/#dom-performanceobserver-takerecords)
- **标签**: `web-features:performance`

## 使用示例

### 基本用法

```javascript
// PerformanceObserver.takeRecords 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceObserver.takeRecords API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.22 |  |
| Chrome | 65 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 60 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 16.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.22

### Chrome

- **支持版本**: 65

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 60

### Node.js

- **支持版本**: 16.0.0

### Safari

- **支持版本**: 15

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceObserver.takeRecords是否支持
function isPerformanceObserverTakeRecordsSupported() {
    return 'takeRecords' in performanceobserver && typeof performanceobserver.takeRecords === 'function';
}

if (isPerformanceObserverTakeRecordsSupported()) {
    console.log('PerformanceObserver.takeRecords 支持');
    // 使用PerformanceObserver.takeRecords
} else {
    console.log('PerformanceObserver.takeRecords 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceObserver.takeRecords polyfill
if (!performanceobserver.takeRecords) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceObserver.takeRecords polyfill');
}
```

