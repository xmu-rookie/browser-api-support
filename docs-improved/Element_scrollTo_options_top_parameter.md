# Element.scrollTo.options_top_parameter API 兼容性数据

## 基本信息

- **API名称**: `Element.scrollTo.options_top_parameter`
- **标签**: `web-features:scroll-elements`
- **描述**: `options.top` parameter

## 使用示例

### 基本用法

```javascript
// Element.scrollTo.options_top_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.scrollTo.options_top_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 36 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61

### Firefox

- **支持版本**: 36

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.scrollTo.options_top_parameter是否支持
function isElementScrollToSupported() {
    return 'scrollTo' in element && typeof element.scrollTo === 'function';
}

if (isElementScrollToSupported()) {
    console.log('Element.scrollTo.options_top_parameter 支持');
    // 使用Element.scrollTo.options_top_parameter
} else {
    console.log('Element.scrollTo.options_top_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.scrollTo.options_top_parameter polyfill
if (!element.scrollTo) {
    // 在这里添加polyfill实现
    console.log('加载Element.scrollTo.options_top_parameter polyfill');
}
```

