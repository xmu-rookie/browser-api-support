# FileSystemDirectoryReader API 兼容性数据

## 基本信息

- **API名称**: `FileSystemDirectoryReader`
- **MDN文档**: [FileSystemDirectoryReader](https://developer.mozilla.org/docs/Web/API/FileSystemDirectoryReader)
- **规范文档**: [查看规范](https://wicg.github.io/entries-api/#api-directoryreader)

## 使用示例

### 基本用法

```javascript
// FileSystemDirectoryReader 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileSystemDirectoryReader API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 8 |  |
| Chrome Android | 同主版本 |  |
| Edge | ≤18 |  |
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

- **支持版本**: 8

### Edge

- **支持版本**: ≤18

### Firefox

- **支持版本**: 50

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileSystemDirectoryReader是否支持
function isFileSystemDirectoryReaderSupported() {
    return 'FileSystemDirectoryReader' in window || typeof FileSystemDirectoryReader !== 'undefined';
}

if (isFileSystemDirectoryReaderSupported()) {
    console.log('FileSystemDirectoryReader 支持');
    // 使用FileSystemDirectoryReader
} else {
    console.log('FileSystemDirectoryReader 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileSystemDirectoryReader polyfill
if (!window.FileSystemDirectoryReader) {
    // 在这里添加polyfill实现
    console.log('加载FileSystemDirectoryReader polyfill');
}
```

