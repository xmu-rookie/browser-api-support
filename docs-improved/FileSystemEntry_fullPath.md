# FileSystemEntry.fullPath API 兼容性数据

## 基本信息

- **API名称**: `FileSystemEntry.fullPath`
- **MDN文档**: [FileSystemEntry.fullPath](https://developer.mozilla.org/docs/Web/API/FileSystemEntry/fullPath)
- **规范文档**: [查看规范](https://wicg.github.io/entries-api/#dom-filesystementry-fullpath)

## 使用示例

### 基本用法

```javascript
// FileSystemEntry.fullPath 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileSystemEntry.fullPath API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 8 |  |
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

- **支持版本**: 8

### Firefox

- **支持版本**: 50

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileSystemEntry.fullPath是否支持
function isFileSystemEntryFullPathSupported() {
    return 'fullPath' in filesystementry && typeof filesystementry.fullPath === 'function';
}

if (isFileSystemEntryFullPathSupported()) {
    console.log('FileSystemEntry.fullPath 支持');
    // 使用FileSystemEntry.fullPath
} else {
    console.log('FileSystemEntry.fullPath 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileSystemEntry.fullPath polyfill
if (!filesystementry.fullPath) {
    // 在这里添加polyfill实现
    console.log('加载FileSystemEntry.fullPath polyfill');
}
```

