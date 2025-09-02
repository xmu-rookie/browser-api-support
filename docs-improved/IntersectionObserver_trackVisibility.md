# IntersectionObserver.trackVisibility API 兼容性数据

## 基本信息

- **API名称**: `IntersectionObserver.trackVisibility`
- **MDN文档**: [IntersectionObserver.trackVisibility](https://developer.mozilla.org/docs/Web/API/IntersectionObserver/trackVisibility)
- **规范文档**: [查看规范](https://w3c.github.io/IntersectionObserver/#dom-intersectionobserver-trackvisibility)
- **标签**: `web-features:intersection-observer`

## 使用示例

### 基本用法

```javascript
// IntersectionObserver.trackVisibility 使用示例
// 请查阅MDN文档了解具体用法
console.log('IntersectionObserver.trackVisibility API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 74 |  |
| Chrome Android | 同主版本 |  |
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

- **支持版本**: 74

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查IntersectionObserver.trackVisibility是否支持
function isIntersectionObserverTrackVisibilitySupported() {
    return 'trackVisibility' in intersectionobserver && typeof intersectionobserver.trackVisibility === 'function';
}

if (isIntersectionObserverTrackVisibilitySupported()) {
    console.log('IntersectionObserver.trackVisibility 支持');
    // 使用IntersectionObserver.trackVisibility
} else {
    console.log('IntersectionObserver.trackVisibility 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IntersectionObserver.trackVisibility polyfill
if (!intersectionobserver.trackVisibility) {
    // 在这里添加polyfill实现
    console.log('加载IntersectionObserver.trackVisibility polyfill');
}
```

