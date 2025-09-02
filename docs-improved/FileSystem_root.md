# FileSystem.root API 兼容性数据

## 基本信息

- **API名称**: `FileSystem.root`
- **MDN文档**: [FileSystem.root](https://developer.mozilla.org/docs/Web/API/FileSystem/root)
- **规范文档**: [查看规范](https://wicg.github.io/entries-api/#dom-filesystem-root)

## 使用示例

### 基本用法

```javascript
// FileSystem.root 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileSystem.root API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 7 |  |
| Chrome Android | 同主版本 |  |
| Edge | ≤18 |  |
| Firefox | 50 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 7

### Edge

- **支持版本**: ≤18

### Firefox

- **支持版本**: 50

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileSystem.root是否支持
function isFileSystemRootSupported() {
    return 'root' in filesystem && typeof filesystem.root === 'function';
}

if (isFileSystemRootSupported()) {
    console.log('FileSystem.root 支持');
    // 使用FileSystem.root
} else {
    console.log('FileSystem.root 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileSystem.root polyfill
if (!filesystem.root) {
    // 在这里添加polyfill实现
    console.log('加载FileSystem.root polyfill');
}
```

