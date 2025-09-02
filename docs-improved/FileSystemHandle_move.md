# FileSystemHandle.move API 兼容性数据

## 基本信息

- **API名称**: `FileSystemHandle.move`

## 使用示例

### 基本用法

```javascript
// FileSystemHandle.move 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileSystemHandle.move API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: 111

### Safari

- **支持版本**: 15.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileSystemHandle.move是否支持
function isFileSystemHandleMoveSupported() {
    return 'move' in filesystemhandle && typeof filesystemhandle.move === 'function';
}

if (isFileSystemHandleMoveSupported()) {
    console.log('FileSystemHandle.move 支持');
    // 使用FileSystemHandle.move
} else {
    console.log('FileSystemHandle.move 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileSystemHandle.move polyfill
if (!filesystemhandle.move) {
    // 在这里添加polyfill实现
    console.log('加载FileSystemHandle.move polyfill');
}
```

