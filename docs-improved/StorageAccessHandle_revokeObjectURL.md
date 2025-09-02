# StorageAccessHandle.revokeObjectURL API 兼容性数据

## 基本信息

- **API名称**: `StorageAccessHandle.revokeObjectURL`
- **MDN文档**: [StorageAccessHandle.revokeObjectURL](https://developer.mozilla.org/docs/Web/API/StorageAccessHandle/revokeObjectURL)
- **规范文档**: [查看规范](https://privacycg.github.io/saa-non-cookie-storage/#dom-storageaccesshandle-revokeobjecturl)
- **标签**: `web-features:non-cookie-storage-access`

## 使用示例

### 基本用法

```javascript
// StorageAccessHandle.revokeObjectURL 使用示例
// 请查阅MDN文档了解具体用法
console.log('StorageAccessHandle.revokeObjectURL API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 125 |  |
| Chrome Android | 同主版本 |  |
| Edge | 不支持 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 125

### Edge

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查StorageAccessHandle.revokeObjectURL是否支持
function isStorageAccessHandleRevokeObjectURLSupported() {
    return 'revokeObjectURL' in storageaccesshandle && typeof storageaccesshandle.revokeObjectURL === 'function';
}

if (isStorageAccessHandleRevokeObjectURLSupported()) {
    console.log('StorageAccessHandle.revokeObjectURL 支持');
    // 使用StorageAccessHandle.revokeObjectURL
} else {
    console.log('StorageAccessHandle.revokeObjectURL 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// StorageAccessHandle.revokeObjectURL polyfill
if (!storageaccesshandle.revokeObjectURL) {
    // 在这里添加polyfill实现
    console.log('加载StorageAccessHandle.revokeObjectURL polyfill');
}
```

