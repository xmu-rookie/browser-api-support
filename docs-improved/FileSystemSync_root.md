# FileSystemSync.root API 兼容性数据

## 基本信息

- **API名称**: `FileSystemSync.root`

## 使用示例

### 基本用法

```javascript
// FileSystemSync.root 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileSystemSync.root API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 13 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 13

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 6
- **移除版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileSystemSync.root是否支持
function isFileSystemSyncRootSupported() {
    return 'root' in filesystemsync && typeof filesystemsync.root === 'function';
}

if (isFileSystemSyncRootSupported()) {
    console.log('FileSystemSync.root 支持');
    // 使用FileSystemSync.root
} else {
    console.log('FileSystemSync.root 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileSystemSync.root polyfill
if (!filesystemsync.root) {
    // 在这里添加polyfill实现
    console.log('加载FileSystemSync.root polyfill');
}
```

