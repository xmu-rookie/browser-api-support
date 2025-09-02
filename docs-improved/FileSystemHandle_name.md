# FileSystemHandle.name API 兼容性数据

## 基本信息

- **API名称**: `FileSystemHandle.name`
- **MDN文档**: [FileSystemHandle.name](https://developer.mozilla.org/docs/Web/API/FileSystemHandle/name)
- **规范文档**: [查看规范](https://fs.spec.whatwg.org/#ref-for-dom-filesystemhandle-name①)
- **标签**: `web-features:origin-private-file-system`

## 使用示例

### 基本用法

```javascript
// FileSystemHandle.name 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileSystemHandle.name API');
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
| Safari | 15.2 |  |
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

- **支持版本**: 15.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileSystemHandle.name是否支持
function isFileSystemHandleNameSupported() {
    return 'name' in filesystemhandle && typeof filesystemhandle.name === 'function';
}

if (isFileSystemHandleNameSupported()) {
    console.log('FileSystemHandle.name 支持');
    // 使用FileSystemHandle.name
} else {
    console.log('FileSystemHandle.name 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileSystemHandle.name polyfill
if (!filesystemhandle.name) {
    // 在这里添加polyfill实现
    console.log('加载FileSystemHandle.name polyfill');
}
```

