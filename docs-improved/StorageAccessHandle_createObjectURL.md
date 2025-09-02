# StorageAccessHandle.createObjectURL API 兼容性数据

## 基本信息

- **API名称**: `StorageAccessHandle.createObjectURL`
- **MDN文档**: [StorageAccessHandle.createObjectURL](https://developer.mozilla.org/docs/Web/API/StorageAccessHandle/createObjectURL)
- **规范文档**: [查看规范](https://privacycg.github.io/saa-non-cookie-storage/#dom-storageaccesshandle-createobjecturl)
- **标签**: `web-features:non-cookie-storage-access`

## 使用示例

### 基本用法

```javascript
// StorageAccessHandle.createObjectURL 使用示例
// 请查阅MDN文档了解具体用法
console.log('StorageAccessHandle.createObjectURL API');
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
// 检查StorageAccessHandle.createObjectURL是否支持
function isStorageAccessHandleCreateObjectURLSupported() {
    return 'createObjectURL' in storageaccesshandle && typeof storageaccesshandle.createObjectURL === 'function';
}

if (isStorageAccessHandleCreateObjectURLSupported()) {
    console.log('StorageAccessHandle.createObjectURL 支持');
    // 使用StorageAccessHandle.createObjectURL
} else {
    console.log('StorageAccessHandle.createObjectURL 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// StorageAccessHandle.createObjectURL polyfill
if (!storageaccesshandle.createObjectURL) {
    // 在这里添加polyfill实现
    console.log('加载StorageAccessHandle.createObjectURL polyfill');
}
```

