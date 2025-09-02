# HTMLElement.togglePopover.options_force_parameter API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.togglePopover.options_force_parameter`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dom.html#dom-togglepopoveroptions-force)
- **标签**: `web-features:popover`
- **描述**: `options.force` parameter

## 使用示例

### 基本用法

```javascript
// HTMLElement.togglePopover.options_force_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.togglePopover.options_force_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 130 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 141 |  |
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

- **支持版本**: 130

### Firefox

- **支持版本**: 141

### Safari

- **支持版本**: 18.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.togglePopover.options_force_parameter是否支持
function isHTMLElementTogglePopoverSupported() {
    return 'togglePopover' in htmlelement && typeof htmlelement.togglePopover === 'function';
}

if (isHTMLElementTogglePopoverSupported()) {
    console.log('HTMLElement.togglePopover.options_force_parameter 支持');
    // 使用HTMLElement.togglePopover.options_force_parameter
} else {
    console.log('HTMLElement.togglePopover.options_force_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.togglePopover.options_force_parameter polyfill
if (!htmlelement.togglePopover) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.togglePopover.options_force_parameter polyfill');
}
```

