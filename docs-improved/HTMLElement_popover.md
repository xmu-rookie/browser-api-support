# HTMLElement.popover API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.popover`
- **MDN文档**: [HTMLElement.popover](https://developer.mozilla.org/docs/Web/API/HTMLElement/popover)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/popover.html#dom-popover)
- **标签**: `web-features:popover`

## 使用示例

### 基本用法

```javascript
// HTMLElement.popover 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.popover API');
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
| Safari iOS | 18.3 |  |
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

### Safari iOS

- **支持版本**: 18.3
- **支持版本**: 17
- **移除版本**: 18.3
- **部分实现**: 是
- **注意事项**:
  - On iOS and iPadOS, popovers are not dismissed when the user taps outside of the popover area, see [bug 267688](https://webkit.org/b/267688).

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.popover是否支持
function isHTMLElementPopoverSupported() {
    return 'popover' in htmlelement && typeof htmlelement.popover === 'function';
}

if (isHTMLElementPopoverSupported()) {
    console.log('HTMLElement.popover 支持');
    // 使用HTMLElement.popover
} else {
    console.log('HTMLElement.popover 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.popover polyfill
if (!htmlelement.popover) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.popover polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **hint**: `hint` value

