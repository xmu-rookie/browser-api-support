# PerformanceEntry API 兼容性数据

## 基本信息

- **API名称**: `PerformanceEntry`
- **MDN文档**: [PerformanceEntry](https://developer.mozilla.org/docs/Web/API/PerformanceEntry)
- **规范文档**: [查看规范](https://w3c.github.io/performance-timeline/#dom-performanceentry)
- **标签**: `web-features:performance`

## 使用示例

### 基本用法

```javascript
// PerformanceEntry 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceEntry API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| bun | 1.0.22 |  |
| Chrome | 未知 |  |
| Chrome Android | 同主版本 |  |
| deno | 1.2 |  |
| Edge | 12 |  |
| Firefox | 35 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 未知 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### bun

- **支持版本**: 1.0.22

### Chrome


### deno

- **支持版本**: 1.2

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 35

### Internet Explorer

- **支持版本**: 10

### Node.js


### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceEntry是否支持
function isPerformanceEntrySupported() {
    return 'PerformanceEntry' in window || typeof PerformanceEntry !== 'undefined';
}

if (isPerformanceEntrySupported()) {
    console.log('PerformanceEntry 支持');
    // 使用PerformanceEntry
} else {
    console.log('PerformanceEntry 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceEntry polyfill
if (!window.PerformanceEntry) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceEntry polyfill');
}
```

