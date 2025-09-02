# IntersectionObserver.scrollMargin API 兼容性数据

## 基本信息

- **API名称**: `IntersectionObserver.scrollMargin`
- **MDN文档**: [IntersectionObserver.scrollMargin](https://developer.mozilla.org/docs/Web/API/IntersectionObserver/scrollMargin)
- **标签**: `web-features:intersection-observer`

## 使用示例

### 基本用法

```javascript
// IntersectionObserver.scrollMargin 使用示例
// 请查阅MDN文档了解具体用法
console.log('IntersectionObserver.scrollMargin API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 120 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 141 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 120

### Firefox

- **支持版本**: 141

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查IntersectionObserver.scrollMargin是否支持
function isIntersectionObserverScrollMarginSupported() {
    return 'scrollMargin' in intersectionobserver && typeof intersectionobserver.scrollMargin === 'function';
}

if (isIntersectionObserverScrollMarginSupported()) {
    console.log('IntersectionObserver.scrollMargin 支持');
    // 使用IntersectionObserver.scrollMargin
} else {
    console.log('IntersectionObserver.scrollMargin 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IntersectionObserver.scrollMargin polyfill
if (!intersectionobserver.scrollMargin) {
    // 在这里添加polyfill实现
    console.log('加载IntersectionObserver.scrollMargin polyfill');
}
```

