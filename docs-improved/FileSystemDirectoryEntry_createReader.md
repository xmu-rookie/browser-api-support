# FileSystemDirectoryEntry.createReader API 兼容性数据

## 基本信息

- **API名称**: `FileSystemDirectoryEntry.createReader`
- **MDN文档**: [FileSystemDirectoryEntry.createReader](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryEntry/createReader)
- **规范文档**: [查看规范](https://wicg.github.io/entries-api/#dom-filesystemdirectoryentry-createreader)

## 使用示例

### 基本用法

```javascript
// FileSystemDirectoryEntry.createReader 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileSystemDirectoryEntry.createReader API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 13 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
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

- **支持版本**: 13

### Firefox

- **支持版本**: 50

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileSystemDirectoryEntry.createReader是否支持
function isFileSystemDirectoryEntryCreateReaderSupported() {
    return 'createReader' in filesystemdirectoryentry && typeof filesystemdirectoryentry.createReader === 'function';
}

if (isFileSystemDirectoryEntryCreateReaderSupported()) {
    console.log('FileSystemDirectoryEntry.createReader 支持');
    // 使用FileSystemDirectoryEntry.createReader
} else {
    console.log('FileSystemDirectoryEntry.createReader 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileSystemDirectoryEntry.createReader polyfill
if (!filesystemdirectoryentry.createReader) {
    // 在这里添加polyfill实现
    console.log('加载FileSystemDirectoryEntry.createReader polyfill');
}
```

