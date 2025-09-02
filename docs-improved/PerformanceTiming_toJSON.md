# PerformanceTiming.toJSON API 兼容性数据

## 基本信息

- **API名称**: `PerformanceTiming.toJSON`
- **MDN文档**: [PerformanceTiming.toJSON](https://developer.mozilla.org/docs/Web/API/PerformanceTiming/toJSON)
- **规范文档**: [查看规范](https://w3c.github.io/navigation-timing/#dom-performancetiming-tojson)
- **标签**: `web-features:performancetiming`

## 使用示例

### 基本用法

```javascript
// PerformanceTiming.toJSON 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceTiming.toJSON API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.1.37 |  |
| Chrome | 44 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 25 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 32 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.1.37

### Chrome

- **支持版本**: 44

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 25

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 32

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceTiming.toJSON是否支持
function isPerformanceTimingToJSONSupported() {
    return 'toJSON' in performancetiming && typeof performancetiming.toJSON === 'function';
}

if (isPerformanceTimingToJSONSupported()) {
    console.log('PerformanceTiming.toJSON 支持');
    // 使用PerformanceTiming.toJSON
} else {
    console.log('PerformanceTiming.toJSON 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceTiming.toJSON polyfill
if (!performancetiming.toJSON) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceTiming.toJSON polyfill');
}
```

