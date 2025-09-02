# Element.scrollIntoView.options_parameter API 兼容性数据

## 基本信息

- **API名称**: `Element.scrollIntoView.options_parameter`
- **标签**: `web-features:scroll-into-view`
- **描述**: `options` parameter

## 使用示例

### 基本用法

```javascript
// Element.scrollIntoView.options_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.scrollIntoView.options_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 | The `block` and `inline` options support the values `start`, `center`, `end`, `nearest`. |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 36 | No support for `inline` option.; Before Firefox 58, `nearest` and `center` values for the `block` op... |
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

- **支持版本**: 61
- **注意事项**:
  - The `block` and `inline` options support the values `start`, `center`, `end`, `nearest`.

### Firefox

- **支持版本**: 36
- **注意事项**:
  - No support for `inline` option.
  - Before Firefox 58, `nearest` and `center` values for the `block` option was unsupported. See [bug 1389274](https://bugzil.la/1389274).

### Safari

- **支持版本**: 14

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.scrollIntoView.options_parameter是否支持
function isElementScrollIntoViewSupported() {
    return 'scrollIntoView' in element && typeof element.scrollIntoView === 'function';
}

if (isElementScrollIntoViewSupported()) {
    console.log('Element.scrollIntoView.options_parameter 支持');
    // 使用Element.scrollIntoView.options_parameter
} else {
    console.log('Element.scrollIntoView.options_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.scrollIntoView.options_parameter polyfill
if (!element.scrollIntoView) {
    // 在这里添加polyfill实现
    console.log('加载Element.scrollIntoView.options_parameter polyfill');
}
```

