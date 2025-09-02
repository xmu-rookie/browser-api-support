# PerformanceResourceTiming.secureConnectionStart API 兼容性数据

## 基本信息

- **API名称**: `PerformanceResourceTiming.secureConnectionStart`
- **MDN文档**: [PerformanceResourceTiming.secureConnectionStart](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/secureConnectionStart)
- **规范文档**: [查看规范](https://w3c.github.io/resource-timing/#dom-performanceresourcetiming-secureconnectionstart)
- **标签**: `web-features:resource-timing`

## 使用示例

### 基本用法

```javascript
// PerformanceResourceTiming.secureConnectionStart 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceResourceTiming.secureConnectionStart API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 43 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 18 |  |
| Firefox | 35 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.2.0 |  |
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

- **支持版本**: 43

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 35

### Node.js

- **支持版本**: 18.2.0
- **支持版本**: 16.17.0
- **移除版本**: 17.0.0

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceResourceTiming.secureConnectionStart是否支持
function isPerformanceResourceTimingSecureConnectionStartSupported() {
    return 'secureConnectionStart' in performanceresourcetiming && typeof performanceresourcetiming.secureConnectionStart === 'function';
}

if (isPerformanceResourceTimingSecureConnectionStartSupported()) {
    console.log('PerformanceResourceTiming.secureConnectionStart 支持');
    // 使用PerformanceResourceTiming.secureConnectionStart
} else {
    console.log('PerformanceResourceTiming.secureConnectionStart 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceResourceTiming.secureConnectionStart polyfill
if (!performanceresourcetiming.secureConnectionStart) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceResourceTiming.secureConnectionStart polyfill');
}
```

