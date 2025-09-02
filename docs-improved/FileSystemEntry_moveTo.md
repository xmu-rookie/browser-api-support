# FileSystemEntry.moveTo API 兼容性数据

## 基本信息

- **API名称**: `FileSystemEntry.moveTo`
- **MDN文档**: [FileSystemEntry.moveTo](https://developer.mozilla.org/docs/Web/API/FileSystemEntry/moveTo)

## 使用示例

### 基本用法

```javascript
// FileSystemEntry.moveTo 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileSystemEntry.moveTo API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 8 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileSystemEntry.moveTo是否支持
function isFileSystemEntryMoveToSupported() {
    return 'moveTo' in filesystementry && typeof filesystementry.moveTo === 'function';
}

if (isFileSystemEntryMoveToSupported()) {
    console.log('FileSystemEntry.moveTo 支持');
    // 使用FileSystemEntry.moveTo
} else {
    console.log('FileSystemEntry.moveTo 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileSystemEntry.moveTo polyfill
if (!filesystementry.moveTo) {
    // 在这里添加polyfill实现
    console.log('加载FileSystemEntry.moveTo polyfill');
}
```

