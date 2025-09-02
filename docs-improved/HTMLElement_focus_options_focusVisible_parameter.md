# HTMLElement.focus.options_focusVisible_parameter API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.focus.options_focusVisible_parameter`
- **标签**: `web-features:focus-events`
- **描述**: `options.focusVisible` parameter

## 使用示例

### 基本用法

```javascript
// HTMLElement.focus.options_focusVisible_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.focus.options_focusVisible_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 104 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 104

### Safari

- **支持版本**: 18.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.focus.options_focusVisible_parameter是否支持
function isHTMLElementFocusSupported() {
    return 'focus' in htmlelement && typeof htmlelement.focus === 'function';
}

if (isHTMLElementFocusSupported()) {
    console.log('HTMLElement.focus.options_focusVisible_parameter 支持');
    // 使用HTMLElement.focus.options_focusVisible_parameter
} else {
    console.log('HTMLElement.focus.options_focusVisible_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.focus.options_focusVisible_parameter polyfill
if (!htmlelement.focus) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.focus.options_focusVisible_parameter polyfill');
}
```

