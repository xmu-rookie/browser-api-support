# FileSystemSyncAccessHandle.close API 兼容性数据

## 基本信息

- **API名称**: `FileSystemSyncAccessHandle.close`
- **MDN文档**: [FileSystemSyncAccessHandle.close](https://developer.mozilla.org/docs/Web/API/FileSystemSyncAccessHandle/close)
- **规范文档**: [查看规范](https://fs.spec.whatwg.org/#api-filesystemsyncaccesshandle-close)
- **标签**: `web-features:origin-private-file-system`

## 使用示例

### 基本用法

```javascript
// FileSystemSyncAccessHandle.close 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileSystemSyncAccessHandle.close API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 102 |  |
| Chrome Android | 109 |  |
| Edge | 同主版本 |  |
| Firefox | 111 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 102

### Chrome Android

- **支持版本**: 109

### Firefox

- **支持版本**: 111

### Safari

- **支持版本**: 15.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileSystemSyncAccessHandle.close是否支持
function isFileSystemSyncAccessHandleCloseSupported() {
    return 'close' in filesystemsyncaccesshandle && typeof filesystemsyncaccesshandle.close === 'function';
}

if (isFileSystemSyncAccessHandleCloseSupported()) {
    console.log('FileSystemSyncAccessHandle.close 支持');
    // 使用FileSystemSyncAccessHandle.close
} else {
    console.log('FileSystemSyncAccessHandle.close 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileSystemSyncAccessHandle.close polyfill
if (!filesystemsyncaccesshandle.close) {
    // 在这里添加polyfill实现
    console.log('加载FileSystemSyncAccessHandle.close polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **sync_version**: Synchronous implementation of the `close()` method

