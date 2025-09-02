# IntersectionObserverEntry.rootBounds API 兼容性数据

## 基本信息

- **API名称**: `IntersectionObserverEntry.rootBounds`
- **MDN文档**: [IntersectionObserverEntry.rootBounds](https://developer.mozilla.org/docs/Web/API/IntersectionObserverEntry/rootBounds)
- **规范文档**: [查看规范](https://w3c.github.io/IntersectionObserver/#dom-intersectionobserverentry-rootbounds)
- **标签**: `web-features:intersection-observer`

## 使用示例

### 基本用法

```javascript
// IntersectionObserverEntry.rootBounds 使用示例
// 请查阅MDN文档了解具体用法
console.log('IntersectionObserverEntry.rootBounds API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 51 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
| Firefox | 55 |  |
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

- **支持版本**: 51

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 55

### Safari

- **支持版本**: 12.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查IntersectionObserverEntry.rootBounds是否支持
function isIntersectionObserverEntryRootBoundsSupported() {
    return 'rootBounds' in intersectionobserverentry && typeof intersectionobserverentry.rootBounds === 'function';
}

if (isIntersectionObserverEntryRootBoundsSupported()) {
    console.log('IntersectionObserverEntry.rootBounds 支持');
    // 使用IntersectionObserverEntry.rootBounds
} else {
    console.log('IntersectionObserverEntry.rootBounds 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IntersectionObserverEntry.rootBounds polyfill
if (!intersectionobserverentry.rootBounds) {
    // 在这里添加polyfill实现
    console.log('加载IntersectionObserverEntry.rootBounds polyfill');
}
```

