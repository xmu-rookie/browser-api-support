# FileSystemDirectoryEntry.removeRecursively API 兼容性数据

## 基本信息

- **API名称**: `FileSystemDirectoryEntry.removeRecursively`
- **MDN文档**: [FileSystemDirectoryEntry.removeRecursively](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryEntry/removeRecursively)

## 使用示例

### 基本用法

```javascript
// FileSystemDirectoryEntry.removeRecursively 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileSystemDirectoryEntry.removeRecursively API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 8 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 50 | While the `removeRecursively()` method existed, it immediately called the error callback with `NS_ER... |
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
  - While the `removeRecursively()` method existed, it immediately called the error callback with `NS_ERROR_DOM_SECURITY_ERR`.

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileSystemDirectoryEntry.removeRecursively是否支持
function isFileSystemDirectoryEntryRemoveRecursivelySupported() {
    return 'removeRecursively' in filesystemdirectoryentry && typeof filesystemdirectoryentry.removeRecursively === 'function';
}

if (isFileSystemDirectoryEntryRemoveRecursivelySupported()) {
    console.log('FileSystemDirectoryEntry.removeRecursively 支持');
    // 使用FileSystemDirectoryEntry.removeRecursively
} else {
    console.log('FileSystemDirectoryEntry.removeRecursively 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileSystemDirectoryEntry.removeRecursively polyfill
if (!filesystemdirectoryentry.removeRecursively) {
    // 在这里添加polyfill实现
    console.log('加载FileSystemDirectoryEntry.removeRecursively polyfill');
}
```

