# Performance.mark API 兼容性数据

## 基本信息

- **API名称**: `Performance.mark`
- **MDN文档**: [Performance.mark](https://developer.mozilla.org/docs/Web/API/Performance/mark)
- **规范文档**: [查看规范](https://w3c.github.io/user-timing/#dom-performance-mark)
- **标签**: `web-features:performance`

## 使用示例

### 基本用法

```javascript
// Performance.mark 使用示例
// 请查阅MDN文档了解具体用法
console.log('Performance.mark API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 28 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.2 |  |
| Edge | 12 |  |
| Firefox | 38 |  |
| Firefox Android | 42 |  |
| Internet Explorer | 10 |  |
| Node.js | 8.5.0 |  |
| Oculus | 同主版本 |  |
| Opera | 33 |  |
| Opera Android | 33 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 28
- **支持版本**: 25
- **移除版本**: 28
- **前缀**: webkit

### Deno

- **支持版本**: 1.2

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 38

### Firefox Android

- **支持版本**: 42

### Internet Explorer

- **支持版本**: 10

### Node.js

- **支持版本**: 8.5.0

### Opera

- **支持版本**: 33

### Opera Android

- **支持版本**: 33

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查Performance.mark是否支持
function isPerformanceMarkSupported() {
    return 'mark' in performance && typeof performance.mark === 'function';
}

if (isPerformanceMarkSupported()) {
    console.log('Performance.mark 支持');
    // 使用Performance.mark
} else {
    console.log('Performance.mark 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Performance.mark polyfill
if (!performance.mark) {
    // 在这里添加polyfill实现
    console.log('加载Performance.mark polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **markOptions_parameter**: `markOptions` parameter
- **returns_performancemark**: Returns `PerformanceMark`

