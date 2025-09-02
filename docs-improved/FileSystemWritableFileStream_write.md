# FileSystemWritableFileStream.write API 兼容性数据

## 基本信息

- **API名称**: `FileSystemWritableFileStream.write`
- **MDN文档**: [FileSystemWritableFileStream.write](https://developer.mozilla.org/docs/Web/API/FileSystemWritableFileStream/write)
- **规范文档**: [查看规范](https://fs.spec.whatwg.org/#api-filesystemwritablefilestream-write)
- **标签**: `web-features:file-system-access`

## 使用示例

### 基本用法

```javascript
// FileSystemWritableFileStream.write 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileSystemWritableFileStream.write API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 86 |  |
| Chrome Android | 109 |  |
| Edge | 同主版本 |  |
| Firefox | 111 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 86

### Chrome Android

- **支持版本**: 109

### Firefox

- **支持版本**: 111

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileSystemWritableFileStream.write是否支持
function isFileSystemWritableFileStreamWriteSupported() {
    return 'write' in filesystemwritablefilestream && typeof filesystemwritablefilestream.write === 'function';
}

if (isFileSystemWritableFileStreamWriteSupported()) {
    console.log('FileSystemWritableFileStream.write 支持');
    // 使用FileSystemWritableFileStream.write
} else {
    console.log('FileSystemWritableFileStream.write 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileSystemWritableFileStream.write polyfill
if (!filesystemwritablefilestream.write) {
    // 在这里添加polyfill实现
    console.log('加载FileSystemWritableFileStream.write polyfill');
}
```

