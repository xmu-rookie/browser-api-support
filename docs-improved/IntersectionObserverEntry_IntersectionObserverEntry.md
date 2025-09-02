# IntersectionObserverEntry.IntersectionObserverEntry API 兼容性数据

## 基本信息

- **API名称**: `IntersectionObserverEntry.IntersectionObserverEntry`
- **标签**: `web-features:intersection-observer`
- **描述**: `IntersectionObserverEntry()` constructor

## 使用示例

### 基本用法

```javascript
// IntersectionObserverEntry.IntersectionObserverEntry 使用示例
// 请查阅MDN文档了解具体用法
console.log('IntersectionObserverEntry.IntersectionObserverEntry API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 12.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Edge

- **支持版本**: 15
- **移除版本**: 79

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 12.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查IntersectionObserverEntry.IntersectionObserverEntry是否支持
function isIntersectionObserverEntryIntersectionObserverEntrySupported() {
    return 'IntersectionObserverEntry' in intersectionobserverentry && typeof intersectionobserverentry.IntersectionObserverEntry === 'function';
}

if (isIntersectionObserverEntryIntersectionObserverEntrySupported()) {
    console.log('IntersectionObserverEntry.IntersectionObserverEntry 支持');
    // 使用IntersectionObserverEntry.IntersectionObserverEntry
} else {
    console.log('IntersectionObserverEntry.IntersectionObserverEntry 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IntersectionObserverEntry.IntersectionObserverEntry polyfill
if (!intersectionobserverentry.IntersectionObserverEntry) {
    // 在这里添加polyfill实现
    console.log('加载IntersectionObserverEntry.IntersectionObserverEntry polyfill');
}
```

