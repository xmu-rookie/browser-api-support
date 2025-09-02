# Performance.now API 兼容性数据

## 基本信息

- **API名称**: `Performance.now`
- **MDN文档**: [Performance.now](https://developer.mozilla.org/docs/Web/API/Performance/now)
- **规范文档**: [查看规范](https://w3c.github.io/hr-time/#dom-performance-now)
- **标签**: `web-features:performance`

## 使用示例

### 基本用法

```javascript
// Performance.now 使用示例
// 请查阅MDN文档了解具体用法
console.log('Performance.now API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 24 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 15 | In Firefox 57.0.4 the accuracy was reduced to 20 microseconds.; In Firefox 59 the accuracy was reduc... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 8.5.0 |  |
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

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 24
- **支持版本**: 21
- **移除版本**: 24
- **前缀**: webkit

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 15
- **注意事项**:
  - In Firefox 57.0.4 the accuracy was reduced to 20 microseconds.
  - In Firefox 59 the accuracy was reduced to 2 milliseconds.
  - In Firefox 60 the accuracy was increased to 1 millisecond.

### Internet Explorer

- **支持版本**: 10

### Node.js

- **支持版本**: 8.5.0

### Safari

- **支持版本**: 8

### Safari iOS

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查Performance.now是否支持
function isPerformanceNowSupported() {
    return 'now' in performance && typeof performance.now === 'function';
}

if (isPerformanceNowSupported()) {
    console.log('Performance.now 支持');
    // 使用Performance.now
} else {
    console.log('Performance.now 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Performance.now polyfill
if (!performance.now) {
    // 在这里添加polyfill实现
    console.log('加载Performance.now polyfill');
}
```

