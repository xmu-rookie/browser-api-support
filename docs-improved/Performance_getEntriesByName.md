# Performance.getEntriesByName API 兼容性数据

## 基本信息

- **API名称**: `Performance.getEntriesByName`
- **MDN文档**: [Performance.getEntriesByName](https://developer.mozilla.org/docs/Web/API/Performance/getEntriesByName)
- **规范文档**: [查看规范](https://w3c.github.io/performance-timeline/#dom-performance-getentriesbyname)
- **标签**: `web-features:performance`

## 使用示例

### 基本用法

```javascript
// Performance.getEntriesByName 使用示例
// 请查阅MDN文档了解具体用法
console.log('Performance.getEntriesByName API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.7 |  |
| Chrome | 28 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.2 |  |
| Edge | 12 |  |
| Firefox | 35 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 16.7.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 4.4 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.7

### Chrome

- **支持版本**: 28
- **支持版本**: 25
- **移除版本**: 36
- **前缀**: webkit

### Deno

- **支持版本**: 1.2

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 35

### Internet Explorer

- **支持版本**: 10

### Node.js

- **支持版本**: 16.7.0

### Safari

- **支持版本**: 11

### WebView Android

- **支持版本**: 4.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查Performance.getEntriesByName是否支持
function isPerformanceGetEntriesByNameSupported() {
    return 'getEntriesByName' in performance && typeof performance.getEntriesByName === 'function';
}

if (isPerformanceGetEntriesByNameSupported()) {
    console.log('Performance.getEntriesByName 支持');
    // 使用Performance.getEntriesByName
} else {
    console.log('Performance.getEntriesByName 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Performance.getEntriesByName polyfill
if (!performance.getEntriesByName) {
    // 在这里添加polyfill实现
    console.log('加载Performance.getEntriesByName polyfill');
}
```

