# StorageManager.estimate API 兼容性数据

## 基本信息

- **API名称**: `StorageManager.estimate`
- **MDN文档**: [StorageManager.estimate](https://developer.mozilla.org/docs/Web/API/StorageManager/estimate)
- **规范文档**: [查看规范](https://storage.spec.whatwg.org/#dom-storagemanager-estimate)
- **标签**: `web-features:storage-manager`

## 使用示例

### 基本用法

```javascript
// StorageManager.estimate 使用示例
// 请查阅MDN文档了解具体用法
console.log('StorageManager.estimate API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 57 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61

### Firefox

- **支持版本**: 57

### Safari

- **支持版本**: 17

## 兼容性检查代码

### 特性检测

```javascript
// 检查StorageManager.estimate是否支持
function isStorageManagerEstimateSupported() {
    return 'estimate' in storagemanager && typeof storagemanager.estimate === 'function';
}

if (isStorageManagerEstimateSupported()) {
    console.log('StorageManager.estimate 支持');
    // 使用StorageManager.estimate
} else {
    console.log('StorageManager.estimate 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// StorageManager.estimate polyfill
if (!storagemanager.estimate) {
    // 在这里添加polyfill实现
    console.log('加载StorageManager.estimate polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **usageDetails**: 查看详细兼容性

