# Performance.navigation API 兼容性数据

## 基本信息

- **API名称**: `Performance.navigation`
- **MDN文档**: [Performance.navigation](https://developer.mozilla.org/docs/Web/API/Performance/navigation)
- **规范文档**: [查看规范](https://w3c.github.io/navigation-timing/#dom-performance-navigation)
- **标签**: `web-features:performancetiming`

## 使用示例

### 基本用法

```javascript
// Performance.navigation 使用示例
// 请查阅MDN文档了解具体用法
console.log('Performance.navigation API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 10 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 7 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 9 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 10

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 7

### Internet Explorer

- **支持版本**: 9

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 8

### Safari iOS

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查Performance.navigation是否支持
function isPerformanceNavigationSupported() {
    return 'navigation' in performance && typeof performance.navigation === 'function';
}

if (isPerformanceNavigationSupported()) {
    console.log('Performance.navigation 支持');
    // 使用Performance.navigation
} else {
    console.log('Performance.navigation 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Performance.navigation polyfill
if (!performance.navigation) {
    // 在这里添加polyfill实现
    console.log('加载Performance.navigation polyfill');
}
```

