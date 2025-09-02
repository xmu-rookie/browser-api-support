# PerformanceResourceTiming API 兼容性数据

## 基本信息

- **API名称**: `PerformanceResourceTiming`
- **MDN文档**: [PerformanceResourceTiming](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming)
- **规范文档**: [查看规范](https://w3c.github.io/resource-timing/#resources-included-in-the-performanceresourcetiming-interface)
- **标签**: `web-features:resource-timing`

## 使用示例

### 基本用法

```javascript
// PerformanceResourceTiming 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceResourceTiming API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 29 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 35 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 19.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 29

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 35

### Internet Explorer

- **支持版本**: 10

### Node.js

- **支持版本**: 19.0.0
- **支持版本**: 18.2.0
- **移除版本**: 19.0.0
- **部分实现**: 是
- **注意事项**:
  - Available as a part of the `perf_hooks` module.
- **支持版本**: 16.17.0
- **移除版本**: 17.0.0
- **部分实现**: 是
- **注意事项**:
  - Available as a part of the `perf_hooks` module.

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceResourceTiming是否支持
function isPerformanceResourceTimingSupported() {
    return 'PerformanceResourceTiming' in window || typeof PerformanceResourceTiming !== 'undefined';
}

if (isPerformanceResourceTimingSupported()) {
    console.log('PerformanceResourceTiming 支持');
    // 使用PerformanceResourceTiming
} else {
    console.log('PerformanceResourceTiming 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceResourceTiming polyfill
if (!window.PerformanceResourceTiming) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceResourceTiming polyfill');
}
```

