# PerformanceNavigation.type API 兼容性数据

## 基本信息

- **API名称**: `PerformanceNavigation.type`
- **MDN文档**: [PerformanceNavigation.type](https://developer.mozilla.org/docs/Web/API/PerformanceNavigation/type)
- **规范文档**: [查看规范](https://w3c.github.io/navigation-timing/#dom-performancenavigation-type)
- **标签**: `web-features:performancetiming`

## 使用示例

### 基本用法

```javascript
// PerformanceNavigation.type 使用示例
// 请查阅MDN文档了解具体用法
console.log('PerformanceNavigation.type API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 10 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 7 | Before Firefox 70, this property could return incorrect values. See [bug 1459711](https://bugzil.la/... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 9 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 10

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 7
- **注意事项**:
  - Before Firefox 70, this property could return incorrect values. See [bug 1459711](https://bugzil.la/1459711).

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 8

### Safari iOS

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查PerformanceNavigation.type是否支持
function isPerformanceNavigationTypeSupported() {
    return 'type' in performancenavigation && typeof performancenavigation.type === 'function';
}

if (isPerformanceNavigationTypeSupported()) {
    console.log('PerformanceNavigation.type 支持');
    // 使用PerformanceNavigation.type
} else {
    console.log('PerformanceNavigation.type 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PerformanceNavigation.type polyfill
if (!performancenavigation.type) {
    // 在这里添加polyfill实现
    console.log('加载PerformanceNavigation.type polyfill');
}
```

