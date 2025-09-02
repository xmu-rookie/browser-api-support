# FileSystemFileHandle.createWritable API 兼容性数据

## 基本信息

- **API名称**: `FileSystemFileHandle.createWritable`
- **MDN文档**: [FileSystemFileHandle.createWritable](https://developer.mozilla.org/docs/Web/API/FileSystemFileHandle/createWritable)
- **规范文档**: [查看规范](https://fs.spec.whatwg.org/#api-filesystemfilehandle-createwritable)
- **标签**: `web-features:file-system-access`

## 使用示例

### 基本用法

```javascript
// FileSystemFileHandle.createWritable 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileSystemFileHandle.createWritable API');
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
// 检查FileSystemFileHandle.createWritable是否支持
function isFileSystemFileHandleCreateWritableSupported() {
    return 'createWritable' in filesystemfilehandle && typeof filesystemfilehandle.createWritable === 'function';
}

if (isFileSystemFileHandleCreateWritableSupported()) {
    console.log('FileSystemFileHandle.createWritable 支持');
    // 使用FileSystemFileHandle.createWritable
} else {
    console.log('FileSystemFileHandle.createWritable 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileSystemFileHandle.createWritable polyfill
if (!filesystemfilehandle.createWritable) {
    // 在这里添加polyfill实现
    console.log('加载FileSystemFileHandle.createWritable polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **mode**: `mode` option

