# HTMLElement.togglePopover API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.togglePopover`
- **MDN文档**: [HTMLElement.togglePopover](https://developer.mozilla.org/docs/Web/API/HTMLElement/togglePopover)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/popover.html#dom-togglepopover)
- **标签**: `web-features:popover`

## 使用示例

### 基本用法

```javascript
// HTMLElement.togglePopover 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.togglePopover API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 114 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 125 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 114

### Firefox

- **支持版本**: 125

### Safari

- **支持版本**: 17

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.togglePopover是否支持
function isHTMLElementTogglePopoverSupported() {
    return 'togglePopover' in htmlelement && typeof htmlelement.togglePopover === 'function';
}

if (isHTMLElementTogglePopoverSupported()) {
    console.log('HTMLElement.togglePopover 支持');
    // 使用HTMLElement.togglePopover
} else {
    console.log('HTMLElement.togglePopover 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.togglePopover polyfill
if (!htmlelement.togglePopover) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.togglePopover polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **force_parameter**: `force` parameter
- **options_force_parameter**: `options.force` parameter
- **options_source_parameter**: `options.source` parameter
- **returns_boolean**: Returns `true` or `false`

