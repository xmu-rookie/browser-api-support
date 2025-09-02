# PerformanceTiming.redirectEnd API 兼容性数据

## 基本信息

- **API名称**: `PerformanceTiming.redirectEnd`
- **MDN文档**: [PerformanceTiming.redirectEnd](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/redirectEnd)
- **规范文档**: [查看规范](https://w3c.github.io/navigation-timing/#dom-performancetiming-redirectend)
- **标签**: `web-features:performancetiming`

## 使用示例

### 基本用法

```javascript
// PerformanceTiming.redirectEnd 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceTiming.redirectEnd API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.22 |  |
| Chrome | 6 |  |
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

### Bun

- **支持版本**: 1.0.22

### Chrome

- **支持版本**: 6

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
// 检查PerformanceTiming.redirectEnd是否支持
function isPerformanceTimingRedirectEndSupported() {
    return 'redirectEnd' in performancetiming && typeof performancetiming.redirectEnd === 'function';
}

if (isPerformanceTimingRedirectEndSupported()) {
    console.log('PerformanceTiming.redirectEnd 支持');
    // 使用PerformanceTiming.redirectEnd
} else {
    console.log('PerformanceTiming.redirectEnd 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceTiming.redirectEnd polyfill
if (!performancetiming.redirectEnd) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceTiming.redirectEnd polyfill');
}
```

