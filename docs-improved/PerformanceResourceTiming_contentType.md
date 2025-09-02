# PerformanceResourceTiming.contentType API 兼容性数据

## 基本信息

- **API名称**: `PerformanceResourceTiming.contentType`
- **MDN文档**: [PerformanceResourceTiming.contentType](https://developer.mozilla.org/docs/Web/API/PerformanceResourceTiming/contentType)
- **规范文档**: [查看规范](https://w3c.github.io/resource-timing/#dom-performanceresourcetiming-contenttype)
- **标签**: `web-features:resource-timing`

## 使用示例

### 基本用法

```javascript
// PerformanceResourceTiming.contentType 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceResourceTiming.contentType API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 129 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
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

- **支持版本**: 不支持

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 129

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceResourceTiming.contentType是否支持
function isPerformanceResourceTimingContentTypeSupported() {
    return 'contentType' in performanceresourcetiming && typeof performanceresourcetiming.contentType === 'function';
}

if (isPerformanceResourceTimingContentTypeSupported()) {
    console.log('PerformanceResourceTiming.contentType 支持');
    // 使用PerformanceResourceTiming.contentType
} else {
    console.log('PerformanceResourceTiming.contentType 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceResourceTiming.contentType polyfill
if (!performanceresourcetiming.contentType) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceResourceTiming.contentType polyfill');
}
```

