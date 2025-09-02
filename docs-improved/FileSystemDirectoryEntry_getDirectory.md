# FileSystemDirectoryEntry.getDirectory API 兼容性数据

## 基本信息

- **API名称**: `FileSystemDirectoryEntry.getDirectory`
- **MDN文档**: [FileSystemDirectoryEntry.getDirectory](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryEntry/getDirectory)
- **规范文档**: [查看规范](https://wicg.github.io/entries-api/#dom-filesystemdirectoryentry-getdirectory)

## 使用示例

### 基本用法

```javascript
// FileSystemDirectoryEntry.getDirectory 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileSystemDirectoryEntry.getDirectory API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 8 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 50 | In Firefox, the `errorCallback`'s input parameter is a [`DOMException`](https://developer.mozilla.or... |
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

- **支持版本**: 8

### Firefox

- **支持版本**: 50
- **注意事项**:
  - In Firefox, the `errorCallback`'s input parameter is a [`DOMException`](https://developer.mozilla.org/docs/Web/API/DOMException) rather than a [`FileError`](https://developer.mozilla.org/docs/Web/API/FileError) object.

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileSystemDirectoryEntry.getDirectory是否支持
function isFileSystemDirectoryEntryGetDirectorySupported() {
    return 'getDirectory' in filesystemdirectoryentry && typeof filesystemdirectoryentry.getDirectory === 'function';
}

if (isFileSystemDirectoryEntryGetDirectorySupported()) {
    console.log('FileSystemDirectoryEntry.getDirectory 支持');
    // 使用FileSystemDirectoryEntry.getDirectory
} else {
    console.log('FileSystemDirectoryEntry.getDirectory 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileSystemDirectoryEntry.getDirectory polyfill
if (!filesystemdirectoryentry.getDirectory) {
    // 在这里添加polyfill实现
    console.log('加载FileSystemDirectoryEntry.getDirectory polyfill');
}
```

