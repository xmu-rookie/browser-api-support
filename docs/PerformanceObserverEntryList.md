# PerformanceObserverEntryList API 兼容性数据

## 基本信息

- **API名称**: `PerformanceObserverEntryList`
- **MDN文档**: [PerformanceObserverEntryList](https://developer.mozilla.org/docs/Web/API/PerformanceObserverEntryList)
- **规范文档**: [查看规范](https://w3c.github.io/performance-timeline/#performanceobserverentrylist-interface)
- **标签**: `web-features:performance`

## 使用示例

### 基本用法

```javascript
// PerformanceObserverEntryList 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceObserverEntryList API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| bun | 1.0.22 |  |
| Chrome | 52 |  |
| Chrome Android | 同主版本 |  |
| deno | ❌ 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 57 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 52

### deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 57

### Node.js


### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceObserverEntryList是否支持
function isPerformanceObserverEntryListSupported() {
    return 'PerformanceObserverEntryList' in window || typeof PerformanceObserverEntryList !== 'undefined';
}

if (isPerformanceObserverEntryListSupported()) {
    console.log('PerformanceObserverEntryList 支持');
    // 使用PerformanceObserverEntryList
} else {
    console.log('PerformanceObserverEntryList 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceObserverEntryList polyfill
if (!window.PerformanceObserverEntryList) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceObserverEntryList polyfill');
}
```

