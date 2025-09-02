# FileSystemHandle.remove API 兼容性数据

## 基本信息

- **API名称**: `FileSystemHandle.remove`
- **MDN文档**: [FileSystemHandle.remove](https://developer.mozilla.org/docs/Web/API/FileSystemHandle/remove)

## 使用示例

### 基本用法

```javascript
// FileSystemHandle.remove 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileSystemHandle.remove API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 110 |  |
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

- **支持版本**: 110

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileSystemHandle.remove是否支持
function isFileSystemHandleRemoveSupported() {
    return 'remove' in filesystemhandle && typeof filesystemhandle.remove === 'function';
}

if (isFileSystemHandleRemoveSupported()) {
    console.log('FileSystemHandle.remove 支持');
    // 使用FileSystemHandle.remove
} else {
    console.log('FileSystemHandle.remove 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileSystemHandle.remove polyfill
if (!filesystemhandle.remove) {
    // 在这里添加polyfill实现
    console.log('加载FileSystemHandle.remove polyfill');
}
```

