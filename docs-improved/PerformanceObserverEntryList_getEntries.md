# PerformanceObserverEntryList.getEntries API 兼容性数据

## 基本信息

- **API名称**: `PerformanceObserverEntryList.getEntries`
- **MDN文档**: [PerformanceObserverEntryList.getEntries](https://developer.mozilla.org/docs/Web/API/PerformanceObserverEntryList/getEntries)
- **规范文档**: [查看规范](https://w3c.github.io/performance-timeline/#dom-performanceobserverentrylist-getentries)
- **标签**: `web-features:performance`

## 使用示例

### 基本用法

```javascript
// PerformanceObserverEntryList.getEntries 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceObserverEntryList.getEntries API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.22 |  |
| Chrome | 52 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 57 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 8.5.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.22

### Chrome

- **支持版本**: 52

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 57

### Node.js

- **支持版本**: 8.5.0

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceObserverEntryList.getEntries是否支持
function isPerformanceObserverEntryListGetEntriesSupported() {
    return 'getEntries' in performanceobserverentrylist && typeof performanceobserverentrylist.getEntries === 'function';
}

if (isPerformanceObserverEntryListGetEntriesSupported()) {
    console.log('PerformanceObserverEntryList.getEntries 支持');
    // 使用PerformanceObserverEntryList.getEntries
} else {
    console.log('PerformanceObserverEntryList.getEntries 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceObserverEntryList.getEntries polyfill
if (!performanceobserverentrylist.getEntries) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceObserverEntryList.getEntries polyfill');
}
```

