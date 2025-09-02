# ReportingObserver.worker_support API 兼容性数据

## 基本信息

- **API名称**: `ReportingObserver.worker_support`
- **标签**: `web-features:reporting`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// ReportingObserver.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('ReportingObserver.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 84 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 77 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 不支持 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 84

### Firefox

- **支持版本**: 77
- **需要标志**: 
  - dom.reporting.enabled: true

### Node.js

- **支持版本**: 不支持

### Opera Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ReportingObserver.worker_support是否支持
function isReportingObserverWorker_supportSupported() {
    return 'worker_support' in reportingobserver && typeof reportingobserver.worker_support === 'function';
}

if (isReportingObserverWorker_supportSupported()) {
    console.log('ReportingObserver.worker_support 支持');
    // 使用ReportingObserver.worker_support
} else {
    console.log('ReportingObserver.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ReportingObserver.worker_support polyfill
if (!reportingobserver.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载ReportingObserver.worker_support polyfill');
}
```

