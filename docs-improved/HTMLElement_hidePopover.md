# HTMLElement.hidePopover API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.hidePopover`
- **MDN文档**: [HTMLElement.hidePopover](https://developer.mozilla.org/docs/Web/API/HTMLElement/hidePopover)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/popover.html#dom-hidepopover)
- **标签**: `web-features:popover`

## 使用示例

### 基本用法

```javascript
// HTMLElement.hidePopover 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.hidePopover API');
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
// 检查HTMLElement.hidePopover是否支持
function isHTMLElementHidePopoverSupported() {
    return 'hidePopover' in htmlelement && typeof htmlelement.hidePopover === 'function';
}

if (isHTMLElementHidePopoverSupported()) {
    console.log('HTMLElement.hidePopover 支持');
    // 使用HTMLElement.hidePopover
} else {
    console.log('HTMLElement.hidePopover 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.hidePopover polyfill
if (!htmlelement.hidePopover) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.hidePopover polyfill');
}
```

