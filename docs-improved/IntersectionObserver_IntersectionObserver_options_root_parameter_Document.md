# IntersectionObserver.IntersectionObserver.options_root_parameter_Document API 兼容性数据

## 基本信息

- **API名称**: `IntersectionObserver.IntersectionObserver.options_root_parameter_Document`
- **标签**: `web-features:intersection-observer`
- **描述**: `options.root` parameter can be a `Document`

## 使用示例

### 基本用法

```javascript
// IntersectionObserver.IntersectionObserver.options_root_parameter_Document 使用示例
// 请查阅MDN文档了解具体用法
console.log('IntersectionObserver.IntersectionObserver.options_root_parameter_Document API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 81 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 76 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 81

### Firefox

- **支持版本**: 76

### Safari

- **支持版本**: 14

## 兼容性检查代码

### 特性检测

```javascript
// 检查IntersectionObserver.IntersectionObserver.options_root_parameter_Document是否支持
function isIntersectionObserverIntersectionObserverSupported() {
    return 'IntersectionObserver' in intersectionobserver && typeof intersectionobserver.IntersectionObserver === 'function';
}

if (isIntersectionObserverIntersectionObserverSupported()) {
    console.log('IntersectionObserver.IntersectionObserver.options_root_parameter_Document 支持');
    // 使用IntersectionObserver.IntersectionObserver.options_root_parameter_Document
} else {
    console.log('IntersectionObserver.IntersectionObserver.options_root_parameter_Document 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IntersectionObserver.IntersectionObserver.options_root_parameter_Document polyfill
if (!intersectionobserver.IntersectionObserver) {
    // 在这里添加polyfill实现
    console.log('加载IntersectionObserver.IntersectionObserver.options_root_parameter_Document polyfill');
}
```

