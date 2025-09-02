# PerformanceResourceTiming.finalResponseHeadersStart API 兼容性数据

## 基本信息

- **API名称**: `PerformanceResourceTiming.finalResponseHeadersStart`
- **MDN文档**: [PerformanceResourceTiming.finalResponseHeadersStart](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart)
- **规范文档**: [查看规范](https://w3c.github.io/resource-timing/#dom-performanceresourcetiming-finalresponseheadersstart)

## 使用示例

### 基本用法

```javascript
// PerformanceResourceTiming.finalResponseHeadersStart 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceResourceTiming.finalResponseHeadersStart API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 133 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 133

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceResourceTiming.finalResponseHeadersStart是否支持
function isPerformanceResourceTimingFinalResponseHeadersStartSupported() {
    return 'finalResponseHeadersStart' in performanceresourcetiming && typeof performanceresourcetiming.finalResponseHeadersStart === 'function';
}

if (isPerformanceResourceTimingFinalResponseHeadersStartSupported()) {
    console.log('PerformanceResourceTiming.finalResponseHeadersStart 支持');
    // 使用PerformanceResourceTiming.finalResponseHeadersStart
} else {
    console.log('PerformanceResourceTiming.finalResponseHeadersStart 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceResourceTiming.finalResponseHeadersStart polyfill
if (!performanceresourcetiming.finalResponseHeadersStart) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceResourceTiming.finalResponseHeadersStart polyfill');
}
```

