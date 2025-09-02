# PerformanceObserver.supportedEntryTypes_static API 兼容性数据

## 基本信息

- **API名称**: `PerformanceObserver.supportedEntryTypes_static`
- **MDN文档**: [PerformanceObserver.supportedEntryTypes_static](https://developer.mozilla.org/docs/Web/API/PerformanceObserver/supportedEntryTypes_static)
- **规范文档**: [查看规范](https://w3c.github.io/performance-timeline/#supportedentrytypes-attribute)
- **标签**: `web-features:performance`
- **描述**: `supportedEntryTypes()` static method

## 使用示例

### 基本用法

```javascript
// PerformanceObserver.supportedEntryTypes_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceObserver.supportedEntryTypes_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.22 |  |
| Chrome | 73 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 68 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 16.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.22

### Chrome

- **支持版本**: 73

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 68

### Node.js

- **支持版本**: 16.0.0

### Safari

- **支持版本**: 13

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceObserver.supportedEntryTypes_static是否支持
function isPerformanceObserverSupportedEntryTypes_staticSupported() {
    return 'supportedEntryTypes_static' in performanceobserver && typeof performanceobserver.supportedEntryTypes_static === 'function';
}

if (isPerformanceObserverSupportedEntryTypes_staticSupported()) {
    console.log('PerformanceObserver.supportedEntryTypes_static 支持');
    // 使用PerformanceObserver.supportedEntryTypes_static
} else {
    console.log('PerformanceObserver.supportedEntryTypes_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceObserver.supportedEntryTypes_static polyfill
if (!performanceobserver.supportedEntryTypes_static) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceObserver.supportedEntryTypes_static polyfill');
}
```

