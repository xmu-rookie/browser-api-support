# DirectoryReaderSync API 兼容性数据

## 基本信息

- **API名称**: `DirectoryReaderSync`
- **MDN文档**: [DirectoryReaderSync](https://developer.mozilla.org/docs/Web/API/DirectoryReaderSync)

## 使用示例

### 基本用法

```javascript
// DirectoryReaderSync 使用示例
// 请查阅MDN文档了解具体用法
console.log('DirectoryReaderSync API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 13 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | ❌ 不支持 |  |
| Opera Android | ❌ 不支持 |  |
| Safari | ❌ 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 37 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 13

### Firefox

- **支持版本**: 不支持

### Opera

- **支持版本**: 不支持

### Opera Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 37

## 兼容性检查代码

### 特性检测

```javascript
// 检查DirectoryReaderSync是否支持
function isDirectoryReaderSyncSupported() {
    return 'DirectoryReaderSync' in window || typeof DirectoryReaderSync !== 'undefined';
}

if (isDirectoryReaderSyncSupported()) {
    console.log('DirectoryReaderSync 支持');
    // 使用DirectoryReaderSync
} else {
    console.log('DirectoryReaderSync 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DirectoryReaderSync polyfill
if (!window.DirectoryReaderSync) {
    // 在这里添加polyfill实现
    console.log('加载DirectoryReaderSync polyfill');
}
```

