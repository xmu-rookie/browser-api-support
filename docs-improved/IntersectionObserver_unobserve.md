# IntersectionObserver.unobserve API 兼容性数据

## 基本信息

- **API名称**: `IntersectionObserver.unobserve`
- **MDN文档**: [IntersectionObserver.unobserve](https://developer.mozilla.org/docs/Web/API/IntersectionObserver/unobserve)
- **规范文档**: [查看规范](https://w3c.github.io/IntersectionObserver/#dom-intersectionobserver-unobserve)
- **标签**: `web-features:intersection-observer`

## 使用示例

### 基本用法

```javascript
// IntersectionObserver.unobserve 使用示例
// 请查阅MDN文档了解具体用法
console.log('IntersectionObserver.unobserve API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 51 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 | Available since [Windows Insider Preview Build 14986](https://developer.microsoft.com/microsoft-edge... |
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
- **注意事项**:
  - Available since [Windows Insider Preview Build 14986](https://developer.microsoft.com/microsoft-edge/platform/status/intersectionobserver/).

### Firefox

- **支持版本**: 55

### Safari

- **支持版本**: 12.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查IntersectionObserver.unobserve是否支持
function isIntersectionObserverUnobserveSupported() {
    return 'unobserve' in intersectionobserver && typeof intersectionobserver.unobserve === 'function';
}

if (isIntersectionObserverUnobserveSupported()) {
    console.log('IntersectionObserver.unobserve 支持');
    // 使用IntersectionObserver.unobserve
} else {
    console.log('IntersectionObserver.unobserve 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IntersectionObserver.unobserve polyfill
if (!intersectionobserver.unobserve) {
    // 在这里添加polyfill实现
    console.log('加载IntersectionObserver.unobserve polyfill');
}
```

