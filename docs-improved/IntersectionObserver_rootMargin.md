# IntersectionObserver.rootMargin API 兼容性数据

## 基本信息

- **API名称**: `IntersectionObserver.rootMargin`
- **MDN文档**: [IntersectionObserver.rootMargin](https://developer.mozilla.org/docs/Web/API/IntersectionObserver/rootMargin)
- **规范文档**: [查看规范](https://w3c.github.io/IntersectionObserver/#dom-intersectionobserver-rootmargin)
- **标签**: `web-features:intersection-observer`

## 使用示例

### 基本用法

```javascript
// IntersectionObserver.rootMargin 使用示例
// 请查阅MDN文档了解具体用法
console.log('IntersectionObserver.rootMargin API');
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
| Safari | 12.1 | `rootMargin` does not work with `<iframe>`s. |
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
- **注意事项**:
  - `rootMargin` does not work with `<iframe>`s.

## 兼容性检查代码

### 特性检测

```javascript
// 检查IntersectionObserver.rootMargin是否支持
function isIntersectionObserverRootMarginSupported() {
    return 'rootMargin' in intersectionobserver && typeof intersectionobserver.rootMargin === 'function';
}

if (isIntersectionObserverRootMarginSupported()) {
    console.log('IntersectionObserver.rootMargin 支持');
    // 使用IntersectionObserver.rootMargin
} else {
    console.log('IntersectionObserver.rootMargin 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IntersectionObserver.rootMargin polyfill
if (!intersectionobserver.rootMargin) {
    // 在这里添加polyfill实现
    console.log('加载IntersectionObserver.rootMargin polyfill');
}
```

