# HTMLElement.showPopover API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.showPopover`
- **MDN文档**: [HTMLElement.showPopover](https://developer.mozilla.org/docs/Web/API/HTMLElement/showPopover)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/popover.html#dom-showpopover)
- **标签**: `web-features:popover`

## 使用示例

### 基本用法

```javascript
// HTMLElement.showPopover 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.showPopover API');
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
// 检查HTMLElement.showPopover是否支持
function isHTMLElementShowPopoverSupported() {
    return 'showPopover' in htmlelement && typeof htmlelement.showPopover === 'function';
}

if (isHTMLElementShowPopoverSupported()) {
    console.log('HTMLElement.showPopover 支持');
    // 使用HTMLElement.showPopover
} else {
    console.log('HTMLElement.showPopover 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.showPopover polyfill
if (!htmlelement.showPopover) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.showPopover polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **options_source_parameter**: `options.source` parameter

