# ClipboardItem.ClipboardItem API 兼容性数据

## 基本信息

- **API名称**: `ClipboardItem.ClipboardItem`
- **MDN文档**: [ClipboardItem.ClipboardItem](https://developer.mozilla.org/docs/Web/API/ClipboardItem/ClipboardItem)
- **规范文档**: [查看规范](https://w3c.github.io/clipboard-apis/#dom-clipboarditem-clipboarditem)
- **标签**: `web-features:async-clipboard`
- **描述**: `ClipboardItem()` constructor

## 使用示例

### 基本用法

```javascript
// ClipboardItem.ClipboardItem 使用示例
// 请查阅MDN文档了解具体用法
console.log('ClipboardItem.ClipboardItem API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 133 |  |
| Chrome Android | 98 |  |
| Edge | 同主版本 |  |
| Firefox | 127 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 133
- **支持版本**: 98
- **移除版本**: 133
- **部分实现**: 是
- **注意事项**:
  - Only accepts a `Blob` or a Promise resolving to a `Blob` as the item data.
- **支持版本**: 76
- **移除版本**: 98
- **部分实现**: 是
- **注意事项**:
  - Only accepts a `Blob` as the item data. See [bug 40103226](https://crbug.com/40103226).

### Chrome Android

- **支持版本**: 98
- **支持版本**: 84
- **移除版本**: 98
- **部分实现**: 是
- **注意事项**:
  - The `ClipboardItem` constructor only accepts a blob as the item data, but not strings or Promises that resolve to strings or blobs. See [bug 40103226](https://crbug.com/40103226).

### Firefox

- **支持版本**: 127

### Safari

- **支持版本**: 13.1

