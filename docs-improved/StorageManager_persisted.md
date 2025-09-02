# StorageManager.persisted API 兼容性数据

## 基本信息

- **API名称**: `StorageManager.persisted`
- **MDN文档**: [StorageManager.persisted](https://developer.mozilla.org/docs/Web/API/StorageManager/persisted)
- **规范文档**: [查看规范](https://storage.spec.whatwg.org/#dom-storagemanager-persisted)
- **标签**: `web-features:storage-manager`

## 使用示例

### 基本用法

```javascript
// StorageManager.persisted 使用示例
// 请查阅MDN文档了解具体用法
console.log('StorageManager.persisted API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 55 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 57 |  |
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

- **支持版本**: 55

### Firefox

- **支持版本**: 57

### Safari

- **支持版本**: 15.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查StorageManager.persisted是否支持
function isStorageManagerPersistedSupported() {
    return 'persisted' in storagemanager && typeof storagemanager.persisted === 'function';
}

if (isStorageManagerPersistedSupported()) {
    console.log('StorageManager.persisted 支持');
    // 使用StorageManager.persisted
} else {
    console.log('StorageManager.persisted 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// StorageManager.persisted polyfill
if (!storagemanager.persisted) {
    // 在这里添加polyfill实现
    console.log('加载StorageManager.persisted polyfill');
}
```

