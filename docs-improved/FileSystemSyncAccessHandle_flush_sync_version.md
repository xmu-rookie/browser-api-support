# FileSystemSyncAccessHandle.flush.sync_version API 兼容性数据

## 基本信息

- **API名称**: `FileSystemSyncAccessHandle.flush.sync_version`
- **标签**: `web-features:origin-private-file-system`
- **描述**: Synchronous implementation of the `flush()` method

## 使用示例

### 基本用法

```javascript
// FileSystemSyncAccessHandle.flush.sync_version 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileSystemSyncAccessHandle.flush.sync_version API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 108 |  |
| Chrome Android | 109 |  |
| Edge | 同主版本 |  |
| Firefox | 111 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 108

### Chrome Android

- **支持版本**: 109

### Firefox

- **支持版本**: 111

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileSystemSyncAccessHandle.flush.sync_version是否支持
function isFileSystemSyncAccessHandleFlushSupported() {
    return 'flush' in filesystemsyncaccesshandle && typeof filesystemsyncaccesshandle.flush === 'function';
}

if (isFileSystemSyncAccessHandleFlushSupported()) {
    console.log('FileSystemSyncAccessHandle.flush.sync_version 支持');
    // 使用FileSystemSyncAccessHandle.flush.sync_version
} else {
    console.log('FileSystemSyncAccessHandle.flush.sync_version 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileSystemSyncAccessHandle.flush.sync_version polyfill
if (!filesystemsyncaccesshandle.flush) {
    // 在这里添加polyfill实现
    console.log('加载FileSystemSyncAccessHandle.flush.sync_version polyfill');
}
```

