# DataTransferItem.getAsFileSystemHandle API 兼容性数据

## 基本信息

- **API名称**: `DataTransferItem.getAsFileSystemHandle`
- **MDN文档**: [DataTransferItem.getAsFileSystemHandle](https://developer.mozilla.org/docs/Web/API/DataTransferItem/getAsFileSystemHandle)
- **规范文档**: [查看规范](https://wicg.github.io/file-system-access/#dom-datatransferitem-getasfilesystemhandle)
- **标签**: `web-features:draganddrop`

## 使用示例

### 基本用法

```javascript
// DataTransferItem.getAsFileSystemHandle 使用示例
// 请查阅MDN文档了解具体用法
console.log('DataTransferItem.getAsFileSystemHandle API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 86 |  |
| Chrome Android | 132 |  |
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

- **支持版本**: 86

### Chrome Android

- **支持版本**: 132

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查DataTransferItem.getAsFileSystemHandle是否支持
function isDataTransferItemGetAsFileSystemHandleSupported() {
    return 'getAsFileSystemHandle' in datatransferitem && typeof datatransferitem.getAsFileSystemHandle === 'function';
}

if (isDataTransferItemGetAsFileSystemHandleSupported()) {
    console.log('DataTransferItem.getAsFileSystemHandle 支持');
    // 使用DataTransferItem.getAsFileSystemHandle
} else {
    console.log('DataTransferItem.getAsFileSystemHandle 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DataTransferItem.getAsFileSystemHandle polyfill
if (!datatransferitem.getAsFileSystemHandle) {
    // 在这里添加polyfill实现
    console.log('加载DataTransferItem.getAsFileSystemHandle polyfill');
}
```

