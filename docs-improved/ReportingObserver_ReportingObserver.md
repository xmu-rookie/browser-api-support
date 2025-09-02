# ReportingObserver.ReportingObserver API 兼容性数据

## 基本信息

- **API名称**: `ReportingObserver.ReportingObserver`
- **MDN文档**: [ReportingObserver.ReportingObserver](https://developer.mozilla.org/docs/Web/API/ReportingObserver/ReportingObserver)
- **规范文档**: [查看规范](https://w3c.github.io/reporting/#dom-reportingobserver-reportingobserver)
- **标签**: `web-features:reporting`
- **描述**: `ReportingObserver()` constructor

## 使用示例

### 基本用法

```javascript
// ReportingObserver.ReportingObserver 使用示例
// 请查阅MDN文档了解具体用法
console.log('ReportingObserver.ReportingObserver API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 65 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 69

### Firefox

- **支持版本**: 65
- **需要标志**: 
  - dom.reporting.enabled: true

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查ReportingObserver.ReportingObserver是否支持
function isReportingObserverReportingObserverSupported() {
    return 'ReportingObserver' in reportingobserver && typeof reportingobserver.ReportingObserver === 'function';
}

if (isReportingObserverReportingObserverSupported()) {
    console.log('ReportingObserver.ReportingObserver 支持');
    // 使用ReportingObserver.ReportingObserver
} else {
    console.log('ReportingObserver.ReportingObserver 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ReportingObserver.ReportingObserver polyfill
if (!reportingobserver.ReportingObserver) {
    // 在这里添加polyfill实现
    console.log('加载ReportingObserver.ReportingObserver polyfill');
}
```

