# FileSystemFileEntry.createWriter API 兼容性数据

## 基本信息

- **API名称**: `FileSystemFileEntry.createWriter`
- **MDN文档**: [FileSystemFileEntry.createWriter](https://developer.mozilla.org/docs/Web/API/FileSystemFileEntry/createWriter)

## 使用示例

### 基本用法

```javascript
// FileSystemFileEntry.createWriter 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileSystemFileEntry.createWriter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 8 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 50 | While the `createWriter()` method existed, it immediately called `errorCallback` with the `NS_ERROR_... |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 8

### Firefox

- **支持版本**: 50
- **移除版本**: 52
- **注意事项**:
  - While the `createWriter()` method existed, it immediately called `errorCallback` with the `NS_ERROR_DOM_SECURITY_ERR` error.

### Safari

- **支持版本**: 不支持

