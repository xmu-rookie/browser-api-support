# FileSystem API 兼容性数据

## 基本信息

- **API名称**: `FileSystem`
- **MDN文档**: [FileSystem](https://developer.mozilla.org/docs/Web/API/FileSystem)
- **规范文档**: [查看规范](https://wicg.github.io/entries-api/#api-domfilesystem)

## 使用示例

### 基本用法

```javascript
// FileSystem 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileSystem API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 7 |  |
| Chrome Android | 同主版本 |  |
| Edge | ≤18 | Before Edge 79, this API was only supported in drag-and-drop scenarios using the [`DataTransferItem.... |
| Firefox | 50 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 7

### Edge

- **支持版本**: ≤18
- **注意事项**:
  - Before Edge 79, this API was only supported in drag-and-drop scenarios using the [`DataTransferItem.webkitGetAsEntry()`](https://developer.mozilla.org/docs/Web/API/DataTransferItem/webkitGetAsEntry) method. It was not available for use in file or folder picker panels (such as when you use an [`<input>`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/input) element with the [`HTMLInputElement.webkitdirectory`](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/webkitdirectory) attribute.

### Firefox

- **支持版本**: 50

### Safari

- **支持版本**: 11.1

