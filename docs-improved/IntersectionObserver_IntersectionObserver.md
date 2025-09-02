# IntersectionObserver.IntersectionObserver API 兼容性数据

## 基本信息

- **API名称**: `IntersectionObserver.IntersectionObserver`
- **MDN文档**: [IntersectionObserver.IntersectionObserver](https://developer.mozilla.org/docs/Web/API/IntersectionObserver/IntersectionObserver)
- **规范文档**: [查看规范](https://w3c.github.io/IntersectionObserver/#dom-intersectionobserver-intersectionobserver)
- **标签**: `web-features:intersection-observer`
- **描述**: `IntersectionObserver()` constructor

## 使用示例

### 基本用法

```javascript
// IntersectionObserver.IntersectionObserver 使用示例
// 请查阅MDN文档了解具体用法
console.log('IntersectionObserver.IntersectionObserver API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 51 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
| Firefox | 55 | Before version 96, the constructor throws a `DOMException` if the `options.rootMargin` option is pas... |
| Firefox Android | 55 |  |
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
- **注意事项**:
  - Before version 96, the constructor throws a `DOMException` if the `options.rootMargin` option is passed an empty string (see [bug 1738791](https://bugzil.la/1738791)).

### Firefox Android

- **支持版本**: 55

### Safari

- **支持版本**: 12.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查IntersectionObserver.IntersectionObserver是否支持
function isIntersectionObserverIntersectionObserverSupported() {
    return 'IntersectionObserver' in intersectionobserver && typeof intersectionobserver.IntersectionObserver === 'function';
}

if (isIntersectionObserverIntersectionObserverSupported()) {
    console.log('IntersectionObserver.IntersectionObserver 支持');
    // 使用IntersectionObserver.IntersectionObserver
} else {
    console.log('IntersectionObserver.IntersectionObserver 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IntersectionObserver.IntersectionObserver polyfill
if (!intersectionobserver.IntersectionObserver) {
    // 在这里添加polyfill实现
    console.log('加载IntersectionObserver.IntersectionObserver polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **options_root_parameter_Document**: `options.root` parameter can be a `Document`

