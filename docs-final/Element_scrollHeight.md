# Element.scrollHeight API 兼容性数据

## 基本信息

- **API名称**: `Element.scrollHeight`
- **MDN文档**: [Element.scrollHeight](https://developer.mozilla.org/docs/Web/API/Element/scrollHeight)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-element-scrollheight)
- **标签**: `web-features:scroll-elements`

## 使用示例

### 基本用法

```javascript
// Element.scrollHeight 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.scrollHeight API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 21 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5 | In Internet Explorer 5 through 7, if padding is set, the value of `scrollHeight` is equal to the sum... |
| Oculus | 同主版本 |  |
| Opera | 8 |  |
| Opera Android | 10.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 21
- **支持版本**: 3
- **移除版本**: 21
- **部分实现**: 是
- **注意事项**:
  - Before Firefox 21, when an element's content does not generate a vertical scrollbar, then its `scrollHeight` property is equal to its `clientHeight` property. This can mean either the content is too short to require a scrollbar or that the element has a CSS style `overflow` value of `visible` (non-scrollable).

### Internet Explorer

- **支持版本**: 5
- **注意事项**:
  - In Internet Explorer 5 through 7, if padding is set, the value of `scrollHeight` is equal to the sum of the top and bottom padding. This behavior was fixed in Internet Explorer 8.

### Opera

- **支持版本**: 8

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

