# PerformanceNavigation.redirectCount API 兼容性数据

## 基本信息

- **API名称**: `PerformanceNavigation.redirectCount`
- **MDN文档**: [PerformanceNavigation.redirectCount](https://developer.mozilla.org/docs/Web/API/PerformanceNavigation/redirectCount)
- **规范文档**: [查看规范](https://w3c.github.io/navigation-timing/#dom-performancenavigation-redirectcount)
- **标签**: `web-features:performancetiming`

## 使用示例

### 基本用法

```javascript
// PerformanceNavigation.redirectCount 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceNavigation.redirectCount API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 10 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 7 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
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

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 7

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 8

### Safari iOS

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceNavigation.redirectCount是否支持
function isPerformanceNavigationRedirectCountSupported() {
    return 'redirectCount' in performancenavigation && typeof performancenavigation.redirectCount === 'function';
}

if (isPerformanceNavigationRedirectCountSupported()) {
    console.log('PerformanceNavigation.redirectCount 支持');
    // 使用PerformanceNavigation.redirectCount
} else {
    console.log('PerformanceNavigation.redirectCount 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceNavigation.redirectCount polyfill
if (!performancenavigation.redirectCount) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceNavigation.redirectCount polyfill');
}
```

