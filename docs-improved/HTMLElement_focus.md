# HTMLElement.focus API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.focus`
- **MDN文档**: [HTMLElement.focus](https://developer.mozilla.org/docs/Web/API/HTMLElement/focus)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#dom-focus-dev)
- **标签**: `web-features:focus-events`

## 使用示例

### 基本用法

```javascript
// HTMLElement.focus 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.focus API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 |  |
| Oculus | 同主版本 |  |
| Opera | 8 |  |
| Opera Android | 10.1 |  |
| Safari | 3 |  |
| Safari iOS | 1 | If there's no hardware keyboard connected and the user has not yet interacted with the page, then ca... |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1.5

### Internet Explorer

- **支持版本**: 5.5

### Opera

- **支持版本**: 8

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1
- **注意事项**:
  - If there's no hardware keyboard connected and the user has not yet interacted with the page, then calling `focus()` on an `<input>` element has no effect (for example, the element does not match the `:focus` selector).

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.focus是否支持
function isHTMLElementFocusSupported() {
    return 'focus' in htmlelement && typeof htmlelement.focus === 'function';
}

if (isHTMLElementFocusSupported()) {
    console.log('HTMLElement.focus 支持');
    // 使用HTMLElement.focus
} else {
    console.log('HTMLElement.focus 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.focus polyfill
if (!htmlelement.focus) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.focus polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **options_focusVisible_parameter**: `options.focusVisible` parameter
- **options_preventScroll_parameter**: `options.preventScroll` parameter

