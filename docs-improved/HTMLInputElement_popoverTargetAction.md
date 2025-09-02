# HTMLInputElement.popoverTargetAction API 兼容性数据

## 基本信息

- **API名称**: `HTMLInputElement.popoverTargetAction`
- **MDN文档**: [HTMLInputElement.popoverTargetAction](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/popoverTargetAction)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/popover.html#dom-popovertargetaction)
- **标签**: `web-features:popover`

## 使用示例

### 基本用法

```javascript
// HTMLInputElement.popoverTargetAction 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLInputElement.popoverTargetAction API');
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
// 检查HTMLInputElement.popoverTargetAction是否支持
function isHTMLInputElementPopoverTargetActionSupported() {
    return 'popoverTargetAction' in htmlinputelement && typeof htmlinputelement.popoverTargetAction === 'function';
}

if (isHTMLInputElementPopoverTargetActionSupported()) {
    console.log('HTMLInputElement.popoverTargetAction 支持');
    // 使用HTMLInputElement.popoverTargetAction
} else {
    console.log('HTMLInputElement.popoverTargetAction 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLInputElement.popoverTargetAction polyfill
if (!htmlinputelement.popoverTargetAction) {
    // 在这里添加polyfill实现
    console.log('加载HTMLInputElement.popoverTargetAction polyfill');
}
```

