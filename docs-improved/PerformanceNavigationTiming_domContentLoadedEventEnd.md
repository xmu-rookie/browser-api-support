# PerformanceNavigationTiming.domContentLoadedEventEnd API 兼容性数据

## 基本信息

- **API名称**: `PerformanceNavigationTiming.domContentLoadedEventEnd`
- **MDN文档**: [PerformanceNavigationTiming.domContentLoadedEventEnd](https://developer.mozilla.org/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd)
- **规范文档**: [查看规范](https://w3c.github.io/navigation-timing/#dom-performancenavigationtiming-domcontentloadedeventend)
- **标签**: `web-features:navigation-timing`

## 使用示例

### 基本用法

```javascript
// PerformanceNavigationTiming.domContentLoadedEventEnd 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceNavigationTiming.domContentLoadedEventEnd API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 57 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 58 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 |  |
| Safari iOS | 15.1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 57

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 58

### Internet Explorer

- **支持版本**: 11

### Safari

- **支持版本**: 15

### Safari iOS

- **支持版本**: 15.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceNavigationTiming.domContentLoadedEventEnd是否支持
function isPerformanceNavigationTimingDomContentLoadedEventEndSupported() {
    return 'domContentLoadedEventEnd' in performancenavigationtiming && typeof performancenavigationtiming.domContentLoadedEventEnd === 'function';
}

if (isPerformanceNavigationTimingDomContentLoadedEventEndSupported()) {
    console.log('PerformanceNavigationTiming.domContentLoadedEventEnd 支持');
    // 使用PerformanceNavigationTiming.domContentLoadedEventEnd
} else {
    console.log('PerformanceNavigationTiming.domContentLoadedEventEnd 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceNavigationTiming.domContentLoadedEventEnd polyfill
if (!performancenavigationtiming.domContentLoadedEventEnd) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceNavigationTiming.domContentLoadedEventEnd polyfill');
}
```

