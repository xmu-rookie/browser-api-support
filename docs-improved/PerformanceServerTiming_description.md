# PerformanceServerTiming.description API 兼容性数据

## 基本信息

- **API名称**: `PerformanceServerTiming.description`
- **MDN文档**: [PerformanceServerTiming.description](https://developer.mozilla.org/docs/Web/API/PerformanceServerTiming/description)
- **规范文档**: [查看规范](https://w3c.github.io/server-timing/#dom-performanceservertiming-description)
- **标签**: `web-features:server-timing`

## 使用示例

### 基本用法

```javascript
// PerformanceServerTiming.description 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceServerTiming.description API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.1.37 |  |
| Chrome | 65 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 61 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.1.37

### Chrome

- **支持版本**: 65

### Firefox

- **支持版本**: 61

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceServerTiming.description是否支持
function isPerformanceServerTimingDescriptionSupported() {
    return 'description' in performanceservertiming && typeof performanceservertiming.description === 'function';
}

if (isPerformanceServerTimingDescriptionSupported()) {
    console.log('PerformanceServerTiming.description 支持');
    // 使用PerformanceServerTiming.description
} else {
    console.log('PerformanceServerTiming.description 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceServerTiming.description polyfill
if (!performanceservertiming.description) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceServerTiming.description polyfill');
}
```

