# PerformanceResourceTiming.encodedBodySize API 兼容性数据

## 基本信息

- **API名称**: `PerformanceResourceTiming.encodedBodySize`
- **MDN文档**: [PerformanceResourceTiming.encodedBodySize](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/encodedBodySize)
- **规范文档**: [查看规范](https://w3c.github.io/resource-timing/#dom-performanceresourcetiming-encodedbodysize)
- **标签**: `web-features:resource-size`

## 使用示例

### 基本用法

```javascript
// PerformanceResourceTiming.encodedBodySize 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceResourceTiming.encodedBodySize API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 54 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 17 |  |
| Firefox | 45 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.2.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 54

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 45

### Node.js

- **支持版本**: 18.2.0
- **支持版本**: 16.17.0
- **移除版本**: 17.0.0

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceResourceTiming.encodedBodySize是否支持
function isPerformanceResourceTimingEncodedBodySizeSupported() {
    return 'encodedBodySize' in performanceresourcetiming && typeof performanceresourcetiming.encodedBodySize === 'function';
}

if (isPerformanceResourceTimingEncodedBodySizeSupported()) {
    console.log('PerformanceResourceTiming.encodedBodySize 支持');
    // 使用PerformanceResourceTiming.encodedBodySize
} else {
    console.log('PerformanceResourceTiming.encodedBodySize 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceResourceTiming.encodedBodySize polyfill
if (!performanceresourcetiming.encodedBodySize) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceResourceTiming.encodedBodySize polyfill');
}
```

