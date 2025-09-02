# FileSystemObserver.FileSystemObserver API 兼容性数据

## 基本信息

- **API名称**: `FileSystemObserver.FileSystemObserver`
- **MDN文档**: [FileSystemObserver.FileSystemObserver](https://developer.mozilla.org/docs/Web/API/FileSystemObserver/FileSystemObserver)
- **描述**: `FileSystemObserver()` constructor

## 使用示例

### 基本用法

```javascript
// FileSystemObserver.FileSystemObserver 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileSystemObserver.FileSystemObserver API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 133 |  |
| Chrome Android | 不支持 |  |
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

- **支持版本**: 133

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileSystemObserver.FileSystemObserver是否支持
function isFileSystemObserverFileSystemObserverSupported() {
    return 'FileSystemObserver' in filesystemobserver && typeof filesystemobserver.FileSystemObserver === 'function';
}

if (isFileSystemObserverFileSystemObserverSupported()) {
    console.log('FileSystemObserver.FileSystemObserver 支持');
    // 使用FileSystemObserver.FileSystemObserver
} else {
    console.log('FileSystemObserver.FileSystemObserver 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileSystemObserver.FileSystemObserver polyfill
if (!filesystemobserver.FileSystemObserver) {
    // 在这里添加polyfill实现
    console.log('加载FileSystemObserver.FileSystemObserver polyfill');
}
```

