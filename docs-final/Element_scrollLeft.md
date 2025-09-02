# Element.scrollLeft API 兼容性数据

## 基本信息

- **API名称**: `Element.scrollLeft`
- **MDN文档**: [Element.scrollLeft](https://developer.mozilla.org/docs/Web/API/Element/scrollLeft)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-element-scrollleft)
- **标签**: `web-features:scroll-elements`

## 使用示例

### 基本用法

```javascript
// Element.scrollLeft 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.scrollLeft API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 86 |  |
| Chrome Android | 同主版本 |  |
| Edge | 86 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5 | For right-to-left elements, this property uses 100-0 (most left to most right) instead of negative v... |
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

- **支持版本**: 86
- **支持版本**: 1
- **移除版本**: 86
- **注意事项**:
  - For right-to-left elements, this property uses 0-100 (most left to most right) instead of negative values. See [bug 41319147](https://crbug.com/41319147).

### Edge

- **支持版本**: 86
- **支持版本**: 12
- **移除版本**: 86
- **注意事项**:
  - For right-to-left elements, this property uses 0-100 (most left to most right) instead of negative values. See [bug 41319147](https://crbug.com/41319147).

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 5
- **注意事项**:
  - For right-to-left elements, this property uses 100-0 (most left to most right) instead of negative values.

### Opera

- **支持版本**: 8

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

