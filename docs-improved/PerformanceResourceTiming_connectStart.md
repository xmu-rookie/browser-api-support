# PerformanceResourceTiming.connectStart API 兼容性数据

## 基本信息

- **API名称**: `PerformanceResourceTiming.connectStart`
- **MDN文档**: [PerformanceResourceTiming.connectStart](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/connectStart)
- **规范文档**: [查看规范](https://w3c.github.io/resource-timing/#dom-performanceresourcetiming-connectstart)
- **标签**: `web-features:resource-timing`

## 使用示例

### 基本用法

```javascript
// PerformanceResourceTiming.connectStart 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceResourceTiming.connectStart API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 43 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 35 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 18.2.0 |  |
| Oculus | 同主版本 |  |
| Opera | 32 |  |
| Opera Android | 32 |  |
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

- **支持版本**: 12

### Firefox

- **支持版本**: 35

### Internet Explorer

- **支持版本**: 10

### Node.js

- **支持版本**: 18.2.0
- **支持版本**: 16.17.0
- **移除版本**: 17.0.0

### Opera

- **支持版本**: 32

### Opera Android

- **支持版本**: 32

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceResourceTiming.connectStart是否支持
function isPerformanceResourceTimingConnectStartSupported() {
    return 'connectStart' in performanceresourcetiming && typeof performanceresourcetiming.connectStart === 'function';
}

if (isPerformanceResourceTimingConnectStartSupported()) {
    console.log('PerformanceResourceTiming.connectStart 支持');
    // 使用PerformanceResourceTiming.connectStart
} else {
    console.log('PerformanceResourceTiming.connectStart 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceResourceTiming.connectStart polyfill
if (!performanceresourcetiming.connectStart) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceResourceTiming.connectStart polyfill');
}
```

