# FileSystemFileEntry API 兼容性数据

## 基本信息

- **API名称**: `FileSystemFileEntry`
- **MDN文档**: [FileSystemFileEntry](https://developer.mozilla.org/docs/Web/API/FileSystemFileEntry)
- **规范文档**: [查看规范](https://wicg.github.io/entries-api/#api-fileentry)

## 使用示例

### 基本用法

```javascript
// FileSystemFileEntry 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileSystemFileEntry API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 8 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 50 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
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

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileSystemFileEntry是否支持
function isFileSystemFileEntrySupported() {
    return 'FileSystemFileEntry' in window || typeof FileSystemFileEntry !== 'undefined';
}

if (isFileSystemFileEntrySupported()) {
    console.log('FileSystemFileEntry 支持');
    // 使用FileSystemFileEntry
} else {
    console.log('FileSystemFileEntry 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileSystemFileEntry polyfill
if (!window.FileSystemFileEntry) {
    // 在这里添加polyfill实现
    console.log('加载FileSystemFileEntry polyfill');
}
```

